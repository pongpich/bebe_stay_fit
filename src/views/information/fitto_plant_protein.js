import React, { Component, } from "react";
import group19 from "../../assets/img/group19.png";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram"
import { selectProducts, clearSelectProducts } from "../../redux/shippingAddress"

const fitto = [
  "คลาสสิค มอลต์",
  "มิลค์ ที",
  "ดับเบิ้ล ช็อคโก้ ฟัดจ์",
  "สตรอว์เบอร์รี่ ครัช",
  "ฮอกไกโด มิลค์"
];

class Fitto_Plant_Protein extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      box1: "box1",
      valuebox1: "คลาสสิค มอลต์",
      box2: "box2",
      valuebox2: "คลาสสิค มอลต์",
      box3: "box3",
      valuebox3: "คลาสสิค มอลต์",
      box4: "box4",
      valuebox4: "คลาสสิค มอลต์",
      box5: "box5",
      valuebox5: "คลาสสิค มอลต์",
      box6: "box6",
      valuebox6: "คลาสสิค มอลต์"

    };
  }

  componentDidMount() {
    const { user_program_id, create_user_email } = this.props;

    this.props.getUserProgram(create_user_email);

    this.props.clearSelectProducts()

    if (user_program_id) { //ถ้ามี user_program_id แสดงว่าชำระเงินสำเร็จแล้ว
      this.props.history.push('/welcome_new_nember');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, products_list } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push('/welcome_new_nember');
    }
    if (!prevProps.products_list && products_list) {
      this.props.history.push('/shipping_address');
    }
  }

  onNextPage() {
    const { valuebox1, valuebox2, valuebox3, valuebox4, valuebox5, valuebox6 } = this.state;
    const products_list = { "product1": valuebox1, "product2": valuebox2, "product3": valuebox3, "product4": valuebox4, "product5": valuebox5, "product6": valuebox6 }
    console.log("products_list :", products_list)
    this.props.selectProducts(products_list);
  }



  boxFitto = (event) => {
    let box = event.target.name;
    let value = event.target.value;
    let valuebox = `value${box}`;
    this.setState({
      [box]: box,
      [valuebox]: value
    })

  }


  render() {
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground center2 padding-top2 ">
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2">
            <img src={group19} alt="vector" className="group19" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
            <div className="box-protein">
              <div className="padding-top">
                <p className="font-size6 bold color-protein"> เลือกรสชาติ Fitto Plant Protein </p>
                <p className="font-size4">หากคุณสมัครแบบ<span className="bold">ตามระยะเวลาของโปรแกรม</span>< br />จะสามารถเปลี่ยนแปลงรสชาติภายหลังได้</p>
                <div className="box-proteinIn padding-top">
                  <div className="center">
                    <p className="font-size5 bold">เลือกรสชาติของ Fitto Plant Protein</p>
                  </div>
                  <div>
                    <label className="form-label bold font-size4">กล่องที่ 1</label>
                    <select className="form-select" onChange={this.boxFitto} name="box1" aria-label="Default select example">
                      {fitto.map((fitto, i) => (
                        <option key={i} value={fitto}>{fitto}</option>
                      )
                      )}
                    </select>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">กล่องที่ 2</label>
                    <select className="form-select" onFocus={this.boxFitto} onChange={this.boxFitto} name="box2" aria-label="Default select example">
                      {fitto.map((fitto, i) => (
                        <option key={i} value={fitto}>{fitto}</option>
                      )
                      )}
                    </select>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">กล่องที่ 3</label>
                    <select className="form-select" onChange={this.boxFitto} name="box3" aria-label="Default select example">
                      {fitto.map((fitto, i) => (
                        <option key={i} value={fitto}>{fitto}</option>
                      )
                      )}
                    </select>
                  </div>

                  <div>
                    <div className="padding-top2">
                      <label className="form-label bold font-size4">กล่องที่ 4</label>
                      <select className="form-select" onChange={this.boxFitto} name="box4" aria-label="Default select example">
                        {fitto.map((fitto, i) => (
                          <option key={i} value={fitto}>{fitto}</option>
                        )
                        )}
                      </select>
                    </div>
                    <div className="padding-top2">
                      <label className="form-label bold font-size4">กล่องที่ 5</label>
                      <select className="form-select" onChange={this.boxFitto} name="box5" aria-label="Default select example">
                        {fitto.map((fitto, i) => (
                          <option key={i} value={fitto}>{fitto}</option>
                        )
                        )}
                      </select>
                    </div>
                    <div className="padding-top2">
                      <label className="form-label bold font-size4">กล่องที่ 6</label>
                      <select className="form-select" onChange={this.boxFitto} name="box6" aria-label="Default select example">
                        {fitto.map((fitto, i) => (
                          <option key={i} value={fitto}>{fitto}</option>
                        )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-top2">
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 distance">
                  <button className="btn bottom-pink" type="button" onClick={() => this.onNextPage()}>
                    ถัดไป
                  </button>
                  {/* <Link to="/shipping_address" className="btn bottom-pink" type="button">ถัดไป</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </>

    );
  }
}

const mapStateToProps = ({ createUser, exerciseProgram, shippingAddress }) => {
  const { create_user_email } = createUser;
  const { user_program_id } = exerciseProgram;
  const { products_list } = shippingAddress;
  return { create_user_email, user_program_id, products_list };
};

const mapActionsToProps = { getUserProgram, selectProducts, clearSelectProducts };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Fitto_Plant_Protein);