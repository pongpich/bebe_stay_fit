import React, { Component, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram";
import { loginUser, resetStatusSetPassword } from "../../redux/auth";
import backgroundImag from '../../assets/img/mainbg.jpeg';
import loginprofile from '../../assets/img/loginprofile.jpg';
import head from '../../assets/img/home/head.webp';
import part3 from '../../assets/img/home/part3.webp';
import part4 from '../../assets/img/home/part4.webp';
import part5 from '../../assets/img/home/part5.webp';
import part6 from '../../assets/img/home/part6.webp';
import part7 from '../../assets/img/home/part7.webp';
import part8 from '../../assets/img/home/part8.webp';
import part9 from '../../assets/img/home/part9.webp';
import part10 from '../../assets/img/home/part10.webp';
import part11 from '../../assets/img/home/part11.webp';
import review from '../../assets/img/home/review.webp';
import part13 from '../../assets/img/home/part13.webp';
import price from '../../assets/img/home/price.webp';
import countdown from '../../assets/img/home/countdown.webp';
import part16 from '../../assets/img/home/part16.webp';

/*  win-512 */

import head512 from '../../assets/img/home512/head512.webp';
import part3512 from '../../assets/img/home512/part3512.webp';
import part4512 from '../../assets/img/home512/part4512.webp';
import part5512 from '../../assets/img/home512/part5512.webp';
import part6512 from '../../assets/img/home512/part6512.webp';
import part7512 from '../../assets/img/home512/part7512.webp';
import part8512 from '../../assets/img/home512/part8512.webp';
import part9512 from '../../assets/img/home512/part9512.webp';
import part10512 from '../../assets/img/home512/part10512.webp';
import part11512 from '../../assets/img/home512/part11512.webp';
import review512 from '../../assets/img/home512/review512.webp';
import part13512 from '../../assets/img/home512/part13512.webp';
import price512 from '../../assets/img/home512/price512.webp';
import countdown512 from '../../assets/img/home512/countdown512.webp';
import part16512 from '../../assets/img/home512/part16512.webp';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      validation: "true",
      setPassword: false,
      win: true
    }
  }

  onChickprice = (e) => {

    this.props.history.push('/videoList');
  }

  componentDidMount() {
    const { user_program_id, create_user_email, user, statusSetPassword } = this.props;

    this.props.getUserProgram(create_user_email);

    if (user_program_id) { //ถ้ามี user_program_id แสดงว่าชำระเงินสำเร็จแล้ว
      this.props.history.push('/welcome_new_nember');
    }

    if (user !== null) {
      this.props.history.push('/basic_information');
    }

    if (statusSetPassword === "success") {
      alert("เปลี่ยนรหัสผ่านสำเร็จ");
      this.props.resetStatusSetPassword();
      console.log("setPassword");
    }

    window.scrollTo(0, 0);




  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, status } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push('/welcome_new_nember');
    }

    if (prevProps.status !== status) {
      if (status === "success") {
        this.props.history.push('/basic_information');
        document.getElementById("remove-model").click(); //ใช้สำหรับซ่อน modal แต่ตอนนี้เอาออกเพราะปรับดีไซด์ชั่วคราวไม่งั้นมีบัค
      }
    }
  }



  resetPassword() {
    this.props.history.push('/reset_password');
    document.getElementById("remove-model").click(); //ใช้สำหรับซ่อน modal แต่ตอนนี้เอาออกเพราะปรับดีไซด์ชั่วคราวไม่งั้นมีบัค
  }

  onUserLogin() {

    if ((this.state.email !== "" && this.state.email !== null) && (this.state.password !== "" && this.state.password !== null)) {
      this.props.loginUser(this.state.email, this.state.password);
    } else {
      this.setState({
        validation: "false"
      })
    }


  }

  handleChange(event) {

    this.setState({
      [event.target.id]: event.target.value
    })
  };

  register() {
    this.props.history.push('/programPackage');
    document.getElementById("remove-model").click();

  }

  homeLogin() {
    return (
      <>

          <img src={head} alt="vector" className="home-image" />
          <div className="box-home">
            <div className="top-Home">
              <p className="textHome bold">สนใจสมัคร</p>
              <p className="textHome2 bold" >ปรึกษาผู้เชี่ยวชาญ</p>
              <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 center ">
                <button className="btn bottom-pinkLogin2 bold" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>
          </div>
          <img src={part3} alt="vector" className="home-image" />
          <img src={part4} alt="vector" className="home-image" />
          <img src={part5} alt="vector" className="home-image" />
          <img src={part6} alt="vector" className="home-image" />
          <img src={part7} alt="vector" className="home-image" />
          <img src={part8} alt="vector" className="home-image" />
          <img src={part9} alt="vector" className="home-image" />
          <img src={part10} alt="vector" className="home-image" />
          <img src={part11} alt="vector" className="home-image" />
          <img src={review} alt="vector" className="home-image" />
          <img src={part13} alt="vector" className="home-image" />
          <img src={price} alt="vector" className="home-image" data-bs-toggle="modal" data-bs-target="#exampleModal" />
          <img src={countdown} alt="vector" className="home-image" />
          <img src={part16} alt="vector" className="home-image" data-bs-toggle="modal" data-bs-target="#exampleModal" />



        <div className="win-540">
          <img src={head512} alt="vector" className="home-image" />
          <div className="box-home">
            <div className="top-Home">
              <p className="textHome bold">สนใจสมัคร</p>
              <p className="textHome2 bold" >ปรึกษาผู้เชี่ยวชาญ</p>
              <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 center ">
                <button className="btn bottom-pinkLogin2 bold" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>
          </div>
          <img src={part3512} alt="vector" className="home-image" />
          <img src={part4512} alt="vector" className="home-image" />
          <img src={part5512} alt="vector" className="home-image" />
          <img src={part6512} alt="vector" className="home-image" />
          <img src={part7512} alt="vector" className="home-image" />
          <img src={part8512} alt="vector" className="home-image" />
          <img src={part9512} alt="vector" className="home-image" />
          <img src={part10512} alt="vector" className="home-image" />
          <img src={part11512} alt="vector" className="home-image" />
          <img src={review512} alt="vector" className="home-image" />
          <img src={part13512} alt="vector" className="home-image" />
          <img src={price512} alt="vector" className="home-image" data-bs-toggle="modal" data-bs-target="#exampleModal" />
          <img src={countdown512} alt="vector" className="home-image" />
          <img src={part16512} alt="vector" className="home-image" data-bs-toggle="modal" data-bs-target="#exampleModal" />
        </div>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content padding-leftRight">
              <div className="modal-headerIn margin-headText">
                <p className="bold font-size5  color-protein" id="exampleModalLabel"></p>
                <button type="button" className="btn-close" id="remove-model" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-bodyIn">
                <div className="center margin-bottom margin-top-1">
                  <p className="bold font-size8  color-protein" id="exampleModalLabel">เข้าสู่ระบบ</p>
                </div>
                <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top1">
                  <div className="mb-3">
                    <label className="form-label">อีเมล</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="กรุณากรอก Email (Example@mail.com)"
                      value={this.state.email}
                      onChange={(event) => this.handleChange(event)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">รหัสผ่าน</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={this.state.password}
                      onChange={(event) => this.handleChange(event)}
                    />
                  </div>
                  {this.state.validation !== "true" ?
                    <h6 style={{ color: "red" }}>กรุณากรอกข้อมูลให้ครบถ้วน</h6>
                    : null}
                  <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 distance">
                    <button className="btn bottom-pinkLogin   font-size6" type="button" onClick={() => this.onUserLogin()}>
                      เข้าสู่ระบบ
                    </button>
                  </div>
                  <p className="between margin-top-2 font-size4"><span className="pointer reset" onClick={() => this.resetPassword()}>ลืมรหัสผ่าน</span> <span>ยังไม่เป็นสมาชิก? <a className="a_link pointer" onClick={() => this.register("register")}>ลงทะเบียน</a></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  login() {
    return (
      <>
        <div style={{
          backgroundImage: `url(${backgroundImag})`,
          width: '100%',
          height: '100vh'
        }}>
          <div className="centerBox-Login">
            <div className="box-login">
              <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <img src={loginprofile} alt="vector" className="col-12 col-sm-12  col-md-12 col-lg-12" />
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 ">
                  <div className="boxTopLogin">
                    <div className="center margin-bottom margin-top-1">
                      <p className="bold font-size8  color-protein" id="exampleModalLabel">เข้าสู่ระบบ</p>
                    </div>
                    <div className=" col-12 col-sm-12  col-md-12 col-lg-12 padding-top1">
                      <div className="mb-3">
                        <label className="form-label">อีเมล</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="กรุณากรอก Email (Example@mail.com)"
                          value={this.state.email}
                          onChange={(event) => this.handleChange(event)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">รหัสผ่าน</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={this.state.password}
                          onChange={(event) => this.handleChange(event)}
                        />
                      </div>
                      {this.state.validation !== "true" ?
                        <h6 style={{ color: "red" }}>กรุณากรอกข้อมูลให้ครบถ้วน</h6>
                        : null}
                      <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-12 col-lg-12 distance">
                        <button className="btn bottom-pinkLogin   font-size6" type="button" onClick={() => this.onUserLogin()}>
                          เข้าสู่ระบบ
                        </button>
                      </div>
                      <p className="between margin-top-2 font-size4"><span className="pointer reset" onClick={() => this.resetPassword()}>ลืมรหัสผ่าน</span>
                        <span>ยังไม่เป็นสมาชิก? <a className="a-Href" onClick={(e) => this.props.history.push('/programPackage')}>ลงทะเบียน</a></span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  render() {
    const { validation, win2 } = this.state;

    console.log("win : ", win2);
    return (
      <>
        {this.homeLogin()}
        {/* {this.login()} */}
      </>
    );
  }
}

const mapStateToProps = ({ authUser, createUser, exerciseProgram }) => {
  const { user, status, statusSetPassword } = authUser;
  const { create_user_email } = createUser;
  const { user_program_id } = exerciseProgram;
  return { create_user_email, user_program_id, user, status, statusSetPassword };
};

const mapActionsToProps = { getUserProgram, loginUser, resetStatusSetPassword };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Home);