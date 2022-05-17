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
import Profile from "./views/profile/profile";
import EditProfile from "./views/profile/editProfile";
import Cancel_Package from "./views/profile/cancel_package";
import Cancel_Package_Succeed from "./views/profile/cancel_packag_ succeed";
import ProgramPackage from "./views/programPackage";
//import Summary_details from '../views/summary_details';
//import Home from '../views/home';Welcome_NewMember
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

  render() {
    return (
      <div className="App">
        <header className="App-header ">

          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path='/home' component={Home} />
            <Route path='/information_calculate' component={InformationCalculate} />
            <Route path='/buy_program' component={Buy_program} />
            <Route path='/register' component={Register} />
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
          </Switch>
        </header>
      </div>
    )
  }
}

export default App;
