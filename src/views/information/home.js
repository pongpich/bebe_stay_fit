import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  onChickprice = (e) => {
  
    this.props.history.push('/videoList');
   }
  render() {
    return (
      <div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  padding-top2 information-boxNull ">
          <div className="container">
            <div className="row row-cols-2">
              <h4 className="">BEBE Fit Routine</h4>
              <h6 className="right">ลงทะเบียน</h6>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 box-Null">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 center">
              <div className="box-NullIn">
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 center">
              <div className="box-NullIn">
                <div className="center footerNull">
                  <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Login</button> &nbsp; &nbsp;
                  <Link to="/programPackage" className="btn btn-secondary" type="button">คลิก</Link>
                  <Link to="/profile" className="btn btn-secondary" type="button">profile</Link>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 box-Null1">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 center">
              <div className="box-NullIn">
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 center">
              <div className="box-NullIn">
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 box-Null">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 center">
              <div className="box-NullIn">
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 center">
              <div className="box-NullIn">
              </div>
            </div>
          </div>
        </div>


        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content padding-leftRight">
              <div className="modal-headerIn margin-headText">
                <p className="bold font-size5  color-protein" id="exampleModalLabel"></p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-bodyIn">
                <div className="center margin-bottom margin-top-1">
                  <p className="bold font-size8  color-protein" id="exampleModalLabel">เข้าสู่ระบบ</p>
                </div>
                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top1">
                  <div className="mb-3">
                    <label className="form-label">อีเมล</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">รหัสผ่าน</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                  </div>
                  <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 distance">
                   <button className="btn bottom-pinkLogin   font-size6" type="button" onClick={e => this.onChickprice(e)} data-bs-dismiss="modal">
                      เข้าสู่ระบบ
                    </button> 
                  </div>
                  <p className="between margin-top-2 font-size4"><a href="#">ลืมรหัสผ่าน</a> <span>ยังไม่เป็นสมาชิก? <a href="#">ลงทะเบียน</a></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
