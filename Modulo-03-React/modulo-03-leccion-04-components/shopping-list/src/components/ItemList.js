import React from "react";
import Item from "./Item";

const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
  {
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
];

class ItemList extends React.Component {
  render() {
    const newArrayFilter = arrayOfItems.filter((item) => item.price < 10);
    const newArrayMap = newArrayFilter.map((item) => {
      return (
        <li>
          <Item
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            category={item.category}
            price={item.price}
          />
        </li>
      );
    });
    return <ul className="item-list">{newArrayMap}</ul>;
  }
}

export default ItemList;
