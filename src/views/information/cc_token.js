import React, { Component } from "react";

class Cc_token extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "../gb/GBPrimePay.js";
    script.type = "text/jsx";
    console.log('script', script)

    const container = document.getElementById("mydiv");
    container.appendChild(script); 
    //document.body.appendChild(script);

    let card = new script.GBPrimePay({
      publicKey: 'HZUfYchqY3T49pWGoookdeS9eelqfOo7',
      gbForm: '#gb-form',
      merchantForm: '#checkout-form',
      amount: 1.00,
      customStyle: {
        backgroundColor: '#eaeaea'
      },
      env: 'prd' // default prd | optional: test, prd
    });
    console.log('card',card) ;
  }

  render() {
    return (
      <div id="mydiv">
        <h1>CC TOKEN PAGE</h1>
        <form id="checkout-form" action="./subscription_cc_checkout.html">
          <div id="gb-form" style={{ height: "600px" }}></div>
        </form>
      </div>
    )
  }
}

export default Cc_token;