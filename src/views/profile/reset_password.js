import React, { Component } from 'react'

class Reset_password extends Component {
    resetPasswordSucceed() {
        this.props.history.push('/reset_password_succeed');
    }

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
                                <p className="section-size2 margin-top-1 ">โปรดกรอกเบอร์โทรศัพท์ หรืออีเมลของคุณ </p>
                                <p className="section-size2 margin-top-1">คุณจะได้รับลิงค์สำหรับสร้างรหัสผ่านใหม่ทางอีเมล</p>
                            </div>
                            <div class="mb-3  col-10 col-sm-10 col-md-10 col-lg-10 center2 text-left2">
                                <label for="exampleFormControlInput1" className="form-label text-left2  size-login">เบอร์โทรศัพท์ หรืออีเมล</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="col-10 col-sm-10 col-md-10 col-lg-10 center2 padding-bottom padding-top2 ">
                                <button type="button" className="btn bottom-pink-video" onClick={() => this.resetPasswordSucceed()}>ยืนยันหมายเลขโทรศัพท์</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Reset_password;