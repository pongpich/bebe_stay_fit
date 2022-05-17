import React, { Component } from "react";
import group19 from "../../assets/img/group19.png";
import { Link } from 'react-router-dom';

class Fitto_Plant_Protein extends React.Component {
    render() {
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
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 App-headerBackground center2 padding-top2 ">
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10 center2">
                        <img src={group19} alt="vector" className="group19" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 center2 margin-head">
                        <div className="box-protein">
                            <div className="padding-top">
                                <p className="font-size6 bold color-protein"> เลือกรสชาติ Fitto Plant Protein </p>
                                <p className="font-size4">หากคุณสมัครแบบ<span className="bold">ตามระยะเวลาของโปรแกรม</span>< br />จะสามารถเปลี่ยนแปลงรสชาติภายหลังได้</p>
                                <div className="box-proteinIn padding-top">
                                    <div className="center">
                                        <p className="font-size5 bold">เลือกรสชาติของ Fitto Plant Protein</p>
                                    </div>
                                    <div>
                                        <label className="form-label bold font-size4">กล่องที่ 1</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>Classic malt Flavor</option>
                                            <option>Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">กล่องที่ 2</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>Classic malt Flavor</option>
                                            <option>Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">กล่องที่ 3</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>Classic malt Flavor</option>
                                            <option>Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">กล่องที่ 4</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>Classic malt Flavor</option>
                                            <option>Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">กล่องที่ 5</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>Classic malt Flavor</option>
                                            <option>Classic malt Flavor</option>
                                        </select>
                                    </div>
                                    <div className="padding-top2">
                                        <label className="form-label bold font-size4">กล่องที่ 6</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option>Classic malt Flavor</option>
                                            <option>Classic malt Flavor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="padding-top2">
                                <div className="d-grid gap-2  mx-auto   col-10 col-sm-10  col-md-10 col-lg-10 distance">
                                    {/* <button className="btn bottom-pink" type="button" >
                                                    ถัดไป
                                                </button>   */}
                                    <Link to="/shipping_address" className="btn bottom-pink" type="button">ถัดไป</Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        );
    }
}

export default Fitto_Plant_Protein;
