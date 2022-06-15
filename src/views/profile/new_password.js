import React, { Component } from 'react'

 class new_password extends Component {
  render() {
    return (
        <>
        <div className="padding-top4 center">
            <p className="font-size8 bold color-protein"> เปลี่ยนรหัสผ่าน</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5  center2 ">
                <div className="box-protein margin-bottom1 padding-top">
                <div class="mb-3  col-10 col-sm-10 col-md-10 col-lg-10 center2 text-left2">
                        <label for="exampleFormControlInput1" className="form-label text-left2  size-login">รหัสผ่าน</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3  col-10 col-sm-10 col-md-10 col-lg-10 center2 text-left2">
                        <label for="exampleFormControlInput1" className="form-label text-left2  size-login">ยืนยันรหัสผ่าน</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div className="col-10 col-sm-10 col-md-10 col-lg-10 center2 padding-bottom padding-top2 ">
                        <button type="button" className="btn bottom-pink-video" onClick={() => this.resetPasswordSucceed()}>ยืนยัน</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
  }
}
export default new_password;