// Dependencias.
import React, { Component } from "react";

class Text extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, style } = this.props;

    return <p style={style}>{text}</p>;
  }
}

export { Text };
