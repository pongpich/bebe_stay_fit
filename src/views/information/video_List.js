import React, { Component, } from "react";
import user_circle from "../../assets/img/user_circle.svg";
import play_circle_filled from "../images/play_circle_filled.png";
import rectangle13 from "../images/rectangle13.png";
import edit from "../images/edit.png";

class videoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      borderBottom1: "video-link rectangle13",
      borderBottom2: "video-link",
      borderBottom3: "video-link",
      videoLi: "video-li ",

    }
  }


  clickBottom = (e) => {

    let name = e.target.name;

    if (name === 'borderBottom1') {
      console.log("1");
      var bottom1 = "video-link rectangle13"
      var bottom2 = "video-link"
      var bottom3 = "video-link"
    } else if (name === 'borderBottom2') {
      console.log("2");
      var bottom1 = "video-link "
      var bottom2 = "video-link rectangle13"
      var bottom3 = "video-link"
    } else {
      console.log("3");
      var bottom1 = "video-link"
      var bottom2 = "video-link"
      var bottom3 = "video-link rectangle13"
    }

    this.setState({
      borderBottom1: bottom1,
      borderBottom2: bottom2,
      borderBottom3: bottom3,
    });

  }

  render() {
    console.log(this.state.borderBottom1, this.state.borderBottom2, this.state.borderBottom3);
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light information-box">
          <div className="container-fluid">
            <h4 className="color1">BEBEStayFit</h4>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse padding-left3" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link pointer" >บทความ</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pointer" >อาหารเสริมและอุปกรณ์</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pointer">Platform</a>
                </li>
              </ul>
              <div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link ">ตะกร้าสินค้า</a>
                  </li>
                  <li className="nav-item">
                    <h6 className="nav-link"><img src={user_circle} alt="vector" className="padding-right" />บพิตร์ เตชะวัฒนานันท์</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="box-videoHead">
          <h3 className="center-videoText bold">
            Platform
          </h3>
          <div className="play_circle">
            <img src={play_circle_filled} /> <span className="play_circle_span">WATCH INTRODUCTION</span>
          </div>
        </div>
        <div className="box-videoCenter">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <ul className="">
              <li className="video-li  video-liPadding-left">
                <a className={this.state.borderBottom1} name="borderBottom1" onClick={e => this.clickBottom(e)}>Routine workout</a>
              </li>
              <li className="video-li  video-liPadding-left   video-liPadding-left2">
                <a className={this.state.borderBottom2} name="borderBottom2" onClick={e => this.clickBottom(e)}>คลิปออกกำลังกายทั้งหมด</a>
              </li>
              <li className="video-li video-liPadding-left   video-liPadding-left2">
                <a className={this.state.borderBottom3} name="borderBottom3" onClick={e => this.clickBottom(e)}>คลิปออกกำลังกายทั้งหมด</a>
              </li>
            </ul>
          </div>
          <div className="video-ul2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
              <nav className="navbar">
                <div className="container-fluid">
                  <ul>
                    <li className="video-li2 ">
                      <a className="video-link2">DAY 1</a>
                    </li>
                    <li className="video-li2  video-liPadding-left2">
                      <a className="video-link2">DAY 2</a>
                    </li>
                    <li className="video-li2 video-liPadding-left2">
                      <a className="video-link2">DAY 3</a>
                    </li>
                    <li className="video-li2  video-liPadding-left2">
                      <a className="video-link2">DAY 4</a>
                    </li>
                  </ul>
                  <ul>
                    <li className="video-li2  d-flex">
                      <a className="decoration color1">ดูวีดีโอออกกำลังกายอาทิย์ที่ผ่านมา</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="rectangle14"></div>
            </div>
          </div>
          <div class="containerli">
            <div class="row">
              <div class="col">
              รวมเวลาฝึกทั้งหมด 55 นาที
              </div>
              <div class="col-md-auto">
              <img src={edit}  className="icon-edit"/>
              แก้ไขคลิปออกกำลังกาย
              </div>
              <div class="col col-lg-4 ">
              <div class="form-check form-switch form-check-reverse">
            
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label class="form-check-label" for="flexSwitchCheckDefault">เล่นต่อเนื่องอัตโนมัติ</label>
              </div>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

export default videoList;
