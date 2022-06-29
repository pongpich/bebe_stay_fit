import React, { Component } from 'react'

class Reset_password_succeed extends Component {
    render() {
        return (
            <>
                <div className="padding-top4 center">
                    <p className="font-size8 bold color-protein"> ลืมรหัสผ่าน</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5  center2 ">
                        <div className="box-protein margin-bottom1 padding-top">
                            <div className="padding-leftRight">
                                <p className="section-size2 margin-top-1">เราได้ส่งลิงค์สำหรับสร้างรหัสผ่านใหม</p>
                                <p className="section-size2 margin-top-1">ไปทางอีเมลเรียบร้อยแล้วหากไม่พบอีเมลโปรดตรวจสอบที่เมลขยะ</p>
                                <p className="section-size2 margin-top-1">หรือติดต่อมาหาเราได้ที่ 086-424-5141</p>
                                <p className="section-size2 margin-top-1">(ตั้งแต่เวลา 6:00-18:00น.)</p>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 center2 padding-bottom padding-top2 ">
                                    <button type="button" className="btn bottom-pink-video" onClick={() => this.props.history.push('/home')}>กลับสู้หน้าหลัก</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Reset_password_succeed;

