import React, { Component } from "react";
import ellipse17 from "../../assets/img/ellipse17_2.png";
import user_circle from "../../assets/img/user_circle.svg";
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    render() {
        return (
            <>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  padding-top2 information-box ">
                    <div className="container">
                        <div className="row row-cols-2">
                            <div className="col-2 col-sm-2 col-md-12 col-lg-12">
                                <h4 className="color1">BEBEStayFit</h4>
                            </div>
                            <div className="col-10 col-sm-10 col-md-12 col-lg-12">
                                <h6 className="right"><img src={user_circle} alt="vector" className="padding-right" />บพิตร์ เตชะวัฒนานันท์</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="padding-top4 center">
                    <p className="font-size6 bold color-protein"> โปรไฟล์</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top img-ellipse17">
                                <img src={ellipse17} alt="vector" />
                            </div>
                            <div className="padding-top2">
                                <p className="section-size">บพิตร์ เตชะวัฒนานันท์</p>
                                <p className="margin-top-1 bold">borpit.techa@gmail.com</p>
                                <p className="margin-top-1 section-size">367/161 จรัญสนิทวงศ์33 แยก3</p>
                                <p className="margin-top-1 section-size">แขวงบางขุนศรี เขตบางกอกน้อย</p>
                                <p className="margin-top-1 section-size">กรุงเทพมหานคร 10700</p>

                            </div>
                            <p className="border-bottom margin-leftRight"></p>
                            <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2">
                                {/*  <button className="btn bottom-pink" type="button" >
                                    แก้ไขข้อมูล
                                </button> */}
                                <Link to="/edit_profile" className="btn bottom-pink " type="button">แก้ไขข้อมูล</Link>
                                <button className="btn bottom-outlinePink margin-top-3 " type="button" >
                                    เปลี่ยนรหัสผ่าน
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top">
                                <h4 className="color1 bold">BEBEStayFit</h4>
                            </div>
                            <div className="padding-top2 text-left margin-leftRight">
                                <p className="font-size6 bold">แพ็คเกจของคุณ </p>
                                <p className="font-size4 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size4">3,750 บาท / 2 เดือน</span></p>
                                <p className=" font-size4 margin-top-1 right color3">วันตัดรอบบิล 30 มิ.ย. 2565</p>

                            </div>
                            <p className="border-bottom margin-leftRight padding-top2"></p>
                            <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                                <button className="btn bottom-pink " type="button" >
                                    ประวัติการเรียกเก็บ
                                </button>
                                <button className="btn bottom-outlineGrey margin-top-3" type="button" >
                                    ยกเลิกแพ็คเกจ
                                </button>
                                {/*  <Link to="/payment" className="btn bottom-pink" type="button">เริ่มต้นใช้งาน</Link> */}
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}

export default Profile;
;
