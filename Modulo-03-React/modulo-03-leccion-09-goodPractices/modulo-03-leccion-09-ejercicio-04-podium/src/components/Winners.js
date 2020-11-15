import React from "react";

const users = [
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Gregory Goyle", time: 56 },
];

class Winners extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const [first, second, third] = users;
    return (
      <ul className="list">
        <li key={first.time}>
          Nombre: {first.name} | Tiempo: {first.time}
        </li>
        <li key={second.time}>
          Nombre: {second.name} | Tiempo: {second.time}
        </li>
        <li key={third.time}>
          Nombre: {third.name} | Tiempo: {third.time}
        </li>
      </ul>
    );
  }
}
export default Winners;
