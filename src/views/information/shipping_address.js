import React, { Component } from "react";
import group20 from "../../assets/img/group20.png";
import { Link } from 'react-router-dom';



class Shipping_Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinkModel: "btn btn-outline-pinkModel",
            pinkModelFocus: "btn btn-outline-pinkModelFocus",
        };
      }
  
    taxInvoice = (e) => {
        const { checked } = e.target;

        if (checked === true) {
            document.getElementById('clickModal').click();
        } 

    }

  /*   pinkModelFocus = (e) => {
        this.setState({
            pinkModelFocus: "btn btn-outline-pinkModel",
          })
    } */
   
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
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  App-headerBackground center2 padding-top2 ">
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2">
                        <img src={group20} alt="vector" className="group19" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
                        <div className="box-protein">
                            <div className="padding-top">
                                <p className="font-size6 bold color-protein"> ที่อยู่ในการจัดส่งสินค้า</p>
                                <div className="box-proteinAddress padding-top">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <label className="form-label bold font-size4">ชื่อ</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <label className="form-label bold font-size4">นามสกุล</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">เบอร์โทรศัพท์</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">ที่อยู่</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="กรอกบ้านเลขที่, หมู่, ซอย, อาคาร, ถนน และจัดสุงเกต(ถ้ามี)" />
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">แขวง/ตำบล</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option >เลือก</option>
                                            <option >Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">เขต/อำเภอ</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option >เลือก</option>
                                            <option >Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">จังหวัด</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option >เลือก</option>
                                            <option >Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">รหัสไปรษณีย์</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option >เลือก</option>
                                            <option>Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"   onClick={e => this.taxInvoice(e)}   /*  data-bs-toggle="modal" data-bs-target="#exampleModal"  *//>
                                            <label className="form-check-label">
                                                ขอใบเสร็จรับเงิน/ใบกำกับภาษี
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 distance">
                                {/*   <button className="btn bottom-pink" type="button" >
                                    ถัดไป
                                </button> */}
                               <div  style={{display: 'none'}}>
                                <button className="btn bottom-pink" id="clickModal" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                    cLick
                                </button> 
                               </div>
                                <Link to="/payment" className="btn bottom-pink" type="button">ถัดไป</Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade"   id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content padding-leftRight">
                            <div className="modal-headerIn margin-headText">
                                <p className="bold font-size5  color-protein" id="exampleModalLabel">ที่อยู่ใบเสร็จรับเงิน/ใบกำกับภาษี</p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-bodyIn">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label">บุคคลธรรมดา</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                    <label className="form-check-label">นิติบุคคล</label>
                                </div>
                                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                                    <div className="mb-3">
                                        <label className="form-label bold">ชื่อผู้เสียภาษี</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="กรอกชื่อ" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">เลขประจำตัวผู้เสียภาษี</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="กรุณาระบุ" />
                                        </div>
                                    </div>
                                    <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">หมายเลขโทรศัพท์</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="กรุณาระบุ" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label">
                                            ใช้ที่อยู่จัดส่งสินค้า
                                        </label>
                                    </div>
                                </div>
                                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                                    <div className="mb-3">
                                        <label className="form-label bold">ที่อยู่</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="กรอกบ้านเลขที่, หมู่, ซอย, อาคาร, ถนน และจัดสุงเกต(ถ้ามี)"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">แขวง/ตำบล</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option >เลือก</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">เขต/อำเภอ</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option >เลือก</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">จังหวัด</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option >เลือก</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">รหัสไปรษณีย์</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option >เลือก</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12  col-md-12 col-lg-12 center">
                                <button type="button" className={this.state.pinkModel}   /*  onClick={e => this.pinkModelFocus(e)}  */  data-bs-dismiss="modal" >ยกเลิก</button>&nbsp;&nbsp;&nbsp;
                                <button type="button" className={this.state.pinkModelFocus}>ชำระด้วย QR Code</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>


        );
    }
}

export default Shipping_Address;
