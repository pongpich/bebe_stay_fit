import React, { Component } from "react";
import ellipse17 from "../../assets/img/ellipse17_2.png";
import group183 from "../../assets/img/group183.png";
import vector_check from "../../assets/img/vector_check.png";
import group_check from "../../assets/img/group_check.png";
import { Link } from 'react-router-dom';

class Billing_history extends React.Component {
    render() {
        return (
            <>
                <div className="padding-top4 center">
                    <p className="font-size8 bold color-protein"> ประวัติการเรียกเก็บ</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top">
                                <h4 className="color1 bold">BEBEStayFit</h4>
                            </div>
                            <div className="padding-top2 margin-leftRight">
                                <p className="font-size6 text-left2 bold">แพ็คเกจของคุณ </p>
                                <p className="font-size0 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size0">3,750 บาท / 2 เดือน</span></p>
                                <p className=" font-size4 margin-top-1 right">วันตัดรอบบิล 30 มิ.ย. 2565</p>
                            </div>
                        </div>
                        <div>
                            <p>ข้อมูลการชำระเงินจะปรากฎในบัญชี</p>
                            <p>อาจจะใช้เวลาสองถึงสามวันหลังจากวันที่ตัดรอบบิล</p>
                        </div>
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top2 margin-leftRight">
                                <p className="font-size4 margin-top-1  between">วันที่ชำระ 30 มิ.ย. 2565 <span className="color1 bold font-size9">3,750 บาท / 2 เดือน</span></p>
                            </div>
                            <p className="border-bottom margin-leftRight"></p>
                            <div className="padding-top2 margin-leftRight">
                            <p className="font-size0 margin-top-1  between">แพ็คเกจของคุณ <span className="bold font-size0">ตามระยะเวลาของโปรแกรม</span></p>
                            <p className="font-size0 margin-top-1  between">ชำระผ่าน <span className="bold font-size0">QR code</span></p>
                            </div>
                        </div>
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top2 margin-leftRight">
                                <p className="font-size4 margin-top-1  between">วันที่ชำระ 30 มิ.ย. 2565 <span className="color1 bold font-size9">3,750 บาท / 2 เดือน</span></p>
                            </div>
                            <p className="border-bottom margin-leftRight"></p>
                            <div className="padding-top2 margin-leftRight">
                            <p className="font-size0 margin-top-1  between">แพ็คเกจของคุณ <span className="bold font-size0">ตามระยะเวลาของโปรแกรม</span></p>
                            <p className="font-size0 margin-top-1  between">ชำระผ่าน <span className="bold font-size0">บัตรเดบิต/เครดิต **********1234</span></p>
                            </div>
                        </div>
                        <div className="margin-bottom1">
                            <p>หากมีข้อสงสัยสามารถสอบถามเพิ่มเติม<a href="#">ได้ที่นี่</a></p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Billing_history;
