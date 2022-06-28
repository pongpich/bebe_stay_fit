import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { basicInFormation } from "../../redux/basicInFormation";
import { updateProfile } from "../../redux/auth";

class Basic_Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      typeHei_Wig: "กก_ซม",
      typeHeight: "เซนติเมตร",
      typeWeight: "กิโลกรัม",
      basicSex: null,
      basicAge: null,
      basicHeight: null,
      basicWeight: null,
      practiceDifficultExercises: null,
      injury: null,
      arePregnant: null
    }
  }

  componentDidMount() {
    const { user } = this.props;

    if (user === null) {
      this.props.history.push('/welcome_new_nember');
    }

    if (user && user.other_attributes) {
      this.props.history.push('/videoList');
    }
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;
    if (user && (prevProps.user.other_attributes !== user.other_attributes)) {
      if (user && user.other_attributes) {
        this.props.history.push('/videoList');
      }
    }
  }

  basicInFormation(basicSex, basicAge, typeHei_Wig, basicHeight, basicWeight, practiceDifficultExercises, injury, arePregnant) {
    this.props.basicInFormation(
      basicSex, basicAge, typeHei_Wig, basicHeight, basicWeight, practiceDifficultExercises, injury, arePregnant
    );

    const other_attributes = {
      sex: this.state.basicSex,
      age: Number(this.state.basicAge),
      weight: Number(this.state.basicWeight),
      unitWeight: this.state.typeWeight,
      height: Number(this.state.basicHeight),
      unitHeight: this.state.typeHeight,
      doDifficultPosture: (practiceDifficultExercises === "sure") ? 'yes' : 'no'
    }

    this.props.updateProfile(
      this.props.user.user_id,
      other_attributes,
      this.props.user.start_date,
      this.props.user.program_id,
      (practiceDifficultExercises === "sure") ? false : true // false = ไม่ใช่ is_beginner, true = เป็น is_beginner
    );
  }

  checkBoxes = (e) => {
    const { checked } = e.target
    if (checked === true) {
      var typeHei_Wig = "กก_ซม"
      var typeHeight = "เซนติเมตร"
      var typeWeight = "กิโลกรัม"
    } else {
      var typeHei_Wig = "ปอนด์_ฟุต"
      var typeHeight = "ฟุต"
      var typeWeight = "ปอนด์"
    }
    this.setState({
      checked: checked,
      typeHei_Wig: typeHei_Wig,
      typeHeight: typeHeight,
      typeWeight: typeWeight
    })
  }

  onCheckBasix = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }




  render() {


    const { basicSex, basicAge, typeHei_Wig, basicHeight, basicWeight, practiceDifficultExercises, injury, arePregnant } = this.state;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  App-headerBackground center2 padding-top2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
            <div className="box-protein margin-bottom1">
              <div className="padding-top">
                <p className="font-size6 bold color-protein"> กรอกข้อมูลเบื้องต้นเพื่อเริ่มต้นการใช้งาน</p>
                <p>การกรอกข้อมูลจะทำให้เราสามารถออกแบบ<br />โปรแกรมออกกำลังกายให้เหมาะสมกับคุณได้ดียิ่งขึ้น</p>
                <div className="box-proteinAddress padding-top">
                  <div className="padding-top2">
                    <p className="form-label bold font-size4">เพศ</p>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="basicSex" onChange={e => this.onCheckBasix(e)} id="inlineRadio1" value="male" />
                      <label className="form-check-label">ชาย</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="basicSex" onChange={e => this.onCheckBasix(e)} id="inlineRadio2" value="female" />
                      <label className="form-check-label">หญิง</label>
                    </div>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">อายุ</label>
                    <input type="number" className="form-control right2" id="exampleFormControlInput1" name="basicAge" onChange={e => this.onCheckBasix(e)} placeholder="ปี" />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4 between color1">เลือกหน่วย
                                            <span className="font-size7 light section">
                        <div className="onoffswitch">
                          <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox " id="myonoffswitch" onChange={e => this.checkBoxes(e)} defaultChecked={this.state.checked} />
                          <label className="onoffswitch-label" htmlFor="myonoffswitch">
                            <span className="onoffswitch-inner">
                              <div className="between">
                                <p className="text-float">ปอนด์/ฟ. <span className="text-float1"> กก./ซม.</span></p>
                              </div>
                            </span>
                            <span className="onoffswitch-switch"></span>
                          </label>
                        </div>
                      </span>
                    </label>
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4 between">น้ำหนัก</label>
                    <input type="email" className="form-control right2" id="exampleFormControlInput1" name="basicWeight" onChange={e => this.onCheckBasix(e)} placeholder={this.state.typeWeight} />
                  </div>
                  <div className="padding-top2">
                    <label className="form-label bold font-size4">ส่วนสูง </label>
                    <input type="email" className="form-control right2" id="exampleFormControlInput1" name="basicHeight" onChange={e => this.onCheckBasix(e)} placeholder={this.state.typeHeight} />
                  </div>
                  <div className="padding-top2">
                    <p className="bold font-size4 ">คุณแน่ใจว่าสามารถฝึกท่าฝึกยากๆ เช่นท่า Squat, ท่ากระโดด ได้อย่างถูกต้อง</p>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="practiceDifficultExercises" id="inlineRadio1" onChange={e => this.onCheckBasix(e)} value="sure" />
                      <label className="form-check-label">แน่ใจ</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="practiceDifficultExercises" id="inlineRadio2" onChange={e => this.onCheckBasix(e)} value="unsure" />
                      <label className="form-check-label">ไม่แน่ใจ</label>
                    </div>
                  </div>
                  {/* <div className="padding-top2">
                                        <p className="bold font-size4 ">คุณมีอาการบาดเจ็บที่ข้อต่อหรือกระดูกสันหลัง หรือไม่ </p>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="injury" id="inlineRadio1"  onChange={e => this.onCheckBasix(e)} value="ใช่" />
                                            <label className="form-check-label">ใช่</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="injury" id="inlineRadio2"  onChange={e => this.onCheckBasix(e)} value="ไม่ใช่" />
                                            <label className="form-check-label">ไม่ใช่</label>
                                        </div>
                                    </div> */}
                  {/* <div className="padding-top2">
                                        <p className="bold font-size4 ">กำลังตั้งครรภ์ หรือให้นมบุตรอยู่</p>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="arePregnant" id="inlineRadio1"  onChange={e => this.onCheckBasix(e)} value="ใช่" />
                                            <label className="form-check-label">ใช่</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="arePregnant" id="inlineRadio2"  onChange={e => this.onCheckBasix(e)} value="ไม่ใช่" />
                                            <label className="form-check-label">ไม่ใช่</label>
                                        </div>
                                    </div> */}
                </div>
              </div>
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 distance">
                <button className="btn bottom-pink" type="button" onClick={() => this.basicInFormation(basicSex, basicAge, typeHei_Wig, basicHeight, basicWeight, practiceDifficultExercises, injury, arePregnant)}  >
                  สร้างโปรแกรมออกกำลังกาย
                                </button>
                {/*    <Link to="/your_program" className="btn bottom-pink" type="button">สร้างโปรแกรมออกกำลังกาย</Link> */}
              </div>
            </div>
          </div>
        </div>

      </>

    );
  }
}

const mapStateToProps = ({ createUser, authUser }) => {
  const { user } = authUser;
  const { create_user_email } = createUser;
  return { create_user_email, user };
};

const mapActionsToProps = { basicInFormation, updateProfile };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Basic_Information);