import React, { Component } from "react";
import user_circle from "../../assets/img/user_circle.svg";
import play_circle_filled from "../images/play_circle_filled.png";
import rectangle13 from "../images/rectangle13.png";
import edit from "../images/edit.png";
import ellipse2 from "../images/ellipse2.png";
import line1 from "../images/line1.png";
import ellipse5 from "../images/ellipse5.png";
import eCheck from "../images/check.svg";
import e2 from "../images/2.png";
import e3 from "../images/3.png";
import e4 from "../images/4.png";
import e5 from "../images/5.png";
import group47 from "../images/group47.png";
import alarm from "../images/alarm.png";
import ellipse61 from "../images/ellipse61.png";
import union from "../images/union.png";
import vector4 from "../images/vector4.png";
import { loadingLogo } from "aws-amplify";
import { connect } from "react-redux";
import { videoListForUser, createWeeklyStayfitProgram } from "../../redux/exerciseVideos"
import { convertFormatTime, convertSecondsToMinutes } from "../../helpers/utils"


class videoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicApp: "1",
      clickManu: "manu1",
      borderBottom1: "video-link rectangle13 color1",
      borderBottom2: "video-link",
      borderBottom3: "video-link",
      borderBottom4: "video-link",
      videoLi: "video-li ",
      focusDay: 0,
      urlVideo: null,
    }
  }

  componentDidMount() {
    const { user, exerciseVideo, statusVideoList } = this.props;

    /*     if (user === null) {
          this.props.history.push('/welcome_new_nember');
        } */

    if (user && user.other_attributes) {
      this.props.videoListForUser(
        this.props.user.user_id,
        this.props.user.other_attributes.weight,
        this.props.user.start_date,
        this.props.user.expire_date,
        this.props.user.offset
      );
    }

    if (user && statusVideoList === "no_video") {
      this.props.createWeeklyStayfitProgram(
        this.props.user.user_id,
        this.props.user.start_date,
        this.props.user.expire_date,
      );
    }

    console.log("exerciseVideo :", exerciseVideo)
  }

  componentDidUpdate(prevProps) {
    const { user, statusVideoList } = this.props;
    if (user && prevProps.user && ((prevProps.statusVideoList !== statusVideoList) && statusVideoList === "no_video")) {
      this.props.createWeeklyStayfitProgram(
        this.props.user.user_id,
        this.props.user.start_date,
        this.props.user.expire_date,
      );
    }

    if (user && prevProps.user && ((prevProps.statusVideoList !== statusVideoList) && statusVideoList !== "no_video")) {
      this.props.videoListForUser(
        this.props.user.user_id,
        this.props.user.other_attributes.weight,
        this.props.user.start_date,
        this.props.user.expire_date,
        this.props.user.offset
      );
    }
  }

  onDayChange = (day) => {
    this.setState({
      focusDay: day
    });
  }


  clickBottom = (e) => {

    let name = e.target.name;

    if (name === 'borderBottom1') {
      console.log("1");
      var clickManu = "manu1"
      var bottom1 = "video-link rectangle13 color1"
      var bottom2 = "video-link"
      var bottom3 = "video-link"
      var bottom4 = "video-link"
    } else if (name === 'borderBottom2') {
      console.log("2");
      var clickManu = "manu2"
      var bottom1 = "video-link "
      var bottom2 = "video-link rectangle13 color1"
      var bottom3 = "video-link "
      var bottom4 = "video-link"
    } else if (name === 'borderBottom3') {
      var bottom = "manu3"
      var bottom1 = "video-link "
      var bottom2 = "video-link "
      var bottom3 = "video-link rectangle13 color1"
      var bottom4 = "video-link"

    } else {
      console.log("3");
      var clickManu = "manu4"
      var bottom1 = "video-link"
      var bottom2 = "video-link"
      var bottom3 = "video-link"
      var bottom4 = "video-link rectangle13 color1"
    }

    this.setState({
      clickManu: clickManu,
      borderBottom1: bottom1,
      borderBottom2: bottom2,
      borderBottom3: bottom3,
      borderBottom4: bottom4,
    });

  }
  pauseVideo(e) {
    var myVideo = document.getElementById("idUrl");
    myVideo.pause();
  }
  urlVideo(e) {
    let url = e.target.name;
    this.setState({
      urlVideo: url,
    });
  }

  exerciseDaySelection(focusDay) {
    if (this.props.exerciseVideo) {
      return this.props.exerciseVideo[focusDay];
    }
  }

  routineWorkout() {
    const { focusDay } = this.state;
    const todayExercise = this.exerciseDaySelection(focusDay);
    return (
      <>
        {/* <nav className="navbar navbar-expand-lg bg-light information-box">
          <div className="container-fluid nav-left2">
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
        </nav> */}
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
                <a className={this.state.borderBottom3} name="borderBottom3" onClick={e => this.clickBottom(e)}>อาหารเสริม</a>
              </li>
              <li className="video-li video-liPadding-left   video-liPadding-left2">
                <a className={this.state.borderBottom4} name="borderBottom4" onClick={e => this.clickBottom(e)}>วิธีการเล่น</a>
              </li>
            </ul>
          </div>
          <div className="video-ul2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
              <nav className="navbar">
                <div className="container-fluid">
                  <ul>
                    <li className="video-li2 ">
                      <a
                        className="video-link2"
                        style={{ color: `${this.state.focusDay === 0 ? "#E25E96" : "#C4C4C4"}` }}
                        onClick={() => this.onDayChange(0)}
                      >
                        DAY 1
                      </a>
                    </li>
                    <li className="video-li2 video-liPadding-left2">
                      <a
                        className="video-link2"
                        style={{ color: `${this.state.focusDay === 1 ? "#E25E96" : "#C4C4C4"}` }}
                        onClick={() => this.onDayChange(1)}
                      >
                        DAY 2
                      </a>
                    </li>
                    <li className="video-li2  video-liPadding-left2">
                      <a
                        className="video-link2"
                        style={{ color: `${this.state.focusDay === 2 ? "#E25E96" : "#C4C4C4"}` }}
                        onClick={() => this.onDayChange(2)}
                      >
                        DAY 3
                      </a>
                    </li>
                    <li className="video-li2  video-liPadding-left2">
                      <a
                        className="video-link2"
                        style={{ color: `${this.state.focusDay === 3 ? "#E25E96" : "#C4C4C4"}` }}
                        onClick={() => this.onDayChange(3)}
                      >
                        DAY 4
                      </a>
                    </li>
                  </ul>
                  {/* <ul>
                    <li className="video-li2  d-flex">
                      <a className="decoration color1">ดูวีดีโอออกกำลังกายอาทิย์ที่ผ่านมา</a>
                    </li>
                  </ul> */}
                </div>
              </nav>
              <div className="rectangle14"></div>
            </div>
          </div>
          <div className="containerli">
            <div className="row">
              <div className="col">
                รวมเวลาฝึกทั้งหมด 55 นาที
              </div>
              <div className="col-md-auto">
                <img src={edit} className="icon-edit" />
                แก้ไขคลิปออกกำลังกาย
              </div>
              <div className="col col-lg-3">
                <div className="form-check form-switch form-check-reverse">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                  <label className="form-check-label" >เล่นต่อเนื่องอัตโนมัติ</label>
                </div>
              </div>
            </div>
          </div>
          <div className="containerli2">
            <div className="row">
              <div className="col col-sm col-md-2 col-lg-2 ">
                <div className="iconCenter ">
                  {/* <div className="start-e">
                    <p className="bold">เริ่มกันเลย!</p>
                  </div>
                  {
                    (this.props.exerciseVideo) &&
                    (todayExercise.map((item, index) => {
                      return (
                        <div>
                          <span
                            className="ellipse-2"
                            style={{
                              top: "50%",
                              height: "40px",
                              width: "40px",
                              zIndex: 1,
                              backgroundColor: "white",
                              color: "#F45197",
                              borderStyle: "solid",
                              borderWidth: "0.1px",
                              borderColor: "#F45197",
                              borderRadius: "50%",
                              display: "inline-block"
                            }}
                          >
                            <h3 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>{index + 1}</h3>
                          </span>
                          {
                            (index === todayExercise.length - 1) ?
                              <div
                                className="line1"
                              ></div>
                              :
                              <div
                                className="line1"
                                style={{
                                  top: "50%",
                                  borderLeft: "0.1px solid #F45197",
                                  height: "114%"
                                }}
                              ></div>
                          }
                        </div>
                      )
                    }))
                  }
                  <div className="ellipse-1">
                    <img src={ellipse2} className="" />
                    <img src={eCheck} className="eCheck" />
                  </div>
                  <div className="line1">
                    <img src={line1} className="ellipse2-1" />
                  </div>
                  <div className="ellipse-2">
                    <img src={ellipse5} className="ellipse2-1" />
                    <img src={e2} className="e2" />
                  </div>
                  <div className="line2">
                    <img src={line1} className="" />
                  </div>
                  <div className="ellipse-2">
                    <img src={ellipse5} className="ellipse2-1" />
                    <img src={e3} className="e2" />
                  </div>
                  <div className="line2">
                    <img src={line1} className="" />
                  </div>
                  <div className="ellipse-2">
                    <img src={ellipse5} className="ellipse2-1" />
                    <img src={e4} className="e2" />
                  </div>
                  <div className="line2">
                    <img src={line1} className="" />
                  </div>
                  <div className="ellipse-2">
                    <img src={ellipse5} className="ellipse2-1" />
                    <img src={e5} className="e2" />
                  </div>
                  <div className="end-e">
                    <p className="bold color1">สำเร็จแล้ว!</p>
                  </div> */}
                </div>
              </div>
              <div className="col-10 col-sm-10 col-md-10 col-lg-10 ">
                {
                  (this.props.exerciseVideo) &&
                  (todayExercise.map((item, index) => {
                    const minuteLabel = (item.duration < 20) ? convertFormatTime(item.duration) : convertSecondsToMinutes(item.duration);
                    return (
                      <div className=" box-playVdieo">
                        <div className="row">
                          <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                            <div className="box-paly1" style={{ backgroundImage: `url('./assets/img/thumb/${item.category.toLowerCase().split(" ").join("")}_g3.jpg')`,  backgroundSize: "100%" }}>
                              <div className=" background-icon-play">
                                <div className="icon-play-video">
                                  <img src={play_circle_filled} name={item.url} className="pointer" onClick={e => this.urlVideo(e)} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className=" col-12  col-sm-12 col-md-6 col-lg-6">
                            <div className="box-paly2">
                              <div className="text-video">
                                <p className="alarm"> <img src={alarm} className="col-2" /> {minuteLabel}  นาที</p>
                              </div>
                              <div className="rectangle15"></div>
                              <p className="warmup">{item.category} {">"}</p>
                              <p className="warmup2 bold">{item.name}</p>
                              <img src={ellipse61} className="ellipse61 ellipse61-size" />
                              <img src={ellipse61} className="ellipse61-2 ellipse61-size" />
                              <img src={ellipse61} className="ellipse61-2 ellipse61-size" />
                              <img src={ellipse61} className="ellipse61-2 ellipse61-size" />
                              <img src={ellipse61} className="ellipse61-2 ellipse61-size" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }))
                }
              </div>
            </div>
          </div>

          <div className="vidio-all">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <p className="clip-all between bold">คลิปแบบซื้อ <span className="family-normal pointer" data-bs-toggle="modal" data-bs-target="#exampleModal2"> ดูทั้งหมด {">"}</span> </p>
              </div>
              <div className="">
                <div className="scrolloverflow">
                  <ul>
                    <li>
                      <div className="boxvideo-1" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold" > โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* modal  */}




        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl mode-xxl">
            <div className="modal-content2">
              <div className="modal-header">
                {/*   <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span>
                </h5> */}
                <button type="button" className="btn-close color-x" data-bs-dismiss="modal" aria-label="Close" onClick={e => this.pauseVideo(e)}>X</button>

                {/* <button onClick={e => this.playVideo(e)}>PLAY</button> */}
              </div>
              <div className="modal-body">
                <video className="video" id={"idUrl"} controls src={this.state.urlVideo} ></video>
              </div>
            </div>
          </div>
        </div>
        {/* video ทั้งหมด */}
        <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" >
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img src={ellipse2} className="ellipse61-model" />
                  <img src={union} className="union" />
                  <span className="span-model bold color1"> Chest</span></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div className="modal-body">

                {(this.state.clicApp === "11") ? this.clicApp() : this.nullClipAll()}


              </div>
            </div>
          </div>
        </div>
      </>
    )
  }


  clicApp() {
    return (
      <>
        <div className="modal-boxvideo">
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
          <div className="boxvideo2" >
            <div className="box-video">
              { /*  zxczxc */}
            </div>
            <div className="box-video2">
              <div className="text-videobox">
                <p className="font-size6"> Chest 1 </p>
              </div>
              <button button className="btn bottom-pink-video" type="button" >
                เลือกวีดีโอนี้
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  nullClipAll() {
    return (
      <>
        <div className="modal-boxvideo">
          <div className="vector4-box">
            <img src={vector4} className="vector4" />
          </div>
          <div className="vector4-box2">
            <p className="vector4-text bold">คุณยังไม่มีคลิปออกกำลังกายเพิ่มเติม</p>
            <p className="vector4-text2">คลิปจะได้เพิ่มก็ต่อเมื่อมีการต่ออายุของ Bebe stay fit</p>
            <button className="btn bottom-pink-video vector4-button" type="button" >
              ปิด
              </button>
          </div>
        </div>
      </>
    )
  }

  videoClipAll() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-light information-box">
          <div className="container-fluid nav-left2">
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
            โปรแกรมออกกำลังกาย
          </h3>
        </div>
        <div className="box-videoCenterAll">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <ul className="">
              <li className="video-li  video-liPadding-left">
                <a className={this.state.borderBottom1} name="borderBottom1" onClick={e => this.clickBottom(e)}>Routine workout</a>
              </li>
              <li className="video-li  video-liPadding-left   video-liPadding-left2">
                <a className={this.state.borderBottom2} name="borderBottom2" onClick={e => this.clickBottom(e)}>คลิปออกกำลังกายทั้งหมด</a>
              </li>
              <li className="video-li video-liPadding-left   video-liPadding-left2">
                <a className={this.state.borderBottom3} name="borderBottom3" onClick={e => this.clickBottom(e)}>อาหารเสริม</a>
              </li>
              <li className="video-li video-liPadding-left   video-liPadding-left2">
                <a className={this.state.borderBottom4} name="borderBottom4" onClick={e => this.clickBottom(e)}>วิธีการเล่น</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="bought">
              <div>
                <p className="bold color1 ">ซื้อแล้ว</p>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    เล่น
                  </button>
                </div>
              </div>
            </div>
            <div className="bought bought-head">
              <div>
                <p className="bold color1 ">ยังไม่ได้ซื้อ</p>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    ซื้อโปรแกรมนี้
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    ซื้อโปรแกรมนี้
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    ซื้อโปรแกรมนี้
                  </button>
                </div>
              </div>
              <div className="bought-box" >
                <div className="box-video">
                  {/*   zxczxc */}
                </div>
                <div className="box-video1">
                  <div className="text-videobox">
                    <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                    <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                  </div>
                  <button button className="btn bottom-pink-video" type="button" >
                    ซื้อโปรแกรมนี้
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }


  render() {

    const { clickManu } = this.state;
    console.log("clickManu", clickManu);
    return (
      (clickManu === "manu1") ?
        this.routineWorkout()
        :
        this.videoClipAll()
    );
  }
}

const mapStateToProps = ({ authUser, exerciseVideos }) => {
  const { user } = authUser;
  const { exerciseVideo, statusVideoList } = exerciseVideos;
  return { user, exerciseVideo, statusVideoList };
};

const mapActionsToProps = { videoListForUser, createWeeklyStayfitProgram };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(videoList);