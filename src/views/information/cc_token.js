import React, { Component } from "react";

class Cc_token extends React.Component {

  componentDidMount() {
    window.gbFunc()
  }

  render() {
    return (
      <div id="mydiv">
        <form id="checkout-form" action="./subscription_cc_checkout.html">
          <div id="gb-form" style={{ height: "600px" }}></div>
        </form>
      </div>
    )
  }
}

export default Cc_token;