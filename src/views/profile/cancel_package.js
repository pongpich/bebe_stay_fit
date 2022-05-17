import React, { Component } from "react";
import user_circle from "../../assets/img/user_circle.svg";


class CancelPackage extends React.Component {
    render() {
        return (
            <>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  padding-top2 information-box ">
                    <div className="container">
                        <div className="row row-cols-2">
                            <h4 className="color1">BEBEStayFit</h4>
                            <h6 className="right">    <img src={user_circle} alt="vector" className="padding-right" />บพิตร์ เตชะวัฒนานันท์</h6>
                        </div>
                    </div>
                </div>
                <div className="padding-top4 center">
                    <p className="font-size6 bold color-protein"> ยกเลิก Bebe Stay Fit</p>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top2 text-left margin-leftRight">
                                <p className="font-size6 bold">แพ็คเกจของคุณ </p>
                                <p className="font-size5 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size5">3,750 บาท / 2 เดือน</span></p>
                            </div>
                            <p className="border-bottom margin-leftRight padding-top2"></p>
                            <div>
                                <p>หากยกเลิกตอนนี้ระบบจะทำการ</p>
                                <p className="margin-top-1">หยุดเรียกเก็บเงินอัตโนมัติ</p>
                                <p className="font-size4">โปรโมชั่น</p>
                                <p className="margin-top-1 font-size4">XXXXXXXX</p>
                                <p className="margin-top-1 font-size4">XXXXXXXX</p>
                            </div>
                            <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 margin-top-2 ">
                                <button className="btn bottom-pink" type="button" >
                                ยืนยัน
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}

export default CancelPackage;
;
