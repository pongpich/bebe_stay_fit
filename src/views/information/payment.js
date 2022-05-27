import React, { Component } from "react";
import group21 from "../../assets/img/group21.png";
import payment1 from "../../assets/img/payment1.png";
import payment2 from "../../assets/img/payment2.png";
import payment3 from "../../assets/img/payment3.png";
import payment4 from "../../assets/img/payment4.png";
import payment5 from "../../assets/img/payment5.png";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram"

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardFocus: "btn btn-outline-pinkFocus",
      qrCodeFocus: "btn btn-outline-pink",
      paymentMethod: "creditCard",
      merchantID: "23xlw1vxcVi8OKGjTqE2sbQbOXHyzNaGN9XK5ALvRrYtdt7J/kL0ROmE59mzRhDhzICLvm6LF9i45eI8EiyFisGPGloHPKnrp7Ma+JH6O+CBVLZfS/NemVtmxm1J4yQ0cLFNTQUnGvhUO+w8/wvlJI3kw8LPuYpF2960XDgMvZA0R9i5",
      refNo: Date.now(),
      backgroundUrl: `https://api.planforfit.com/bebe/gbqr`,
      price: 1.00,
      productName: "bebe stay fit",
      name: "Akkkk Yodsss",
      email: this.props.create_user_email,
      phone: this.props.create_user_phone,
      program: this.props.program,
      username: this.props.create_username,
      lastname: this.props.create_lastname,
      telephone: this.props.create_ltelephone,
      addressUser: this.props.create_addressUser,
      subdistrictUser: this.props.create_subdistrictUser,
      districtUser: this.props.create_districtUser,
      provinceUser: this.props.create_provinceUser,
      zipcodeUser: this.props.create_zipcodeUser
    };
  }


  componentDidMount() {
    const { user_program_id } = this.props;
    const { merchantID, refNo, backgroundUrl, price, productName, name, email, phone, program } = this.state;
    document.getElementById("qr_token").value = merchantID;
    document.getElementById("qr_refNo").value = refNo;
    document.getElementById("qr_bgUrl").value = backgroundUrl;
    document.getElementById("qr_amount").value = price;
    document.getElementById("qr_detail").value = productName;
    document.getElementById("qr_name").value = name;
    document.getElementById("qr_email").value = email;
    document.getElementById("qr_phone").value = phone;
    document.getElementById("qr_programID").value = program.program_id;

    this.props.getUserProgram(email);

    if (user_program_id) { //ถ้ามี user_program_id แสดงว่าชำระเงินสำเร็จแล้ว
      this.props.history.push('/welcome_new_nember');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push('/welcome_new_nember');
    }
  }

  pinkModelFocus = (e) => {
    if (e === "1") {
      var qrCodeFocus = "btn btn-outline-pink";
      var creditCardFocus = "btn btn-outline-pinkFocus";
      this.setState({ paymentMethod: "creditCard" })
      console.log("บัตรเครดิต");
    } else {
      var qrCodeFocus = "btn btn-outline-pinkFocus";
      var creditCardFocus = "btn btn-outline-pink";
      this.setState({ paymentMethod: "qrCode" })
      console.log("QR code");
    }
    console.log("e :", e);
    this.setState({
      qrCodeFocus: qrCodeFocus,
      creditCardFocus: creditCardFocus,
    })

  }

  onChickprice = (e) => {
    let id = this.state.program.program_id
    if (id === "starter_stay_fit_01") {
      this.setState({
        program: this.props.allProgram[2],
      });
      /*    console.log("3900",id,id, this.props.allProgram[1]); */
    } else {
      this.setState({
        program: this.props.allProgram[1],
      });
      /*       console.log("3700",id, this.props.allProgram[2]); */
    }

  }


  render() {
    console.log("aa", this.state.program.program_id);
    const programId = this.state.program.program_id;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground center2 padding-top2 ">
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2">
            <img src={group21} alt="vector" className="group19" />
          </div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2  margin-headText">
            <p className="font-size6 bold color-protein"> การชำระเงิน</p>
          </div>
          <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2">
            <button type="button" className={this.state.creditCardFocus} onClick={e => this.pinkModelFocus("1")}>บัตรเครดิต/เดบิต</button>&nbsp;&nbsp;&nbsp;
                        <button type="button" className={this.state.qrCodeFocus} onClick={e => this.pinkModelFocus("2")}>ชำระด้วย QR Code</button>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
            {/* <div className="box-protein">
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
            </div> */}
            <div className="box-protein  margin-head">
              <div className="padding-top">
                <div className="box-proteinAddress padding-top">
                  <div className="padding-top2">
                    <p className=" bold font-size5 between">แพ็คเกจของคุณ <span className="font-size4 light decoration pointer" onClick={e => this.onChickprice(e)}>เปลี่ยน</span></p>
                    <p>สมัครตามระยะเวลาของโปรแกรม</p>

                    <p className=" bold font-size5">
                      {programId === "starter_stay_fit_01" ? `${this.state.program.price.toLocaleString('en')}  บาท` : `${this.state.program.price.toLocaleString('en')}   บาท / 2 เดือน`}
                    </p>
                    <p className="font-size4">เราจะทำการเรียกเก็บเงินทุกๆ 2 เดือน</p>
                  </div>
                  <p className="border-bottom "></p>
                  <div className="padding-top2">
                    <p className=" bold font-size5 between">ที่อยู่ในการจัดส่งสินค้า <span className="font-size4 light decoration pointer" onClick={() => this.props.history.push('/shipping_address')}>เปลี่ยน</span></p>
                    <p>{this.state.username} &nbsp; {this.state.lastname}  </p>
                    <p>{this.state.telephone} </p>
                    <p>{this.state.addressUser} &nbsp;{this.state.subdistrictUser}&nbsp;{this.state.districtUser}</p>
                    <p>{this.state.provinceUser}&nbsp;{this.state.zipcodeUser} </p>
                  </div>
                </div>
              </div>
            </div>

            <form id="cc_form" action="#/cc_token" method="GET" className="hidden-form d-grid gap-2 col-10 ol-sm-10  mx-auto   col-md-10 col-lg-10 distance">
              {
                (this.state.paymentMethod === "creditCard") &&
                <input id="cc_button" type="submit" className="btn bottom-pink" value="ชำระเงิน" />
              }
            </form>

            <form id="qr_form" action={"https://api.gbprimepay.com/gbp/gateway/qrcode"} method="POST" className="d-grid gap-2 col-10 ol-sm-10  mx-auto   col-md-10 col-lg-10 distance">
              <input id="qr_token" type="hidden" name="token" />
              <input id="qr_refNo" type="hidden" name="referenceNo" />
              <input id="qr_bgUrl" type="hidden" name="backgroundUrl" />
              <input id="qr_amount" type="hidden" name="amount" />
              <input id="qr_detail" type="hidden" name="detail" />
              <input id="qr_name" type="hidden" name="customerName" />
              <input id="qr_email" type="hidden" name="customerEmail" />
              <input id="qr_phone" type="hidden" name="customerTelephone" />
              <input id="qr_programID" type="hidden" name="merchantDefined1" />
              {
                (this.state.paymentMethod === "qrCode") &&
                <input id="qr_button" type="submit" className="btn bottom-pink" value="ชำระเงิน" />
              }
            </form>

            {/*  <Link to="/welcome_new_nember" className="btn bottom-pink" type="button">ชำระเงิน</Link> */}

          </div>
        </div>

      </>

    );
  }
}

const mapStateToProps = ({ createUser, exerciseProgram, shippingAddress }) => {
  const { create_user_email, create_user_password, create_user_phone } = createUser;
  const { program, allProgram, user_program_id } = exerciseProgram;
  const { create_username, create_lastname, create_telephone, create_addressUser,
    create_subdistrictUser, create_districtUser, create_provinceUser, create_zipcodeUser } = shippingAddress;
  return {
    create_user_email, create_user_password, create_user_phone, program, allProgram,
    create_username, create_lastname, create_telephone, create_addressUser,
    create_subdistrictUser, create_districtUser, create_provinceUser, create_zipcodeUser, user_program_id
  };
};


const mapActionsToProps = { getUserProgram };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Payment);
