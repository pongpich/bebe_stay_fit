import React, { Component } from "react";
import ellipse17 from "../../assets/img/ellipse17_2.png";
import user_circle from "../../assets/img/user_circle.svg";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getSubscriptionProducts } from "../../redux/get";

class Profile extends React.Component {

  componentDidMount() {
    const { user } = this.props;
    this.props.getSubscriptionProducts(user.user_id);
  }

  render() {
    const address = JSON.parse(this.props.delivery_address);

    return (
      <>
        <div className="padding-top4 center">
          <p className="font-size6 bold color-protein"> โปรไฟล์</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
            <div className="box-protein margin-bottom1 padding-top2">
     {/*          <div className="padding-top img-ellipse17">
                <img src={ellipse17} alt="vector" />
              </div> */}
              <div className="padding-top2">
                <p className="section-size">{address.firstname} {address.lastname}</p>
                <p className="margin-top-1 bold">  {this.props.user.email}</p>
                <p className="margin-top-1 section-size">{address.address} {address.subdistrict}</p>
                <p className="margin-top-1 section-size">{address.district}</p>
                <p className="margin-top-1 section-size">{address.province} {address.zipcode}</p>

              </div>
              <p className="border-bottom margin-leftRight"></p>
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2">
                {/*  <button className="btn bottom-pink" type="button" >
                                    แก้ไขข้อมูล
                                </button> */}
                <Link to="/edit_profile" className="btn bottom-pink " type="button">แก้ไขข้อมูล</Link>
                <button className="btn bottom-outlinePink margin-top-3 " type="button" onClick={() => this.props.history.push("/reset_password")} >
                  เปลี่ยนรหัสผ่าน
          </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="padding-top">
                <h4 className="color1 bold">BEBEStayFit</h4>
              </div>
              <div className="padding-top2  margin-leftRight">
                <p className="font-size6 text-left2 bold">แพ็กเกจของคุณ </p>
                <p className="font-size0 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size0">3,750 บาท / 2 เดือน</span></p>
                <p className=" font-size4 margin-top-1 right color3">วันตัดรอบบิล 30 มิ.ย. 2565</p>

              </div>
              <p className="border-bottom margin-leftRight padding-top2"></p>
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                <button className="btn bottom-pink " type="button" onClick={() => this.props.history.push('/billing_history')}>
                  ประวัติการเรียกเก็บ
                                </button>
                <button className="btn bottom-outlineGrey margin-top-3" type="button" >
                  ยกเลิกแพ็กเกจ
                                </button>
              </div>
            </div>
          </div>
        </div> */}

      </>

    );
  }
}

const mapStateToProps = ({ get, authUser }) => {
  const { delivery_address } = get;
  const { user } = authUser;
  return { delivery_address, user };
};

const mapActionsToProps = { getSubscriptionProducts };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Profile);

