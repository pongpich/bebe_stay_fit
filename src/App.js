import './App.css';
import React, { Component } from 'react';
import Home from '../src/views/information/home';
import Buy_program from '../src/views/information/buy_program';
import Register from '../src/views/information/register';
import Fitto_Plant_Protein from '../src/views/information/fitto_plant_protein';
import InformationCalculate from "../src/views/information/information_calculate";
import Shipping_Address from "../src/views/information/shipping_address";
import Payment from "../src/views/information/payment";
import Welcome_NewMember from "../src/views/information/welcome_new_member";
import Basic_Information from "../src/views/information/basic_information";
import Your_Program from "../src/views/information/your_program";
import Cc_token from "../src/views/information/cc_token";
import Profile from "./views/profile/profile";
import EditProfile from "./views/profile/editProfile";
import Cancel_Package from "./views/profile/cancel_package";
import Cancel_Package_Succeed from "./views/profile/cancel_packag_ succeed";
import ProgramPackage from "./views/programPackage";
import videoList from "./views/information/video_List";
import group49 from "./views/images/group49.png";
import Shipping_check from './views/profile/shipping_check';
import Billing_history from './views/profile/billing_history';
//import Home from '../views/home';Welcome_NewMember

import { connect } from "react-redux";
import { logoutUser } from "./redux/auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Amplify from 'aws-amplify';
import { awsConfig } from "./constants/defaultValues";

Amplify.configure(awsConfig);

class App extends Component {

  onUserLogout(event) {
    this.props.logoutUser();
    //this.props.clearVideoList();
    this.props.history.push('/home');
  }

  renderNavbar() {
    return (
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#FFFFFF", fontFamily: "'Prompt', sans-serif" }}>
        <div className="container-fluid nav-left2">
          <a className="navbar-brand" href="/#" onClick={() => this.props.history.push('/')} style={{ color: "white", cursor: "pointer" }}>
            <img src={group49} alt="vector" />
          </a>
          <div className="collapse navbar-collapse padding-left3" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 font-size5 bold">
              <li className="nav-item">
                <a className="nav-link pointer" >โปรแกรมออกกำลังกาย</a>
              </li>
              <li className="nav-item">
                <a className="nav-link pointer" >วิธีการกินอาหารและอาหารเสริม</a>
              </li>
              <li className="nav-item">
              </li>
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link nav-linkHead " href="/#" onClick={() => this.onUserLogout()} style={{ cursor: "pointer" }}>
                    ออกจากระบบ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      /*   <nav className="navbar navbar-expand nav-itemHead " style={{ backgroundColor: "white", fontFamily: "'Prompt', sans-serif" }}>
          <a className="navbar-brand" href="/#" onClick={() => this.props.history.push('/')} style={{ color: "white", cursor: "pointer" }}>
            <img src={group49} alt="vector" />
          </a>
  
          <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
            <ul className="navbar-nav">
              {
                (this.props.user !== null && this.props.user.authorization === "admin") &&
                <li className="nav-item">
                  <a className="nav-link" href="#/videolist" onClick={() => this.props.history.push('/videolist')} style={{ color: "white", cursor: "pointer" }}>
                    Platform
                  </a>
                </li>
              }
            </ul>
          </div>
  
          <div className="collapse navbar-collapse padding-left3" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               {
                (this.props.user === null || this.props.user.password === null) && //password === null คือกรณีผู้ใช้ทำการ ResetPassword
                <li className="nav-item">
                  <a className="nav-link" href="#/register" onClick={() => this.props.history.push('/register')} style={{ color: "white", cursor: "pointer" }}>
                    สมัครสมาชิก
                  </a>
                </li>
              } 
               {
                (this.props.user !== null && this.props.user.authorization === "admin") &&
                <li className="nav-item nav-linkHead">
                  <a className="nav-link" href="#/import-members" onClick={() => this.props.history.push('/import-members')} style={{ color: "white", cursor: "pointer" }}>
                    จัดการสมาชิก
                  </a>
                </li>
              } 
               {
                (this.props.user !== null) &&
                <>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link pointer" >โปรแกรมออกกำลังกาย</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link pointer" >วิธีการกินอาหารและอาหารเสริม</a>
                      </li>
                    </ul>
                  <li className="nav-item ">
                    <a className="nav-link nav-linkHead " href="/#" onClick={() => this.onUserLogout()} style={{ cursor: "pointer" }}>
                      ออกจากระบบ
                    </a>
                  </li>
                </>
  
              }
            </ul>
          </div>
        </nav> }*/

    )
  }

  render() {
    return (
      <div className="App">
        {this.renderNavbar()}
        <header className="App-header ">

          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path='/home' component={Home} />
            <Route path='/information_calculate' component={InformationCalculate} />
            <Route path='/buy_program' component={Buy_program} />
            <Route path='/register' component={Register} />
            <Route path='/cc_token' component={Cc_token} />
            <Route path='/fitto_plant_protein' component={Fitto_Plant_Protein} />
            <Route path='/shipping_address' component={Shipping_Address} />
            <Route path='/payment' component={Payment} />
            <Route path='/welcome_new_nember' component={Welcome_NewMember} />
            <Route path='/basic_information' component={Basic_Information} />
            <Route path='/your_program' component={Your_Program} />
            <Route path='/profile' component={Profile} />
            <Route path='/edit_profile' component={EditProfile} />
            <Route path='/cancel_package_succeed' component={Cancel_Package_Succeed} />
            <Route path='/programPackage' component={ProgramPackage} />
            <Route path='/videoList' component={videoList} />
            <Route path='/qr_checkout' render={() => { window.location.href = "qr_checkout.html" }} />
            <Route path='/shipping_check' component={Shipping_check} />
            <Route path='/billing_history' component={Billing_history} />
          </Switch>
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

const mapActionsToProps = {
  logoutUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
