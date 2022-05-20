import React, { Component } from "react";
import { connect } from "react-redux";

class Cc_token extends React.Component {

  componentDidMount() {
    //window.gbFunc(this.props.program.price) //ใช้จริง
    window.gbFunc(1) // สำหรับเทส
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

const mapStateToProps = ({  exerciseProgram }) => {
  const { program } = exerciseProgram;
  return { program };
};

const mapActionsToProps = { };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Cc_token);