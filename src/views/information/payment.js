import React, { Component } from "react";
import group21 from "../../assets/img/group21.png";
import payment1 from "../../assets/img/payment1.png";
import payment2 from "../../assets/img/payment2.png";
import payment3 from "../../assets/img/payment3.png";
import payment4 from "../../assets/img/payment4.png";
import payment5 from "../../assets/img/payment5.png";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outlinePinkModel: "btn btn-outline-pink",
      outlinePinkModelFocus: "btn btn-outline-pinkFocus",
      merchantID: "23xlw1vxcVi8OKGjTqE2sbQbOXHyzNaGN9XK5ALvRrYtdt7J/kL0ROmE59mzRhDhzICLvm6LF9i45eI8EiyFisGPGloHPKnrp7Ma+JH6O+CBVLZfS/NemVtmxm1J4yQ0cLFNTQUnGvhUO+w8/wvlJI3kw8LPuYpF2960XDgMvZA0R9i5",
      refNo: Date.now(),
      backgroundUrl: `https://api.planforfit.com/bebe/gbqr`,
      price: 1.00,
      productName: "bebe stay fit",
      name: "Akkkk Yodsss",
      email: this.props.create_user_email,
      phone: this.props.create_user_phone,
      program_id: this.props.program
    };
  }

  componentDidMount() {
    const { merchantID, refNo, backgroundUrl, price, productName, name, email, phone, program_id } = this.state;
    document.getElementById("qr_token").value = merchantID;
    document.getElementById("qr_refNo").value = refNo;
    document.getElementById("qr_bgUrl").value = backgroundUrl;
    document.getElementById("qr_amount").value = price;
    document.getElementById("qr_detail").value = productName;
    document.getElementById("qr_name").value = name;
    document.getElementById("qr_email").value = email;
    document.getElementById("qr_phone").value = phone;
    document.getElementById("qr_programID").value = program_id;
  }

  pinkModelFocus = (e) => {
    if (e === "1") {
      var outlinePinkModel = "btn btn-outline-pink";
      var outlinePinkModelFocus = "btn btn-outline-pinkFocus";
    } else {
      var outlinePinkModel = "btn btn-outline-pinkFocus";
      var outlinePinkModelFocus = "btn btn-outline-pink";
    }

    this.setState({
      outlinePinkModel: outlinePinkModel,
      outlinePinkModelFocus: outlinePinkModelFocus,
    })

  }


  render() {
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  padding-top2 information-box ">
          <div className="container">
            <div className="row row-cols-2">
              <h4 className="color1">BEBEStayFit</h4>
              <h6 className="right">ลงทะเบียน</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground center2 padding-top2 ">
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2">
            <img src={group21} alt="vector" className="group19" />
          </div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2  margin-headText">
            <p className="font-size6 bold color-protein"> การชำระเงิน</p>

            <form id="qr_form" action={"https://api.gbprimepay.com/gbp/gateway/qrcode"} method="POST">
              <input id="qr_token" type="hidden" name="token" />
              <input id="qr_refNo" type="hidden" name="referenceNo" />
              <input id="qr_bgUrl" type="hidden" name="backgroundUrl" />
              <input id="qr_amount" type="hidden" name="amount" />
              <input id="qr_detail" type="hidden" name="detail" />
              <input id="qr_name" type="hidden" name="customerName" />
              <input id="qr_email" type="hidden" name="customerEmail" />
              <input id="qr_phone" type="hidden" name="customerTelephone" />
              <input id="qr_programID" type="hidden" name="merchantDefined1" />
              <input id="qr_button" type="submit" class="btn" value="จ่ายด้วย QR Code" />
            </form>

            {/* <form id="cc_form" action="./#/cc_token" method="GET" class="hidden-form">
              <input id="cc_button" type="submit" class="btn" value="ชำระดัวยบัตรเครดิต" />
            </form> */}
            <form id="cc_form" action="https://pot.planforfit.com/cc_token.html" method="GET" class="hidden-form">
              <input id="cc_button" type="submit" class="btn" value="ชำระดัวยบัตรเครดิต" />
            </form>

          </div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2">
            <button type="button" className={this.state.outlinePinkModelFocus} onClick={e => this.pinkModelFocus("1")}>บัตรเครดิต/เดบิต</button>&nbsp;&nbsp;&nbsp;
                        <button type="button" className={this.state.outlinePinkModel} onClick={e => this.pinkModelFocus("2")}>ชำระด้วย QR Code</button>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
            <div className="box-protein">
              <div className="padding-top">
                <div className="box-proteinAddress padding-top">
                  <div>
                    <img src={payment1} alt="vector" className="img-payment" />&nbsp;
                                        <img src={payment2} alt="vector" className="img-payment" />&nbsp;
                                        <img src={payment3} alt="vector" className="img-payment" />&nbsp;
                                        <img src={payment4} alt="vector" className="img-payment" />&nbsp;
                                        <img src={payment5} alt="vector" className="img-payment" />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">หมายเลขบัตร 16 หลัก</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="หมายเลขบัตร" />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">ชื่อบนบัตร</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ชื่อ และนามสกุลที่อยู่บนบัตร" />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">วันหมดอายุ</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ดด/ปป" />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">รหัส CVV</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="รหัสหลังบัตร" />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-protein  margin-head">
              <div className="padding-top">
                <div className="box-proteinAddress padding-top">
                  <div className="padding-top2">
                    <p className=" bold font-size5 between">แพ็คเกจของคุณ <span className="font-size4 light decoration">เปลี่ยน</span></p>
                    <p>สมัครตามระยะเวลาของโปรแกรม</p>
                    <p className=" bold font-size5"> 3,750 บาท / 2 เดือน</p>
                    <p className="font-size4">เราจะทำการเรียกเก็บเงินทุกๆ 2 เดือน</p>
                  </div>
                  <p className="border-bottom "></p>
                  <div className="padding-top2">
                    <p className=" bold font-size5 between">ที่อยู่ในการจัดส่งสินค้า <span className="font-size4 light decoration">เปลี่ยน</span></p>
                    <p>บพิตร์ เตชะวัฒนานันท์ </p>
                    <p>086959239 </p>
                    <p>367/173 จรัฐพิบาล บางกอใหญ่ ศรีน้อย </p>
                    <p>กรุงเทพมหานคร 10600</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 col-10 ol-sm-10  mx-auto   col-md-10 col-lg-10 distance">
              {/*   <button className="btn bottom-pink" type="button" >
                                                    ถัดไป
                                                </button> */}
              <Link to="/welcome_new_nember" className="btn bottom-pink" type="button">ชำระเงิน</Link>
            </div>
          </div>
        </div>

      </>

    );
  }
}

const mapStateToProps = ({ createUser, exerciseProgram }) => {
  const { create_user_email, create_user_password, create_user_phone } = createUser;
  const { program } = exerciseProgram;
  return { create_user_email, create_user_password, create_user_phone, program };
};

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Payment);
