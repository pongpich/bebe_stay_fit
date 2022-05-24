import React, { Component, } from "react";
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
                      <a className="video-link2 color1">DAY 1</a>
                    </li>
                    <li className="video-li2  video-liPadding-left2">
                      <a className="video-link2 day2-4">DAY 2</a>
                    </li>
                    <li className="video-li2 video-liPadding-left2">
                      <a className="video-link2 day2-4">DAY 3</a>
                    </li>
                    <li className="video-li2  video-liPadding-left2">
                      <a className="video-link2 day2-4">DAY 4</a>
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
                <img src={edit} className="icon-edit" />
                แก้ไขคลิปออกกำลังกาย
              </div>
              <div class="col col-lg-3">
                <div class="form-check form-switch form-check-reverse">
                  <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                  <label class="form-check-label" for="flexSwitchCheckReverse">เล่นต่อเนื่องอัตโนมัติ</label>
                </div>
              </div>
            </div>
          </div>
          <div className="containerli2">
            <div className="row">
              <div className="col col-sm col-md-2 col-lg-2 ">
     
                <div className="iconCenter ">
                <div className="start-e">
                  <p className="bold">เริ่มกันเลย!</p>
                </div>
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
                </div>
                <div className="end-e">
                  <p className="bold color1">สำเร็จแล้ว!</p>
                </div>
              </div>
              <div className="col-10 col-sm-10 col-md-10 col-lg-10">
                <div className=" box-playVdieo">
                  <div className="row">
                    <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly1">
                        <div className=" background-icon-play">
                          <div className="icon-play-video">
                            <img src={play_circle_filled} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly2">
                          <div className="text-video">
                            <p className="high-impact"><img src={group47}  className="col-2"/><span className="bold color1">High Impact</span> </p>
                            <p className="alarm"> <img src={alarm}  className="col-2"/> 5.06 นาที</p>
                          </div>
                          <div className="rectangle15"></div>
                          <p className="warmup">Warm up {">"}</p>
                          <p className="warmup2 bold">Warm up</p>
                          <img src={ellipse61}  className="ellipse61 ellipse61-size" />
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" box-playVdieo">
                  <div className="row">
                    <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly1">
                        <div className=" background-icon-play">
                          <div className="icon-play-video">
                            <img src={play_circle_filled} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly2">
                          <div className="text-video">
                            <p className="high-impact"><img src={group47}  className="col-2"/><span className="bold color1">High Impact</span> </p>
                            <p className="alarm"> <img src={alarm}  className="col-2"/> 5.06 นาที</p>
                          </div>
                          <div className="rectangle15"></div>
                          <p className="warmup">Warm up {">"}</p>
                          <p className="warmup2 bold">Warm up</p>
                          <img src={ellipse61}  className="ellipse61 ellipse61-size" />
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" box-playVdieo">
                  <div className="row">
                    <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly1">
                        <div className=" background-icon-play">
                          <div className="icon-play-video">
                            <img src={play_circle_filled} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly2">
                          <div className="text-video">
                            <p className="high-impact"><img src={group47}  className="col-2"/><span className="bold color1">High Impact</span> </p>
                            <p className="alarm"> <img src={alarm}  className="col-2"/> 5.06 นาที</p>
                          </div>
                          <div className="rectangle15"></div>
                          <p className="warmup">Warm up {">"}</p>
                          <p className="warmup2 bold">Warm up</p>
                          <img src={ellipse61}  className="ellipse61 ellipse61-size" />
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" box-playVdieo">
                  <div className="row">
                    <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly1">
                        <div className=" background-icon-play">
                          <div className="icon-play-video">
                            <img src={play_circle_filled} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly2">
                          <div className="text-video">
                            <p className="high-impact"><img src={group47}  className="col-2"/><span className="bold color1">High Impact</span> </p>
                            <p className="alarm"> <img src={alarm}  className="col-2"/> 5.06 นาที</p>
                          </div>
                          <div className="rectangle15"></div>
                          <p className="warmup">Warm up {">"}</p>
                          <p className="warmup2 bold">Warm up</p>
                          <img src={ellipse61}  className="ellipse61 ellipse61-size" />
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" box-playVdieo">
                  <div className="row">
                    <div className="col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly1">
                        <div className=" background-icon-play">
                          <div className="icon-play-video">
                            <img src={play_circle_filled} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-12  col-sm-12 col-md-6 col-lg-6">
                      <div className="box-paly2">
                          <div className="text-video">
                            <p className="high-impact"><img src={group47}  className="col-2"/><span className="bold color1">High Impact</span> </p>
                            <p className="alarm"> <img src={alarm}  className="col-2"/> 5.06 นาที</p>
                          </div>
                          <div className="rectangle15"></div>
                          <p className="warmup">Warm up {">"}</p>
                          <p className="warmup2 bold">Warm up</p>
                          <img src={ellipse61}  className="ellipse61 ellipse61-size" />
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                          <img src={ellipse61}  className="ellipse61-2 ellipse61-size"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="vidio-all">
             <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <p className="clip-all between bold">คลิปแบบซื้อ <span className="family-normal "> ดูทั้งหมด {">"}</span> </p>
                </div>
              
                <div className="scrolloverflow">
                <ul>
                  <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut
                  </li>
                </ul>
              </div>
                <div className="">
                    <div className="scrolloverflow">
                      <ul>
                        <li>
                        <div className="boxvideo" >
                          <div className="box-video">
                            zxczxc
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
                            zxczxc
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
                            zxczxc
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
                            zxczxc
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
                            zxczxc
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
      </>

    );
  }
}

export default videoList;
