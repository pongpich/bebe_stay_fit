import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram";
import { loginUser, resetStatusSetPassword } from "../../redux/auth";
import backgroundImag from '../../assets/img/mainbg.jpeg';
import loginprofile from '../../assets/img/loginprofile.jpg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      validation: "true",
      setPassword: false
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



  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, status } = this.props;
    if (prevProps.user_program_id !== user_program_id) {
      this.props.history.push('/welcome_new_nember');
    }

    if (prevProps.status !== status) {
      if (status === "success") {
        this.props.history.push('/basic_information');
        document.getElementById("remove-model").click();
      }
    }
  }


  resetPassword() {
    this.props.history.push('/reset_password');
    document.getElementById("remove-model").click();
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


  homeLogin() {
    return (
      <>
        <div>
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
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 box-Null1">
            <div className="row ">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 center">
                <div className="box-NullIn">
                  <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Login</button> &nbsp; &nbsp;
                  <Link to="/programPackage" className="btn btn-secondary" type="button">คลิก</Link>
                  <Link to="/profile" className="btn btn-secondary" type="button">profile</Link>
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
                    <p className="between margin-top-2 font-size4"><span className="pointer reset" onClick={() => this.resetPassword()}>ลืมรหัสผ่าน</span> <span>ยังไม่เป็นสมาชิก? <a href="#">ลงทะเบียน</a></span></p>
                  </div>
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
                       <span>ยังไม่เป็นสมาชิก? <a className="a-Href"  onClick={(e) => this.props.history.push('/programPackage')}>ลงทะเบียน</a></span></p>
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
    const { validation } = this.state;
    return (
      <>
        {/*    {this.homeLogin()} */}
        {this.login()}
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