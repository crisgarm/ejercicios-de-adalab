import React from "react";

class Card extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
        <p>{this.props.lang}</p>
      </div>
    );
  }
}

export default Card;
