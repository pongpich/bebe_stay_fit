import React, { Component } from "react";

import ellipse17_2 from "../../assets/img/ellipse17_2.png";

import user_circle from "../../assets/img/user_circle.svg";
import { connect } from "react-redux";
import { getSubscriptionProducts } from "../../redux/get";
import { putSubscriptionAddress } from "../../redux/updateAddress";
import InputAddress from 'react-thailand-address-autocomplete';

class EditProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      phone: null,
      address: null,
      subdistrict: null,
      district: null,
      province: null,
      zipcode: null
    };
  }

  onChange(e) {
    console.log("AA",e.target.value,e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
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

  setAddress(e) {
    this.setState({
      firstname: e.firstname,
      lastname: e.lastname,
      phone: e.phone,
      address: e.address,
      subdistrict: e.subdistrict,
      district: e.district,
      province: e.province,
      zipcode: e.zipcode,
    })
  }


  onSubmit() {
      const user_id = this.props.user.user_id;
      const {firstname,lastname,phone,address,subdistrict,district,province,zipcode} = this.state;
      const data = {
        firstname,
        lastname,
        phone,
        address,
        subdistrict,
        district,
        province,
        zipcode
      }
      this.props.putSubscriptionAddress(user_id,data);
      this.props.history.push('/profile');
  }

  

  componentDidMount() {

    const address = JSON.parse(this.props.delivery_address);
  

    this.setAddress(address);
  }

  render() {
    const { firstname, lastname, phone, address, subdistrict, district, province, zipcode } = this.state;
console.log("AA",this.props.user);
    return (
      <>
        <div className="padding-top4 center">
          <p className="font-size6 bold color-protein"> แก้ไขข้อมูล</p>
        </div>
        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="padding-top img-ellipse17">
                <img src={ellipse17_2} alt="vector" />
              </div>

              <div className="padding-top2">
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-5 col-lg-5">
                  <button className="btn btn-outline-pink" type="button" >
                    เลือกรูป
                                    </button>
                </div>
              </div>
              <div className=" col-10 col-sm-10  col-md-5 col-lg-5 center2 padding-top2">
                <p className="font-size5  between">ขนาดไฟล์ <span className="bold">สูงสุด 1 MB</span></p>
                <p className="font-size5  between margin-top-1">ไฟล์ที่รองรับ <span className="bold">.JPEG, .PNG</span></p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="box-proteinAddress padding-top">
                <p className="font-size6 bold color-protein "> ข้อมูลส่วนตัว</p>
                <div>
                  <label className="form-label bold font-size4">ชื่อแฝง</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="บพิตร์ เตชะวัฒนานันท์" />
                </div>
                <div className="padding-top2">
                  <label className="form-label bold font-size4">วัน/เดือน/ปี เกิด</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="5 มกราคม 2536" />
                </div>
                <div className="padding-top2">
                  <p className="font-weight">เพศ</p>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sex" id="inlineRadio1" value="ชาย" />
                    <label className="form-check-label"> ชาย </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sex" id="inlineRadio2" value="หญิง" />
                    <label className="form-check-label" > หญิง  </label>
                  </div>
                </div>
                <div className="padding-top2">
                  <label className="form-label bold font-size4">อีเมล</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="borpit.techa@gmail.com" disabled />
                </div>
                <div className="padding-top2">
                  <label className="form-label bold font-size4 between">เบอร์โทรศัพท์ <span className="font-size4 normal"> ใช้ในการยืนยันตัวตนเข้าบัญชี</span></label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="******9595" disabled />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-5 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="box-proteinAddress padding-top">
                <p className="font-size6 bold color-protein "> ที่อยู่ในการจัดส่งสินค้า</p>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <label className="form-label bold font-size4">ชื่อ</label>
                    <input type="text" className="form-control" name="firstname"  value={firstname} onChange={e => this.onChange(e)} id="exampleFormControlInput1" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <label className="form-label bold font-size4">นามสกุล</label>
                    <input type="text" className="form-control" name="lastname"  value={lastname} onChange={e => this.onChange(e)} id="exampleFormControlInput1" />
                  </div>
                </div>
                <div className="padding-top2">
                  <label className="form-label bold font-size4">เบอร์โทรศัพท์</label>
                  <input type="text" className="form-control" name="phone" value={phone} onChange={e => this.onChange(e)} id="exampleFormControlInput1" />
                </div>
                <div className="padding-top2">
                  <label className="form-label bold font-size4">ที่อยู่</label>
                  <input type="text" className="form-control"  name="address" value={address} onChange={e => this.onChange(e)} id="exampleFormControlInput1" />
                </div>
                <div className="elementStyle">
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">แขวง/ตำบล</label>
                    <InputAddress style={{ width: "100%" }}
                      address="subdistrict"
                      value={subdistrict}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                    />
                  </div>
                  <div className="col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                    <label className="form-label bold font-size4">เขต/อำเภอ</label>
                    <InputAddress style={{ width: "100%" }}
                      address="district"
                      value={district}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                    />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">จังหวัด</label>
                    <InputAddress style={{ width: "100%" }}
                      address="province"
                      value={province}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                    />
                  </div>
                  <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top2">
                    <label className="form-label bold font-size4">รหัสไปรษณีย์</label>
                    <InputAddress style={{ width: "100%" }}
                      address="subdistrict"
                      value={this.state.zipcode}
                      onChange={e => this.onChange(e)}
                      onSelect={e => this.onSelect(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12  center margin-top-2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="padding-top2 padding-left3 distance margin-bottom1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="flexCheckDefault" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                <label className="form-check-label">
                  ขอใบเสร็จรับเงิน/ใบกำกับภาษี
                                </label>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          <div className="bottomEditProfile">


            <button type="button" className="btn bottom-outlinePinkLeft " onClick={() => this.props.history.push('/profile')}>ยกเลิก</button>
            <button type="button" className="btn bottom-outlinePinkRight bottomEditProfileLeft " onClick={() => this.onSubmit()}>บันทึก</button>
          </div>
          {/*   <div className="">
            <div className="row">
              <button type="button" className="btn bottom-outlinePink ">ยกเลิก</button>
            </div>
            <div className="">
              <button type="button" className="btn bottom-pink">บันทึก</button>
            </div>
          </div> */}
        </div>
      </>

    );
  }
}



const mapStateToProps = ({ get, authUser,editAddress }) => {
  const { delivery_address } = get;
  const { user } = authUser;
  return { delivery_address, user };
};

const mapActionsToProps = { getSubscriptionProducts,putSubscriptionAddress };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EditProfile);

