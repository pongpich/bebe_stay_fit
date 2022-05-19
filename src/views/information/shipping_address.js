import React, { Component } from "react";
import group20 from "../../assets/img/group20.png";
import { Link } from 'react-router-dom';
import InputAddress from 'react-thailand-address-autocomplete';
import { connect } from "react-redux";
import { shippingAddress } from "../../redux/shippingAddress";


class Shipping_Address extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invoice: false,
            subdistrict: null, // เอาไว้ใส่ใน value
            district: null, // เอาไว้ใส่ใน value
            province: null, // เอาไว้ใส่ใน value
            zipcode: null, // เอาไว้ใส่ใน value
            pinkModel: "btn btn-outline-pinkModel",
            pinkModelFocus: "btn btn-outline-pinkModelFocus",
            username: null,
            lastname: null,
            telephone: null,
            addressUser: null,
            subdistrictUser: null,
            districtUser: null,
            provinceUser: null,
            zipcodeUser: null,
            InvoicePerson: null,  //  ข้อมูลใบกำกับภาษี start
            InvoiceTaxpayerName: null,
            InvoiceTaxIdentificationNumber: null,
            InvoiceTelephone: null,
            useShippingAddress: false,
            InvoiceAddressUser: null,
            InvoiceSubdistrict: null,
            InvoiceDistrict: null,
            InvoiceProvince: null,
            InvoiceZipcode: null
        };
    }


