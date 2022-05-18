import React, { Component } from "react";
import group21 from "../../assets/img/group21.png";
import payment1 from "../../assets/img/payment1.png";
import payment2 from "../../assets/img/payment2.png";
import payment3 from "../../assets/img/payment3.png";
import payment4 from "../../assets/img/payment4.png";
import payment5 from "../../assets/img/payment5.png";
import { Link } from 'react-router-dom';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outlinePinkModel: "btn btn-outline-pink",
            outlinePinkModelFocus: "btn btn-outline-pinkFocus",
        };
      }
  
    pinkModelFocus = (e) => {
        if (e === "1") {
          var  outlinePinkModel = "btn btn-outline-pink";
          var  outlinePinkModelFocus = "btn btn-outline-pinkFocus";
        }else{
          var  outlinePinkModel = "btn btn-outline-pinkFocus";
          var  outlinePinkModelFocus = "btn btn-outline-pink";
        }

        this.setState({
            outlinePinkModel: outlinePinkModel,
            outlinePinkModelFocus:  outlinePinkModelFocus,
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

export default Payment;
