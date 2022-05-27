import React, { Component } from "react";
import studioSession from "../../assets/img/studio_session_1.png";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getUserProgram } from "../../redux/exerciseProgram"
import { loginUser } from "../../redux/auth"

class Welcome_NewMember extends React.Component {

  componentDidMount() {
    const { user_program_id, create_user_email, user } = this.props;

    this.props.getUserProgram(create_user_email);

    if (!user_program_id) { //ถ้าไม่มี user_program_id แสดงว่ายังชำระเงินไม่สำเร็จแล้ว
      this.props.history.push('/programPackage');
    }

    if (user !== null) {
      this.props.history.push('/basic_information');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { user_program_id, status } = this.props;
    if ((prevProps.user_program_id !== user_program_id) && (!user_program_id)) {  //ถ้าไม่มี user_program_id แสดงว่ายังชำระเงินไม่สำเร็จแล้ว
      this.props.history.push('/programPackage');
    }

    if (prevProps.status !== status) {
      if (status === "success") {
          this.props.history.push('/basic_information');     
      }
    }
  }

  onUserLogin() {
    if (this.props.create_user_email !== "") {
      this.props.loginUser(this.props.create_user_email);
    }
  }

  render() {
    return (
      <>
        <div className="container2">
          <div className="row center App-headerBackground ">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5 padding-top center height-box ">
              <img src={studioSession} alt="vector" className="studio-session col-12 col-sm-12 col-md-12 col-lg-12" />
            </div>
            <div className="col-12 col-sm-12 col-md-7 col-lg-7 padding-top information-box2">
              <div className="from-left padding-top3 text-center box-welcome">
                <p className="border-bottom  margin-right"></p>
                <p className="font-size6  bold">ยินดีต้อนรับสมาชิกใหม่ของเรา</p>
                <p className="border-bottom margin-right"></p>
                <p className="padding-top2"> ขอบคุณที่มาสมัครเข้าร่วมเป็นสมาชิก Bebe Stay Fit</p>
                <p>ทางทีมงานได้รับข้อมูลการสมัครเรียบร้อยแล้ว</p>
                <p>เราขอบคุณที่ท่านให้ความสนใจและเลือกเราเป็นส่วนหนึ่งสู่ความสำเร็จ </p>
                <p>มาสร้างวินัย และมีความสุขกับการออกกำลังกายนะคะ </p>
              </div>
              <div className="mb-3 ">
                <div className="d-grid gap-2  mx-auto   col-12 col-sm-12  col-md-6 col-lg-6 from-left">
                  <button
                    className="btn bottom-pink"
                    type="button"
                    style={{ opacity: "1" }}
                    onClick={() => this.onUserLogin()}
                  >
                    เริ่มต้นใช้งาน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

    );
  }
}

const mapStateToProps = ({ authUser, createUser, exerciseProgram }) => {
  const { user, status } = authUser;
  const { create_user_email } = createUser;
  const { user_program_id } = exerciseProgram;
  return { create_user_email, user_program_id, user, status };
};

const mapActionsToProps = { getUserProgram, loginUser };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Welcome_NewMember);