shippingAddress(invoice, username, lastname, telephone,addressUser,subdistrictUser,districtUser,provinceUser,zipcodeUser,
                InvoicePerson,InvoiceTaxpayerName,InvoiceTaxIdentificationNumber,InvoiceTelephone,useShippingAddress,
                InvoiceAddressUser,InvoiceSubdistrict,InvoiceDistrict,InvoiceProvince,InvoiceZipcode ) {
/*      this.props.shippingAddress(
        this.state.invoice, this.state.username, this.state.lastname, this.state.telephone,this.state.addressUser,this.state.subdistrictUser,this.state.districtUser,this.state.provinceUser,this.state.zipcodeUser,
        this.state.InvoicePerson,this.state.InvoiceTaxpayerName,this.state.InvoiceTaxIdentificationNumber,this.state.InvoiceTelephone,this.state.useShippingAddress,
        this.state.InvoiceAddressUser,this.state.InvoiceSubdistrict,this.state.InvoiceDistrict,this.state.InvoiceProvince,this.state.InvoiceZipcode 
        );  */
          this.props.shippingAddress(
            invoice, username, lastname, telephone,addressUser,subdistrictUser,districtUser,provinceUser,zipcodeUser,
            InvoicePerson,InvoiceTaxpayerName,InvoiceTaxIdentificationNumber,InvoiceTelephone,useShippingAddress,
            InvoiceAddressUser,InvoiceSubdistrict,InvoiceDistrict,InvoiceProvince,InvoiceZipcode 
            );   

     this.props.history.push('/payment');  

     console.log(  invoice, username, lastname, telephone,addressUser,subdistrictUser,districtUser,provinceUser,zipcodeUser,
        InvoicePerson,InvoiceTaxpayerName,InvoiceTaxIdentificationNumber,InvoiceTelephone,useShippingAddress,
        InvoiceAddressUser,InvoiceSubdistrict,InvoiceDistrict,InvoiceProvince,InvoiceZipcode );  
  }

    taxInvoice = (e) => {
        const { checked } = e.target;

        this.setState({
            invoice: checked,
        })

        if (checked === true) {
            document.getElementById('clickModal').click();
        }

    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    onChickUseShippingAddress(e) {

        const { checked } = e.target;

        this.setState({
            useShippingAddress: checked
        })
    }
    onSelect(fullAddress) {

        const { subdistrict, district, province, zipcode } = fullAddress
        this.setState({
            subdistrict,
            district,
            province,
            zipcode,
            subdistrictUser: subdistrict,
            districtUser: district,
            provinceUser: province,
            zipcodeUser: zipcode
        })
    }

    onSelectInvoice(fullAddress) {

        const { subdistrict, district, province, zipcode } = fullAddress
        this.setState({
            subdistrict,
            district,
            province,
            zipcode,
            InvoiceSubdistrict: subdistrict,
            InvoiceDistrict: district,
            InvoiceProvince: province,
            InvoiceZipcode: zipcode
        })
    }



    render() {
        const {  invoice, username, lastname, telephone,addressUser,subdistrictUser,districtUser,provinceUser,zipcodeUser,
            InvoicePerson,InvoiceTaxpayerName,InvoiceTaxIdentificationNumber,InvoiceTelephone,useShippingAddress,
            InvoiceAddressUser,InvoiceSubdistrict,InvoiceDistrict,InvoiceProvince,InvoiceZipcode } = this.state;
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
                                            <input type="email" className="form-control" id="exampleFormControlInput1" name="username" onChange={e => this.onChange(e)} placeholder="" />
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <label className="form-label bold font-size4">นามสกุล</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" name="lastname" onChange={e => this.onChange(e)} placeholder="" />
                                        </div>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">เบอร์โทรศัพท์</label>
                                        <input type="number" className="form-control" id="exampleFormControlInput1" name="telephone" onChange={e => this.onChange(e)} placeholder="" />
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">ที่อยู่</label>
                                        <textarea className="form-control" rows="3" placeholder="กรอกบ้านเลขที่, หมู่, ซอย, อาคาร, ถนน และจัดสุงเกต(ถ้ามี)" name="addressUser" onChange={e => this.onChange(e)}  ></textarea>
                                    </div>
                                    <div className="padding-top2 elementStyle">
                                        <label className="form-label bold font-size4">แขวง/ตำบล</label>
                                        <InputAddress style={{ width: "100%" }}
                                            address="subdistrict"
                                            value={this.state.subdistrict}
                                            onChange={e => this.onChange(e)}
                                            onSelect={e => this.onSelect(e)}
                                        />
                                    </div>
                                    <div className="padding-top2 elementStyle">
                                        <label className="form-label bold font-size4">เขต/อำเภอ</label>
                                        <InputAddress style={{ width: "100%" }}
                                            address="district"
                                            value={this.state.district}
                                            onChange={e => this.onChange(e)}
                                            onSelect={e => this.onSelect(e)}
                                        />
                                    </div>
                                    <div className="padding-top2 elementStyle">
                                        <label className="form-label bold font-size4">จังหวัด</label>
                                        <InputAddress style={{ width: "100%" }}
                                            address="province"
                                            value={this.state.province}
                                            onChange={e => this.onChange(e)}
                                            onSelect={e => this.onSelect(e)}
                                        />
                                    </div>
                                    <div className="padding-top2 elementStyle">
                                        <label className="form-label bold font-size4">รหัสไปรษณีย์</label>
                                        <InputAddress style={{ width: "100%" }}
                                            address="zipcode"
                                            value={this.state.zipcode}
                                            onChange={e => this.onChange(e)}
                                            onSelect={e => this.onSelect(e)}
                                        />
                                    </div>
                                    <div className="padding-top2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" onClick={e => this.taxInvoice(e)}   /*  data-bs-toggle="modal" data-bs-target="#exampleModal"  */ />
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
                                <div style={{ display: 'none' }}>
                                    <button className="btn bottom-pink" id="clickModal" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                        chick
                                    </button>
                                </div>
                                <button className="btn bottom-pink" type="button" onClick={() => this.shippingAddress( 
                                   invoice, username, lastname, telephone,addressUser,subdistrictUser,districtUser,provinceUser,zipcodeUser,
                                   InvoicePerson,InvoiceTaxpayerName,InvoiceTaxIdentificationNumber,InvoiceTelephone,useShippingAddress,
                                   InvoiceAddressUser,InvoiceSubdistrict,InvoiceDistrict,InvoiceProvince,InvoiceZipcode 
                                    )}  >
                                    ถัดไป
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content padding-leftRight">
                            <div className="modal-headerIn margin-headText">
                                <p className="bold font-size5  color-protein" id="exampleModalLabel">ที่อยู่ใบเสร็จรับเงิน/ใบกำกับภาษี</p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-bodyIn">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="InvoicePerson" onChange={e => this.onChange(e)} id="inlineRadio1" value="บุคคลธรรมดา" />
                                    <label className="form-check-label">บุคคลธรรมดา</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="InvoicePerson" onChange={e => this.onChange(e)} id="inlineRadio2" value="นิติบุคคล" />
                                    <label className="form-check-label">นิติบุคคล</label>
                                </div>
                                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                                    <div className="mb-3">
                                        <label className="form-label bold">ชื่อผู้เสียภาษี</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" name="InvoiceTaxpayerName" onChange={e => this.onChange(e)} placeholder="กรอกชื่อ" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">เลขประจำตัวผู้เสียภาษี</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" name="InvoiceTaxIdentificationNumber" onChange={e => this.onChange(e)} placeholder="กรุณาระบุ" />
                                        </div>
                                    </div>
                                    <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">หมายเลขโทรศัพท์</label>
                                            <input type="number" className="form-control" id="exampleFormControlInput1" name="InvoiceTelephone" onChange={e => this.onChange(e)} placeholder="กรุณาระบุ" />
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="useShippingAddress" onClick={e => this.onChickUseShippingAddress(e)} id="flexCheckDefault" defaultChecked={this.state.useShippingAddress} />
                                        <label className="form-check-label">
                                            ใช้ที่อยู่จัดส่งสินค้า
                                        </label>
                                    </div>
                                </div>
                                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                                    <div className="mb-3">
                                        <label className="form-label bold">ที่อยู่</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="InvoiceAddressUser" onChange={e => this.onChange(e)} placeholder="กรอกบ้านเลขที่, หมู่, ซอย, อาคาร, ถนน และจัดสุงเกต(ถ้ามี)"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="mb-3 elementStyle">
                                            <label className="form-label bold">แขวง/ตำบล</label>
                                            <InputAddress style={{ width: "100%" }}
                                                address="subdistrict"
                                                value={this.state.subdistrict}
                                                onChange={e => this.onChange(e)}
                                                onSelect={e => this.onSelectInvoice(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                                        <div className="mb-3 elementStyle">
                                            <label className="form-label bold">เขต/อำเภอ</label>
                                            <InputAddress style={{ width: "100%" }}
                                                address="district"
                                                value={this.state.district}
                                                onChange={e => this.onChange(e)}
                                                onSelect={e => this.onSelectInvoice(e)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="mb-3 elementStyle">
                                            <label className="form-label bold">จังหวัด</label>
                                            <InputAddress style={{ width: "100%" }}
                                                address="province"
                                                value={this.state.province}
                                                onChange={e => this.onChangeInvoice(e)}
                                                onSelect={e => this.onSelectInvoice(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className=" col-12 col-sm-12  col-md-6 col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label bold">รหัสไปรษณีย์</label>
                                            <InputAddress style={{ width: "100%" }}
                                                address="zipcode"
                                                value={this.state.zipcode}
                                                onChange={e => this.onChange(e)}
                                                onSelect={e => this.onSelectInvoice(e)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12  col-md-12 col-lg-12 center">
                                    <button type="button" className={this.state.pinkModel}   /*  onClick={e => this.pinkModelFocus(e)}  */ data-bs-dismiss="modal" >ยกเลิก</button>&nbsp;&nbsp;&nbsp;
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


const mapStateToProps = ({ }) => {
    return {};
  };
  
  const mapActionsToProps = { shippingAddress };
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(Shipping_Address);