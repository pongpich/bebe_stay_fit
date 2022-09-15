import React, { Component } from 'react';
import rectangle472 from "../../assets/img/rectangle472.png";

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
            start_cancel: "price_reason"
        };
    }

    /*   componentDidUpdate(prevProps, prevState) {
          const {reason_choose} = this.state;
          if (prevState.reason_choose !== reason_choose) {
              this.setState({
                  reason_choose: "777"
              })
          }
      } */
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

        if (reason_choose === "เหตุผลด้านราคา") {
            this.setState({
                start_cancel: "price_reason"
            })
        } else {
            this.setState({
                start_cancel: "succeed"
            })
        }
    }

    choose_reason() {
        const { reason_choose, no_reason_choose } = this.state;
        return (
            <>
                <div className="padding-top4 center">
                    <p className="font-size8 bold color-protein">ยกเลิกบริการ Bebe Stay Fit</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top2 text-left2 margin-leftRight">
                                <p className="font-size6 bold">แพ็กเกจของคุณ </p>
                                <p className="font-size5 margin-top-1 bold between">ตามระยะเวลาของโปรแกรม <span className="color1 bold font-size5">3,750 บาท / 2 เดือน</span></p>
                            </div>
                            <p>*หากยกเลิกตอนนี้ระบบจะทำการหยุดเรียกเก็บเงินอัตโนมัติ</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2">
                        <div className="box-protein margin-bottom1 padding-top2">
                            <div className="padding-top2 text-left2 margin-leftRight">
                                <p className="font-size6 bold">โปรดบอกเหตุผลในการยกเลิก เพื่อที่เราจะได้พัฒนาสินค้าและบริการให้ดียิ่งขึ้น </p>
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

    successfully() {
        return (
            <>
                <div className="centerx-y">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <div className="box-reason">
                            <div class="">
                                <div class="row justify-content-md-center">
                                    <div class="col-12 col-sm-12 col-md-5 col-lg-5">
                                        <img src={rectangle472} alt="vector" className="rectangle472" />
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                                        <div className="box-reason2">
                                            <p className="font-reason">ยกเลิกบริการ Bebe Stay Fit สำเร็จ</p>
                                            <p className="font-reason2">ออกกำลังกายและคุมอาหารอย่างสม่ำเสมอ <br /> เพื่อหุ่นและสุขภาพที่ดีอย่างยั่งยืนกันนะคะ</p>
                                            <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10">
                                                <button className="btn bottom-pink bold-reason" type="button" onClick={() => this.props.history.push('/profile')}>
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
                                    <img src={rectangle472} alt="vector" className="rectangle472 center2" />
                                </div>
                                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                                    <div className="box-reason2">
                                        <p className="font-reason">สมัครต่ออายุบริการวันนี้ ลดทันที 5%</p>
                                        <p className="font-reason2">โปรโมชั่นพิเศษเฉพาะคุณ! <br />สมัครต่ออายุบริการวันนี้ ลดทันที 5%</p>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="center reason-top">
                                                <button type="button" className="btn bottom-reasonLeft bold-reason" data-bs-toggle="modal" data-bs-target="#exampleModal" >รับข้อเสนอ</button>
                                                <button type="button" className="btn bottom-reasonRight bold-reason " onClick={() => this.props.history.push('/profile')}>ยกเลิกบริการ</button>
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
                                        <p className="font-reason2">โดยแจ้งเจ้าหน้าที่ว่า <br />“ขอรับบริการเฉพาะโปรแกรมออกกำลังกาย”</p>
                                       <div className="center2">
                                        <p className="font-reason2 pad_lR">Line : <span className="pad_R">xxxxxxx</span></p>
                                        <p className="font-reason2 pad_lR">Facebook : <span  className="pad_R">xxxxxxxx</span></p>
                                        <p className="font-reason2 pad_lR">โทร : <span  className="pad_R">028216146</span></p>
                                       </div>
                                    </div>
                                </div>
                                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 margin-top-2 ">
                                <button className="btn bottom-pink" type="button"  data-bs-dismiss="modal" aria-label="Close" >
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


    render() {
        const { start_cancel } = this.state;
        return (
            <>
                {
                    start_cancel === "choose_reason" ?
                        this.choose_reason()
                        :
                        start_cancel === "succeed" ?
                            this.successfully()
                            :
                            start_cancel === "price_reason" ?
                                this.price_reason()
                                :
                                this.choose_reason()

                }
            </>
        )
    }
}
export default Cancel_package_new;