import React from "react";

class MIMIMITranslator extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p className="paragrah">
        {this.props.text.replace(/[aáAÁeéEÉoóOÓuúUÚ]/gi, "i")}
      </p>
    );
  }
}

export default MIMIMITranslator;
