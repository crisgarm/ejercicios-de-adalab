import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">Cantidad: {this.props.quantity}</h5>
        <div>
          <h5>Nombre: {this.props.name}</h5>
          <h6 className="text-muted">Descripción:{this.props.description}</h6>
        </div>
        <div className="badge badge-info">Categoría:{this.props.category}</div>
        <h5 className="price">Precio: {this.props.price}€</h5>
      </div>
    );
  }
}

Item.defaultProps = {
  description: "No hay descripción",
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;
