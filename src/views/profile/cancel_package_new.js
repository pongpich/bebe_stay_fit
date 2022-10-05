import React, { Component } from 'react';
import rectangle465 from "../../assets/img/rectangle465.png";
import rectangle466 from "../../assets/img/rectangle466.png";
import rectangle467 from "../../assets/img/rectangle467.png";
import rectangle468 from "../../assets/img/rectangle468.png";
import rectangle469 from "../../assets/img/rectangle469.png";
import rectangle470 from "../../assets/img/rectangle470.png";
import rectangle471 from "../../assets/img/rectangle471.png";
import rectangle472 from "../../assets/img/rectangle472.png";
import rectangle473 from "../../assets/img/rectangle473.png";
import { connect } from "react-redux";
import { cancelRecurring } from "../../redux/auth";

const reason = ["โปรดเลือกเหตุผล", "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว", "เหตุผลด้านราคา", "ไม่ค่อยได้ใช้บริการนี้", "ไม่พอใจกับโปรแกรมออกกำลังกาย",
  "ไม่พอใจกับผลิตภัณฑ์", "ไม่พอใจกับผลลัพธ์ที่ได้", "เจอโปรแกรมที่ดีกว่า", "เจอผลิตภัณฑ์ที่ดีกว่า"
]

class Cancel_package_new extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reason_choose: null,
      no_reason_choose: false,
      program: null,
      product: null,
      start_cancel: "price_reason"/* "choose_reason" */
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { statusCancelRecurring, user } = this.props;
    const {reason_choose} = this.state;

    if ((prevProps.statusCancelRecurring !== statusCancelRecurring) && (statusCancelRecurring === 'success')) {
      if (reason_choose == "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว") {
        this.setState({
          start_cancel: "target_shape"
        })
      }else if(reason_choose == "ไม่ค่อยได้ใช้บริการนี้") {
        this.setState({
          start_cancel: "rarely_service"
        })
      }else if(reason_choose == "ไม่พอใจกับโปรแกรมออกกำลังกาย") {
        this.setState({
          start_cancel: "dissatisfied_program"
        })
      }else{
        this.setState({
          start_cancel: "successfully"
        })
      }
    }
    console.log("reason_choose",reason_choose);
    //เพิ่มมาสำหรับ akkewach.yodsomboon@gmail.com ใช้ Demo
    if ((prevProps.statusCancelRecurring !== statusCancelRecurring) && (statusCancelRecurring === 'fail')) {
      if (user && (user.email === "akkewach.yodsomboon@gmail.com")) {

        if (reason_choose == "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว") {
          this.setState({
            start_cancel: "target_shape"
          })
        }else if(reason_choose == "ไม่ค่อยได้ใช้บริการนี้") {
          this.setState({
            start_cancel: "rarely_service"
          })
        }else if(reason_choose == "ไม่พอใจกับโปรแกรมออกกำลังกาย") {
          this.setState({
            start_cancel: "dissatisfied_program"
          })
        }else{
          this.setState({
            start_cancel: "successfully"
          })
        }

      }
    }
  }

  click_reason(event) {
    let name = event.target.value;
    this.setState({
      reason_choose: name
    })
    /* console.log("event",event); */
  }
  comment(event) {
    let name = event.target.name;
    let val = event.target.value;
    console.log("comm", val, name);
  }
  confirm() {
    const { reason_choose } = this.state;
    if (reason_choose === "โปรดเลือกเหตุผล" || reason_choose === null) {
      this.setState({
        no_reason_choose: true
      })
    }
    if (reason_choose === "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว") {
      if (this.props.user) {
        this.props.cancelRecurring(this.props.user.user_id);
      }
    }else if (reason_choose === "เหตุผลด้านราคา") {
      this.setState({
        start_cancel: "price_reason"
      })
    }else if (reason_choose === "ไม่ค่อยได้ใช้บริการนี้") {
      if (this.props.user) {
        this.props.cancelRecurring(this.props.user.user_id);
      }
    }else if (reason_choose === "ไม่พอใจกับโปรแกรมออกกำลังกาย") {
      if (this.props.user) {
        this.props.cancelRecurring(this.props.user.user_id);

      }
    }else if (reason_choose === "ไม่พอใจกับผลิตภัณฑ์") {
      this.setState({
        start_cancel: "not_satisfied_product"
      })
    }else if (reason_choose === "ไม่พอใจกับผลลัพธ์ที่ได้") {
      this.setState({
        start_cancel: "dissatisfied_results"
      })
    }else if (reason_choose === "เจอโปรแกรมที่ดีกว่า") {
      this.setState({
        start_cancel: "better_program"
      })
    }else if (reason_choose === "เจอผลิตภัณฑ์ที่ดีกว่า") {
      this.setState({
        start_cancel: "better_product"
      })
    }
    
    
    /*  ["โปรดเลือกเหตุผล", "ได้น้ำหนักหรือรูปร่างตามเป้าหมายแล้ว", "เหตุผลด้านราคา",
    "ไม่ค่อยได้ใช้บริการนี้", "ไม่พอใจกับโปรแกรมออกกำลังกาย",
  "ไม่พอใจกับผลิตภัณฑ์", "ไม่พอใจกับผลลัพธ์ที่ได้", "เจอโปรแกรมที่ดีกว่า",
   "เจอผลิตภัณฑ์ที่ดีกว่า"
] */
    /* else {
      if (this.props.user) {
        this.props.cancelRecurring(this.props.user.user_id);
      }
      this.setState({
        start_cancel: "succeed"
      })
    } */
  }

  choose_reason() {
    const { reason_choose, no_reason_choose } = this.state;
    return (
      <>
        <div className="padding-top4 ">
          <p className="font-size8 bold color-protein text-center">ยกเลิกบริการ <br className="line-hr"/> Bebe Stay Fit</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="padding-top2 text-left2 margin-leftRight">
                <p className="font-size6 bold">แพ็กเกจของคุณ </p>
                <p className="font-size5 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size5">1,800 บาท / เดือน</span></p>
              </div>
              <p>*หากยกเลิกตอนนี้ระบบจะทำการหยุดเรียกเก็บเงินอัตโนมัติ</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
            <div className="box-protein margin-bottom1 padding-top2">
              <div className="padding-top2 text-left2 margin-leftRight">
                <p className="font-size6 bold">โปรดบอกเหตุผลในการยกเลิก  เพื่อที่เราจะได้พัฒนาสินค้าและบริการให้ดียิ่งขึ้น </p>
                <select className="form-select" name="select-reason" onChange={(e) => this.click_reason(e)} aria-label="Default select example">
                  {reason.map((index, i) => (
                    <option key={i} value={index}>{index}</option>
                  )
                  )}
                </select>
                {
                  /* console.log("e",reason_choose) */
                  no_reason_choose === true ?
                    <p className="no_reason">กรุณาเลือกเหตุผล</p>
                    : null
                }
                {
                  reason_choose === "เจอโปรแกรมที่ดีกว่า" ?
                    <div className="mb-3">
                      <br />
                      <textarea class="form-control" id="exampleFormControlTextarea1" onChange={(e) => this.comment(e)} name="program" rows="2" placeholder="โปรดบอกชื่อโปรแกรม..."></textarea>
                    </div>
                    : null
                }
                {
                  reason_choose === "เจอผลิตภัณฑ์ที่ดีกว่า" ?
                    <div className="mb-3">
                      <br />
                      <textarea class="form-control" id="exampleFormControlTextarea2" onChange={(e) => this.comment(e)} name="product" rows="2" placeholder="โปรดบอกชื่อผลิตภัณฑ์..."></textarea>
                    </div>
                    : null
                }
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-4 margin-top-2 ">
          <button className="btn bottom-pink" id="reason" type="button" onClick={(e) => this.confirm()} >
            ยืนยัน
                    </button>
        </div>
      </>
    )
  }

  target_shape() {
    return(
      <>
      <div className="centerx-y">
        <div className="col-12 col-sm-10 col-md-12 col-lg-9">
          <div className="box-reason">
            <div class="">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                  <img src={rectangle471} alt="vector" className="rectangle472" />
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                  <div className="box-reason2">
                    <p className="font-reason">ยกเลิกบริการ Bebe Stay Fit สำเร็จ</p>
                    <p className="font-reason2">ออกกำลังกายและคุมอาหารอย่างสม่ำเสมอ <br className="br" /> เพื่อหุ่นและสุขภาพที่ดีอย่างยั่งยืนกันนะคะ</p>
                    <div className="d-grid gap-2  mx-auto margin-top-4   col-10 col-sm-10  col-md-8 col-lg-8">
                      <button className="btn bottom-pink2 bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
                        กลับหน้าโปรไฟล์
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

  


  price_reason() {
    return (
      <>
        <div className="centerx-y">
          <div className="col-12 col-sm-8 col-md-10 col-lg-8">
            <div className="box-reason">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                  <img src={rectangle473} alt="vector" className="rectangle472 center2" />
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="box-reason2">
                    <p className="font-reason">สมัครต่ออายุบริการวันนี้ <br className="line-hr"/> ลดทันที 5%</p>
                    <p className="font-reason2">โปรโมชั่นพิเศษเฉพาะคุณ! </p>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="center reason-top">
                        <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" >รับข้อเสนอ</button>
                        <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}>ยกเลิกบริการ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-bodyChallenge">
                  <div className="text-center">
                    <p className="font-reason">ติดต่อเจ้าหน้าที่</p>
                    <p className="font-reason2">เพื่อรับส่วนลด 5%  <br />สำหรับการต่ออายุคอร์ส Bebe Stay Fit</p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto (มีแอด)</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                    <p className="font-reason2 pad_lR">โทร : <span className="pad_R">028216146</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                  </div>
                </div>
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                  <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                    ปิด
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  rarely_service() {
    return(
      <>
      <div className="centerx-y">
        <div className="col-12 col-sm-10 col-md-12 col-lg-9">
          <div className="box-reason">
            <div class="">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                  <img src={rectangle470} alt="vector" className="rectangle472" />
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                  <div className="box-reason2">
                    <p className="font-reason">ยกเลิกบริการ Bebe Stay Fit สำเร็จ</p>
                    <p className="font-reason2">หุ่นในฝัน เป็นจริงได้ แค่ออกกำลังกาย  <br className="br" />สัปดาห์ละ 4 วัน เบเบ้เป็นกำลังใจให้นะคะ</p>
                    <div className="d-grid gap-2  mx-auto  margin-top-4  col-10 col-sm-10  col-md-8 col-lg-8">
                      <button className="btn bottom-pink2 bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
                        กลับหน้าโปรไฟล์
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
    
  dissatisfied_program() {
    return (
      <>
        <div className="centerx-y">
          <div className="col-12 col-sm-10 col-md-12 col-lg-9">
            <div className="box-reason">
              <div class="">
                <div class="row justify-content-md-center">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                    <img src={rectangle472} alt="vector" className="rectangle472" />
                  </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                    <div className="box-reason2">
                      <p className="font-reason">ยกเลิกบริการ Bebe Stay Fit สำเร็จ</p>
                      <p className="font-reason2">หุ่นในฝันไม่ไกลเกินเอื้อม คุณทำได้</p>
                      <p className="font-reason3">โปรแกรมของเราอาจจะเหนื่อย และยากในช่วงแรก<br />
                                                แต่อย่าเพิ่งท้อนะคะ เพราะคุณจะแข็งแรง <br />
                                                และทำได้ดีขึ้นอย่างแน่นอน หุ่นในฝันไม่ไกลเกินเอื้อม <br /> เบเบ้เป็นกำลังใจให้ค่ะ :)</p>
                      <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10">
                        <button className="btn bottom-pink2 bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
                          กลับหน้าโปรไฟล์
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
    )}

    not_satisfied_product () {
      return(
        <>
        <div className="centerx-y">
          <div className="col-12 col-sm-8 col-md-10 col-lg-8">
            <div className="box-reason">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                  <img src={rectangle469} alt="vector" className="rectangle472 center2" />
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="box-reason3">
                    <p className="font-reason">ติดต่อเจ้าหน้าที่เพื่อขอรับบริการ<br className="br" />
                        เฉพาะโปรแกรมออกกำลังกายได้นะคะ</p>
                    <p className="font-reason2">ถ้าคุณยังสนุกกับการออกกำลังกายแต่ไม่อยากใช้<br className="br" />
                        ผลิตภัณฑ์ของเราสามารถติดต่อเจ้าหน้าที่เพื่อขอรับ<br className="br" />
                        บริการเฉพาะโปรแกรมออกกำลังกายได้นะคะ </p>
                        <br/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="center ">
                        <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" >ติดต่อเจ้าหน้าที่</button>
                        <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}>ยกเลิกบริการ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-bodyChallenge">
                  <div className="text-center">
                    <p className="font-reason">ติดต่อเจ้าหน้าที่</p>
                    <p className="font-reason2">เพื่อรับส่วนลด 5%  <br />สำหรับการต่ออายุคอร์ส Bebe Stay Fit</p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto (มีแอด)</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                    <p className="font-reason2 pad_lR">โทร : <span className="pad_R">028216146</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                  </div>
                </div>
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                  <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                    ปิด
                                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    }
    
    dissatisfied_results() {
      return(
        <>
        <div className="centerx-y">
          <div className="col-12 col-sm-8 col-md-10 col-lg-8">
            <div className="box-reason">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                  <img src={rectangle468} alt="vector" className="rectangle472 center2" />
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="box-reason3">
                    <p className="font-reason">ปรึกษาผู้เชี่ยวชาญ<br className="br" />
                      เพื่อออกแบบโปรแกรมพิเศษเฉพาะคุณ</p>
                    <p className="font-reason2">ถ้าคุณยังไม่พอใจกับผลลัพธ์ที่ได้แต่อย่าเพิ่งถอดใจ<br className="br" />
                      นะคะ เพราะการลดน้ำหนักอย่างยั่งยืนนั้นต้องใช้เวลา<br className="br" />
                      ซึ่งคุณจะทำได้อย่างแน่นอน เบเบ้เป็นกำลังใจให้ค่ะ </p>
                        <br/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="center ">
                        <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" >ติดต่อเจ้าหน้าที่</button>
                        <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}>ยกเลิกบริการ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-bodyChallenge">
                  <div className="text-center">
                    <p className="font-reason">ติดต่อเจ้าหน้าที่</p>
                    <p className="font-reason2">เพื่อรับส่วนลด 5%  <br />สำหรับการต่ออายุคอร์ส Bebe Stay Fit</p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto (มีแอด)</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                    <p className="font-reason2 pad_lR">โทร : <span className="pad_R">028216146</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                  </div>
                </div>
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                  <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                    ปิด
                                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    }

    better_program() {
      return(
        <>
        <div className="centerx-y">
          <div className="col-12 col-sm-8 col-md-10 col-lg-8">
            <div className="box-reason">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                  <img src={rectangle467} alt="vector" className="rectangle472 center2" />
                </div>
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  <div className="box-reason3">
                    <p className="font-reason">ปรึกษาผู้เชี่ยวชาญ<br className="br" />
                      เพื่อออกแบบโปรแกรมพิเศษเฉพาะคุณ</p>
                    <p className="font-reason2">ถ้าคุณยังสนุกกับการออกกำลังกายแต่ไม่อยากใช้<br className="br" />
                    ผลิตภัณฑ์ของเราติดต่อเจ้าหน้าที่เพื่อขอรับบริการ<br className="br" />
                    เฉพาะโปรแกรมออกกำลังกายได้นะคะ </p>
                        <br/>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="center ">
                        <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" >ติดต่อเจ้าหน้าที่</button>
                        <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}>ยกเลิกบริการ</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-bodyChallenge">
                  <div className="text-center">
                    <p className="font-reason">ติดต่อเจ้าหน้าที่</p>
                    <p className="font-reason2">เพื่อรับส่วนลด 5%  <br />สำหรับการต่ออายุคอร์ส Bebe Stay Fit</p>
                    <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto (มีแอด)</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                    <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                    <p className="font-reason2 pad_lR">โทร : <span className="pad_R">028216146</span></p>
                    <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                  </div>
                </div>
                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                  <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                    ปิด
                                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )
    }



    better_product() {
      return(
        <>
        <div className="centerx-y">
        <div className="col-12 col-sm-8 col-md-10 col-lg-8">
          <div className="box-reason">
            <div class="row justify-content-md-center">
              <div class="col-12 col-sm-12 col-md-5 col-lg-5 ">
                <img src={rectangle466} alt="vector" className="rectangle472 center2" />
              </div>
              <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                <div className="box-reason3">
                  <p className="font-reason">ติดต่อเจ้าหน้าที่เพื่อขอรับบริการ<br className="br" />
                    เฉพาะโปรแกรมออกกำลังกายได้นะคะ</p>
                  <p className="font-reason2">ถ้าคุณชื่นชอบผลิตภัณฑ์ของเราแต่ไม่สะดวกที่จะ<br className="br" />
                    ออกกำลังกายกรุณาติดต่อเจ้าหน้าที่เพื่อรับคำแนะนำ<br className="br" />
                    พิเศษได้นะคะ</p>
                      <br/>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="center ">
                      <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" >ติดต่อเจ้าหน้าที่</button>
                      <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.cancelRecurring(this.props.user && this.props.user.user_id)}>ยกเลิกบริการ</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-bodyChallenge">
                <div className="text-center">
                  <p className="font-reason">ติดต่อเจ้าหน้าที่</p>
                  <p className="font-reason2">เพื่อรับส่วนลด 5%  <br />สำหรับการต่ออายุคอร์ส Bebe Stay Fit</p>
                  <p className="font-reason2 pad_lR">Line :<span className="pad_R">@fitto (มีแอด)</span></p>
                  <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                  <p className="font-reason2 pad_lR">Facebook : <span className="pad_R">m.me/fittothai</span></p>
                  <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                  <p className="font-reason2 pad_lR">โทร : <span className="pad_R">028216146</span></p>
                  <p className="time-open">ทุกวัน 8:00 - 00:00</p>
                </div>
              </div>
              <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-8 col-lg-8 margin-top-2 ">
                <button className="btn bottom-pink" type="button" data-bs-dismiss="modal" aria-label="Close" >
                  ปิด
                                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
      )
    }

    successfully() {
      return(
        <>
        <div className="centerx-y">
        <div className="col-12 col-sm-10 col-md-12 col-lg-9">
          <div className="box-reason">
            <div class="">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-6 col-lg-5">
                  <img src={rectangle465} alt="vector" className="rectangle472" />
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-7">
                  <div className="box-reason2">
                    <p className="font-reason">ยกเลิกบริการ Bebe Stay Fit สำเร็จ</p>
                    <p className="font-reason2">ขอบคุณที่ใช้บริการของเรา<br className="br" />
                      Bebe Stay Fit ขอเป็นกำลังใจในการดูแลสุขภาพ<br className="br" />
                      และฟิตหุ่นตามเป้าหมายของคุณนะคะ
                      </p>
                    <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10">
                      <button className="btn bottom-pink2 bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
                        กลับหน้าโปรไฟล์
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
    const { start_cancel } = this.state;
    return (
      <>
        {
          start_cancel === "choose_reason" ?
            this.choose_reason()
            :
            start_cancel === "dissatisfied_program" ?
              this.dissatisfied_program()
              :
              start_cancel === "price_reason" ?
                this.price_reason()
                :
                start_cancel === "target_shape" ?
                  this.target_shape() 
                  : 
                  start_cancel === "rarely_service" ?
                    this.rarely_service() 
                    : 
                    start_cancel === "not_satisfied_product" ?
                      this.not_satisfied_product() 
                      : 
                      start_cancel === "dissatisfied_results" ?
                        this.dissatisfied_results() 
                        : 
                        start_cancel === "better_program" ?
                          this.better_program() 
                          : 
                          start_cancel === "better_product" ?
                            this.better_product() 
                            : 
                            start_cancel === "successfully" ?
                              this.successfully() 
                              : this.choose_reason()

        }
      </>
    )
  }
}

const mapStateToProps = ({ get, authUser }) => {
  const { register_log } = get;
  const { user, statusCancelRecurring } = authUser;
  return { user, register_log, statusCancelRecurring };
};

const mapActionsToProps = { cancelRecurring };


export default connect(
  mapStateToProps,
  mapActionsToProps
)(Cancel_package_new);