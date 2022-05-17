import React, { Component } from "react";
//import InformationCalculate from './information/information_calculate';
//import SelectPackage from './information/buy_program';
import { Link } from 'react-router-dom';
import ellipse_71 from "../assets/img/ellipse_71.png";
import { connect } from "react-redux";
import { loginUser } from "../redux/auth";
import { selectProgram, getAllProgram } from "../redux/exerciseProgram";

class ProgramPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseActivated: true,
      weightLossGoals: null,
      durationWeightLoss: 0
    };
  }

  componentDidMount() {
    this.props.getAllProgram()
  }

  exerciseActivatedCheck(event) {
    console.log(event.target.value);
    if (event.target.value === "exercise") {
      this.setState({
        exerciseActivated: true
      })
    } else {
      this.setState({
        exerciseActivated: false
      })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  calculateDuration(exerciseActivated, weightLossGoals) {
    console.log("exerciseActivated :", exerciseActivated);
    console.log("weightLossGoals :", weightLossGoals);
    var mu;
    if (exerciseActivated) {
      mu = 2;
    } else {
      mu = 2.8;
    }
    const duration = Math.ceil((mu * weightLossGoals) / 4); //สมมุติว่าทุกเดือนมี 4 week (อาจมีการเปลี่ยนแปลง)
    this.setState({
      durationWeightLoss: duration
    })
  }

  selectProgram(program_id) {
    this.props.selectProgram(program_id);
    this.props.history.push('/register');
  }

  renderInformationCalculate() {
    const { exerciseActivated, weightLossGoals } = this.state;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  padding-top2 information-box ">
          <div className="container">
            <div className="row row-cols-2">
              <h4 className="color1">BEBEStayFit</h4>
              <h6 className="right">ลงทะเบียน</h6>
            </div>
          </div>
        </div>
        <br />
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  ">
          <div className="container">
            <div className="row center  ">
              <div className="box1">
                <p className="font-size1">กรอกข้อมูลเพื่อคำนวณระยะเวลา ที่ใช้ในการลดน้ำหนัก</p>
                <p className="style-th2"></p>
                <p className="font-size3">วิธีการลดน้ำหนัก</p>
                <p className="font-size2">คุณสะดวก หรือต้องการลดน้ำหนักด้วยวิธีใด</p>
                <div className="form-check font-size4" onChange={(event) => this.exerciseActivatedCheck(event)}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked={exerciseActivated}
                    value="exercise"
                  />
                  <label className="form-check-label">
                  คุมอาหาร และ ออกกำลังกาย
                                    </label>
                </div>
                <div className="form-check font-size4" onChange={(event) => this.exerciseActivatedCheck(event)}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked={!exerciseActivated}
                    value="not_exercise"
                  />
                  <label className="form-check-label">
                    คุมอาหารอย่างเดียว
                                    </label>
                </div>
                <br />
                <div className="mb-3 ">
                  <label className="form-label font-size2 ">คุณต้องการลดน้ำหนักกี่กิโลกรัม</label>
                  <input
                    type="number"
                    className="form-control right"
                    id="weightLossGoals"
                    placeholder="กิโลกรัม"
                    value={weightLossGoals}
                    onChange={(event) => this.handleChange(event)}
                  />
                </div>
                <div className="d-grid gap-2 col-12 ol-sm-12  mx-auto   col-md-12 col-lg-12 distance ">
                  <button className="btn bottom-pink" type="button" onClick={() => this.calculateDuration(exerciseActivated, weightLossGoals)}>ถัดไป</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  renderSelectPackage() {
    const { weightLossGoals, durationWeightLoss } = this.state;
    const { allProgram } = this.props;
    const priceStarter = allProgram && allProgram.filter(element => element.program_id === "starter_stay_fit_01");
    const priceSubscription = allProgram && allProgram.filter(element => element.program_id === "subscription_stay_fit_01");
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  padding-top2 information-box ">
          <div className="container">
            <div className="row row-cols-2">
              <h4 className="color1">BEBEStayFit</h4>
              <h6 className="right">ลงทะเบียน</h6>
            </div>
          </div>
        </div>
        <br />
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground">
          <div className="container center ">
            <div className="box2">
              <div className="center  head-box">
                <div className="head-width font-size5">
                  <p>คุณจะสามารถลดน้ำหนัก {weightLossGoals} กิโลกรัม  <span className="bold">ภายใน{durationWeightLoss}เดือน</span></p>
                </div>
              </div>
              <div className="row center">
                <div className="col-10 col-sm-10 col-md-5 col-lg-5 margin-boxLeft">
                  <div className="box-starter_set text-center">
                    <p className="bold font-size5 down-top bold">เซตเริ่มต้นสายฟิต</p>
                    <p className="border-bottom"></p>
                    <p className="font-size5  box-price">  ราคา <span className="font-size6 color-price bold">{priceStarter[0].price.toLocaleString('en')}</span> บาท</p>
                    <p className="border-bottom margin-leftRight"></p>
                    <div className="text-left bottom-padding">
                      <li> โปรแกรมออกกำลังกาย</li>
                      <li>คำแนะนำการควบคุมอาหาร</li>
                      <li>คำแนะนำการทานอาหารเสริม</li>
                      <li>Fitto Plant Protein 6 กล่อง  <br /><span className="margin-leftRight">(เลือกรสชาติได้)</span></li>
                    </div>
                    <div className="d-grid gap-2 col-8 ol-sm-8  mx-auto   col-md-8 col-lg-8 distance ">
                      <button className="btn bottom-pink" type="button" onClick={() => this.selectProgram("starter_stay_fit_01")}>
                        เลือกแพ็คเกจนี้
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-10 col-sm-10 col-md-5 col-lg-5 center margin-head">
                  <div className=" box-starter_set2 text-center">
                    <div className="linear">
                      <p className="bold font-size6 down-top bold ">ประหยัดกว่า</p>
                    </div>
                    <div className="margin-head  box-starter_set1">
                      <div className="box-black">
                        <p className="bold font-size5 center padding-top">สมัครตามระยะเวลาของโปรแกรม</p>
                      </div>
                      <div className="scroll">
                        <div>
                          <p className="font-size5   margin-headText">  ราคา <span className="font-size6 color-price bold">{priceSubscription[0].price.toLocaleString('en')}</span> /  2เดือน</p>
                        </div>
                        <div className="font-size4">
                          <li> เราจะทำการเรียกเก็บเงินทุกๆ 2 เดือน</li>
                          <li> ยกเลิกเมื่อไรก็ได้</li>
                        </div>
                        <p className="border-bottom margin-leftRight top-border"></p>
                        <div className="font-size5 text-left">
                          <li> โปรแกรมออกกำลังกาย</li>
                          <li> คำแนะนำการควบคุมอาหาร</li>
                          <li> คำแนะนำการทานอาหารเสริม</li>
                          <li> Fitto Plant Protein 6 กล่อง  <br /><span className="bold span-image">ทุก 2 เดือน</span>  &nbsp;(เลือกรสชาติได้)</li>
                        </div>
                        <br />
                        <div>
                          <p className="font-size5 bold">
                            ฟรีของแถม
                                                    </p>
                        </div>
                        <div className="font-size4 text-left">
                          <p> <img src={ellipse_71} alt="vector" className="ellipse-71" /> <span className="span-image">Shaker 1 ชิ้น <br /> <span className="distance-span">(เฉพาะสั่งซื้อครั้งแรก)</span></span></p>
                          <p> <img src={ellipse_71} alt="vector" className="ellipse-71" /> <span className="span-image">Cocoa </span></p>
                        </div>
                        {/*  <div className="example3"></div> */}
                      </div>
                      <div className="d-grid gap-2 col-8 ol-sm-8  mx-auto   col-md-8 col-lg-8 distance">
                        <button className="btn bottom-pink" type="button" onClick={() => this.selectProgram("subscription_stay_fit_01")} >
                          เลือกแพ็คเกจนี้
                        </button>
                      </div>
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
    const { durationWeightLoss } = this.state;
    return (
      (durationWeightLoss > 0) ?
        this.renderSelectPackage()
        :
        this.renderInformationCalculate()
    )
  }
}

const mapStateToProps = ({ authUser, exerciseProgram }) => {
  const { user, status } = authUser;
  const { program, allProgram } = exerciseProgram;
  return { user, status, program, allProgram };
};

const mapActionsToProps = { loginUser, selectProgram, getAllProgram };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProgramPackage);
