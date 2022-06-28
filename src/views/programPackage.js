import React, { Component } from "react";
//import InformationCalculate from './information/information_calculate';
//import SelectPackage from './information/buy_program';
import { Link } from 'react-router-dom';
import ellipse_71 from "../assets/img/ellipse_71.png";
import lemonade from "../assets/img/lemonade.png";
import latte2 from "../assets/img/latte2.png";
import lfittocsachet5g from "../assets/img/lfittocsachet5g.png";
import shaker from "../assets/img/shaker.png";
import { connect } from "react-redux";
import { loginUser } from "../redux/auth";
import { selectProgram, getAllProgram } from "../redux/exerciseProgram";

class ProgramPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseActivated: true,
      weightLossGoals: null,
      durationWeightLoss: 0,
      checked: false,
      pound_kg: "กิโลกรัม",
    };
  }

  componentDidMount() {
    const { user_program_id, statusRegister } = this.props;

    this.props.getAllProgram()

    if (user_program_id) { //ถ้ามี user_program_id แสดงว่าชำระเงินสำเร็จแล้ว
      this.props.history.push('/welcome_new_nember');
    }

    if (statusRegister === "success") { //success แสดงว่าสร้าง email นี้ใน table member แล้ว
      this.props.history.push('/fitto_plant_protein');
    }
    window.scrollTo(0, 0);
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


    if (this.state.typeHei_Wig === 'ปอนด์') {
      var duration = Math.ceil((mu * (weightLossGoals * 0.45359237)) / 4); //สมมุติว่าทุกเดือนมี 4 week (อาจมีการเปลี่ยนแปลง) *0.45359237
    } else {
      var duration = Math.ceil((mu * weightLossGoals) / 4); //สมมุติว่าทุกเดือนมี 4 week (อาจมีการเปลี่ยนแปลง) *0.45359237
    }

    this.setState({
      durationWeightLoss: duration
    })
  }

  checkBoxes = (e) => {
    const { checked } = e.target
    if (checked === false) {
      var pound_kg = "กิโลกรัม"
    } else {
      var pound_kg = "ปอนด์"
    }
    this.setState({
      checked: checked,
      pound_kg: pound_kg,
    })
  }

  selectProgram(program_id) {

    this.props.selectProgram(program_id);
    this.props.history.push('/register');
  }

  renderInformationCalculate() {
    const { exerciseActivated, weightLossGoals, pound_kg } = this.state;
    return (
      <>
        <br />
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  ">
          <div className="center">
            <p className="register-to-join"> ลงทะเบียนเข้าร่วม Bebe Stayfit</p>
          </div>
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
                <div className="padding-top2 right-onoffswitch">
                  <label className="form-label bold font-size4   color1">เลือกหน่วย
                    <span className="font-size7 light section">
                      <div className="onoffswitch">
                        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox " id="myonoffswitch" onChange={e => this.checkBoxes(e)} defaultChecked={this.state.checked} />
                        <label className="onoffswitch-label" htmlFor="myonoffswitch">
                          <span className="onoffswitch-inner">
                            <div className="between">
                              <p className="text-float3">กิโลกรัม <span className="text-float4"> ปอนด์</span></p>
                            </div>
                          </span>
                          <span className="onoffswitch-switch"></span>
                        </label>
                      </div>
                    </span>
                  </label>
                </div>
                <div className="mb-3 ">
                  <label className="form-label font-size2 ">คุณต้องการลดน้ำหนักกี่กิโลกรัม</label>
                  <input
                    type="number"
                    className="form-control  right2"
                    id="weightLossGoals"
                    placeholder={pound_kg}
                    /*      value={weightLossGoals} */
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
    const { weightLossGoals, durationWeightLoss, pound_kg } = this.state;
    const { allProgram } = this.props;
    const priceStarter = allProgram && allProgram.filter(element => element.program_id === "starter_stay_fit_01");
    const priceSubscription = allProgram && allProgram.filter(element => element.program_id === "subscription_stay_fit_01");
    return (
      <>
        <br />

        <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground">
        <div className="center">
            <p className="register-to-join"> กรุณาเลือกแพ็คเกจที่คุณต้องการ</p>
          </div>
          <div className="container center ">
            <div className="box2">
              <div className="center  head-box grad1">
                <div className="head-width">
                  <p className="text-headWidth">คุณจะสามารถลดน้ำหนัก {weightLossGoals} {pound_kg}  <span className="bold text-headWidth1">ภายใน {durationWeightLoss} เดือน</span></p>
                </div>
              </div>
              <div className="row center">
                <div className="col-10 col-sm-10 col-md-4 col-lg-4 margin-boxLeft">
                  <div className="box-starter_set text-center">
                    <p className="bold font-size5 down-top bold">เซตเริ่มต้นสายฟิต</p>
                    <p className="border-bottom4"></p>
                    <p className="font-size5  box-price">  ราคา <span className="font-size6 color-price bold">{priceStarter[0].price.toLocaleString('en')}</span> บาท</p>
                    <p className="no-renewal">*ระยะเวลา 2 เดือน และไม่มีการต่ออายุ</p>
                    <p className="border-bottom4 margin-leftRight"></p>
                    <div className="text-left bottom-padding">
                      <li> โปรแกรมออกกำลังกาย</li>
                      <li>คำแนะนำการควบคุมอาหาร</li>
                      <li>คำแนะนำการทานอาหารเสริม</li>
                      <li>Fitto Plant Protein 6 กล่อง  <br /><span className="margin-leftRight">(เลือกรสชาติได้)</span></li>
                    </div>
                    <div className="d-grid gap-2 col-8 ol-sm-8  mx-auto   col-md-8 col-lg-8 distance ">
                      <button className="btn bottom-outlinePink magTop" type="button" onClick={() => this.selectProgram("starter_stay_fit_01")}>
                        เลือกแพ็คเกจนี้
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-10 col-sm-10 col-md-6 col-lg-6 center margin-head">
                  <div className=" box-starter_set2 text-center">
                    <div className="margin-head  box-starter_set1">
                      <div className="box-black">
                        <p className="save-more bold">ประหยัดกว่า</p>
                        <p className="bold save-more2 center">สมัครตามระยะเวลาของโปรแกรม</p>
                      </div>
                      <div className="scroll">
                        <div>
                          <p className="font-size5   margin-headText">  ราคา <span className="font-size6 color-price bold">{priceSubscription[0].price.toLocaleString('en')}</span> /  2เดือน</p>
                        </div>
                        <p className="special-price">
                        *ราคาพิเศษสำหรับ 2 เดือนแรก เมื่อครบกำหนดจะชำระต่อเป็นรายเดือน
                        (เดือนละ 1,800 บาท) จนกว่าจะครบตามระยะที่โปรแกรมแนะนำ
                        **สามารถพักการชำระรายเดือนได้ทุกเวลาตามที่ต้องการ
                        </p>
                        <p className="border-bottom4 margin-leftRight top-border"></p>
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
                        <div className="font-size4 text-left margin-BoxTop">
                          <div className="box-heightPackage"> <img src={shaker} alt="vector" className="shaker-71" /> <p className="span-image">Shaker 1 ชิ้น <br /> <p className="distance-span1">(เฉพาะสั่งซื้อครั้งแรก)</p></p></div>
                          <div className="box-heightPackage1"> <img src={lemonade} alt="vector" className="ellipse-71" /> <p className="span-image1">Fitto Pre Workout <p className="distance-span">รส Green Lemonade จำนวน 1 ซอง</p></p></div>
                          <div className="box-heightPackage1"> <img src={latte2} alt="vector" className="ellipse-71" /> <p className="span-image1">Fitto Drink <p className="distance-span1">รส Arabica Latte จำนวน 1 ซอง</p></p></div>
                          <div className="box-heightPackage2"> <img src={lfittocsachet5g} alt="vector" className="ellipse-72" /> <p className="span-image2">Fitto Colla C Unflavored <br /> <p className="distance-span1">จำนวน 1 ซอง</p></p></div>
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
  const { user, status, statusRegister } = authUser;
  const { program, allProgram, user_program_id } = exerciseProgram;
  return { user, status, statusRegister, program, allProgram, user_program_id };
};

const mapActionsToProps = { loginUser, selectProgram, getAllProgram };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProgramPackage);
