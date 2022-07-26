import React, { Component } from 'react';
import vectorinvite from '../../assets/img/vectorinvite.png';
import mvp_gold from '../../assets/img/mvp_gold.png';
import mvp_copper from '../../assets/img/mvp_copper.png';
import mvp_money from '../../assets/img/mvp_money.png';
import newbie from '../../assets/img/newbie.png';
import ellipse24 from '../../assets/img/ellipse24.png';
import group23 from '../../assets/img/group23.png';
import group22 from '../../assets/img/group22.png';
import { getRank, getLogWeight, getIsReducedWeight, getLogWeightTeam, getDailyTeamWeightBonus, getNumberOfTeamNotFull, assignGroupToMember, clearChallenges, createChallengeGroup, leaveTeam, getMembersAndRank, getGroupName, getScoreOfTeam, getLeaderboard, getChallengePeriod } from "../../redux/challenges";
import { getGroupID } from "../../redux/auth";
import { connect } from "react-redux";

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: "challenge1",
      allMissions: "challenge-link1 color1",
      teamList: "challenge-link",
      scoreboard: "challenge-link",
      friendList: "challenge-link chalLeft",
      team: null,
      addteam: null,
      outteam: false, // ออกจากทีม
      friend: 1,
      addfriend: false,
      scoreInWeek: 0,
      teamName: "",
      selectedNavLink: "mission",
      selectedScoreBoard: "team",
      statusRandomTeam: "default"
    }
  }

  componentDidMount() {
    const { user } = this.props;

    var progressChallenge = document.getElementById("progress-doneChallenge");

    const maxMember = 100;
    const minMember = 30;
    var member = minMember;

    const width = (member / maxMember) * 100;

    progressChallenge.style.width = width + "%";


    this.props.getGroupID(user.user_id);
  }

  componentDidUpdate(prevProps, prevState) {
    const { user, statusCreateTeam, statusGetNumberOfTeamNotFull, numberOfTeamNotFull, statusLeaveTeam } = this.props;

    if ((prevProps.statusCreateTeam !== statusCreateTeam) && (statusCreateTeam === "success")) {
      this.props.getGroupID(user.user_id);
      this.setState({
        addteam: null, //กำหนด addteam เป็น null เพื่อซ่อนหน้าการยืนยันการตั้งชื่อทีม
      })
    }

    //เช็คว่าถ้ามีทีมว่างให้ผู้ใช้อยู่ทีมที่ว่างและสมาชิกน้อยสุด
    if (prevProps.statusGetNumberOfTeamNotFull !== statusGetNumberOfTeamNotFull && statusGetNumberOfTeamNotFull === "success") {
      if (numberOfTeamNotFull > 0) {
        this.props.assignGroupToMember(this.props.user.user_id, this.props.user.start_date);
      } else {
        this.setState({
          statusRandomTeam: "fail"
        })
      }
    }

    //หลังจาก assignGroupToMember จะมีการ กำหนด statusGetNumberOfTeamNotFull = default ให้ทำการ getGroupID
    if (prevProps.statusGetNumberOfTeamNotFull !== statusGetNumberOfTeamNotFull && statusGetNumberOfTeamNotFull === "default") {
      this.props.getGroupID(this.props.user.user_id);
    }

    //หลังจาก leaveTeam ให้ getGroupID (group_id ที่ได้ จะเป็น null)
    if ((prevProps.statusLeaveTeam !== statusLeaveTeam) && (statusLeaveTeam === "success")) {
      this.props.getGroupID(this.props.user.user_id);
      this.setState({
        outteam: false  //กำหนด outteam: false เพื่อซ่อนหน้ายืนยันการออกทีม
      })
    }

  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  createTeam(teamName) {
    const { user } = this.props;
    //ตัด ' และ ช่องว่างหน้าหลัง string ออก เพื่อป้องกันบัค SQL syntax
    const teamNameSplit = teamName.trim().split("'").join(' ')
    if (teamName.length > 6) {
      this.props.createChallengeGroup(user.user_id, teamNameSplit, user.start_date)
    } else {
      this.setState({
        teamName: ""
      })
    }
  }


  challengeBottom = (e) => {

    let name = e.target.name;

    if (name === 'allMissions') {
      console.log("1");
      var challenge = "challenge1"
      var allMissions = "challenge-link1  color1"
      var teamList = "challenge-link"
      var scoreboard = "challenge-link"
      var friendList = "challenge-link chalLeft"

    } else if (name === 'teamList') {
      console.log("2");
      var challenge = "challenge2"
      var allMissions = "challenge-link1 "
      var teamList = "challenge-link color1"
      var scoreboard = "challenge-link"
      var friendList = "challenge-link chalLeft"
    } else if (name === 'scoreboard') {
      var challenge = "challenge3"
      var allMissions = "challenge-link1"
      var teamList = "challenge-link"
      var scoreboard = "challenge-link color1"
      var friendList = "challenge-link chalLeft"
    } else {
      var challenge = "challenge4"
      var allMissions = "challenge-link1  "
      var teamList = "challenge-link"
      var scoreboard = "challenge-link"
      var friendList = "challenge-link chalLeft color1"
    }
    this.setState({
      challenge: challenge,
      allMissions: allMissions,
      teamList: teamList,
      scoreboard: scoreboard,
      friendList: friendList,
      addteam: null,
    });

  }

  clickTeam(e) {
    let name = e;
    console.log(name);
    this.setState({
      addteam: name,
      team: null,
    });
    if (this.state.team === null) {
      this.setState({
        team: 1,

      });
    } else {
      this.setState({
        team: null,

      });
    }
  }
  clickAddTeam(e) {
    let name = e;
    console.log(name);
    this.setState({
      addteam: name,
    });

  }
  clickaddfriend(e) {
    let name = e;
    this.setState({
      addfriend: name,
    });
  }

  clickOutTeamList(e) {
    this.setState({
      outteam: e,
    });
  }

  allMissions() {
    return (
      <>
        <div className="box-challengeIn">
          <p className="headChallenge">รายการชาเรนจ์แบบทีม <span>รายการชาเรนจ์แบบเดี่ยว</span></p>
          <p className="text-challenge">ทีมชั่งน้ำหนักครบ 7 วัน &nbsp; 0/7 <span className="span-challenge"> ชั่งน้ำหนัก 2 ครั้ง ใน 1 สัปดาห์ &nbsp; 0/2</span></p>
          <p className="text-challengeRight">ออกกำลังกายครบ 4วัน&nbsp; 0/4</p>
          <p className="text-comment">*รายการจะถุูก Reset ทุกวันอาทิตย์</p>
          <p className="text-comment">*คะแนนจะถูกสรุปทุกวันอาทิตย์</p>
          <p className="border-bottom"></p>
          <p className="rules" data-bs-toggle="modal" data-bs-target="#exampleModal">กฎและกติกา</p>
        </div>
      </>
    )
  }

  teamList() {
    const { user } = this.props;
    return (
      <>
        <div className="box-challengeIn">
          {
            (!user.group_id) ?
              this.state.addteam === "add" ?
                this.addTeamList()
                :
                this.state.addteam === "invite" ?
                  this.inviteTeamList()
                  :
                  this.indexTeamList()
              :
              this.state.outteam === true ?
                this.outTeamList()
                :
                this.teamYou()
          }

        </div>
      </>
    )
  }

  indexTeamList() {
    const { statusGetNumberOfTeamNotFull } = this.props;
    const { statusRandomTeam } = this.state;
    return (
      <>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 ellipse24">
          <img src={group23} />
        </div>
        <p className="text-teamHead">คุณยังไม่มีทีม</p>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          <div className="bottom-teamList">
            {
              ((statusRandomTeam === "fail") && (statusGetNumberOfTeamNotFull === "success")) &&
              <h6 style={{ color: "red" }}>ทุกทีมในระบบสมาชิกเต็มแล้ว</h6>
            }
            {
              (statusGetNumberOfTeamNotFull !== "loading") &&
              <>
                <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickAddTeam("add")}>สร้างทีมของคุณ</button>
                <button type="button" className="btn bottom-outlineaddTeam bottomEditProfileLeft" onClick={() => this.props.getNumberOfTeamNotFull()}>สุ่มเข้าร่วมทีม</button>
              </>
            }
          </div>
        </div>
      </>
    )
  }
  addTeamList() {
    const { teamName } = this.state;
    return (
      <>
        <p className="text-addteam">ตั้งชื่อทีมของคุณ</p>
        <div className="input-team col-8 col-sm-8 col-md-8 col-lg-8">
          <input
            type=""
            className="form-control"
            placeholder="ชื่อทีมต้องมากกว่า 6 ตัวอักษร"
            id="teamName"
            value={this.state.teamName}
            onChange={(event) => this.handleChange(event)}
          />
          {
            (this.props.statusCreateTeam === "fail") &&
            <h6 style={{ color: "red" }}>มีชื่อทีมนี้ในระบบแล้ว</h6>
          }
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          {
            (this.props.statusCreateTeam !== "loading") &&
            <div className="bottom-teamList">
              <button type="button" className="btn bottom-outlineaddTeam " onClick={() => this.createTeam(this.state.teamName)}>ยืนยันการตั้งชื่อ</button>
            </div>
          }
        </div>
      </>
    )
  }
  inviteTeamList() {
    return (
      <>
        <p className="text-addteam"> <img src={vectorinvite} />&nbsp; ชวนเพื่อนเข้าทีม</p>
        <div className="input-team col-8 col-sm-8 col-md-8 col-lg-8">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ชื่อทีมต้องมากกว่า 6 ตัวอักษร" />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          <div className="bottom-teamList">
            <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickTeam(null)}>ส่งคำขอ</button>
          </div>
        </div>
      </>
    )
  }
  outTeamList() {
    const { user } = this.props;
    return (
      <>
        <p className="text-teamHeadout">คุณยืนยันที่จะออกจากทีมหรือไม่</p>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
          <div className="bottom-teamList">
            <button type="button" className="btn bottom-outlinebackTeam " onClick={(e) => this.clickOutTeamList(false)}>ย้อนกลับ</button>
            <button type="button" className="btn bottom-outlineoutTeam bottomEditProfileLeft" onClick={() => this.props.leaveTeam(user.user_id)}>ออกจากทีม</button>
          </div>
        </div>
      </>
    )
  }
  teamYou() {
    return (
      <>
        <p className="headTeam bold">ทีม : หมีไฟพยักษ์ขาว <span className="span-challenge headTeamSpan">จำนวนสมาชิก 3/10 คน</span></p>
        <p className="text-challenge"><p><span className="color-mvp1">1. </span>HummingBirth  <img src={mvp_gold} className="image-mvp" />&nbsp;</p> <span>Newbie</span><span className="span-challenge"> 20 คะแนน</span></p>
        <p className="text-challenge"><p><span className="color-mvp2">2. </span>HummingBirth  <img src={mvp_money} className="image-mvp" />&nbsp;</p>  <span>Newbie</span><span className="span-challenge"> 10 คะแนน</span></p>
        <p className="text-challenge"><p><span className="color-mvp3">3. </span>HummingBirth  <img src={mvp_copper} className="image-mvp" />&nbsp;</p>  <span>Newbie</span><span className="span-challenge"> 8 คะแนน</span></p>
        <p className="text-challenge"><p><span>4. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 2 คะแนน</span></p>
        <p className="text-challenge"><p><span>5. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 1 คะแนน</span></p>
        <p className="text-comment">*รายการจะถุูก Reset ทุกวันอาทิตย์</p>
        <p className="text-comment">*คะแนนจะถูกสรุปทุกวันอาทิตย์</p>
        <p className="border-bottom"></p>
        <p className="rules-out"> <p onClick={(e) => this.clickOutTeamList(true)}>ออกจากทีม</p> <span className="rules-invite" onClick={(e) => this.clickTeam("invite")}>+ ชวนเพื่อนเข้าทีม</span></p>
      </>
    )

  }

  scoreboard() {
    return (
      <>
        <div className="box-challengeIn">
          <p className="headTeam bold">กระดานคะแนนทีม<span className="span-challenge headTeamSpan">จำนวนสมาชิก 3/10 คน</span></p>
          <p className="text-challenge"><p><span className="color-mvp1">1. </span>HummingBirth  <img src={mvp_gold} className="image-mvp" />&nbsp;</p> <span>Newbie</span><span className="span-challenge"> 20 คะแนน</span></p>
          <p className="text-challenge"><p><span className="color-mvp2">2. </span>HummingBirth  <img src={mvp_money} className="image-mvp" />&nbsp;</p>  <span>Newbie</span><span className="span-challenge"> 10 คะแนน</span></p>
          <p className="text-challenge"><p><span className="color-mvp3">3. </span>HummingBirth  <img src={mvp_copper} className="image-mvp" />&nbsp;</p>  <span>Newbie</span><span className="span-challenge"> 8 คะแนน</span></p>
          <p className="text-challenge"><p><span>4. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 2 คะแนน</span></p>
          <p className="text-challenge"><p><span>5. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 1 คะแนน</span></p>
          <p className="text-comment">*รายการจะถุูก Reset ทุกวันอาทิตย์</p>
          <p className="text-comment">*คะแนนจะถูกสรุปทุกวันอาทิตย์</p>

        </div>

      </>
    )
  }

  addfriendList() {
    return (
      <>
        <div className="box-challengeIn">
          <p className="text-addteam"> <img src={vectorinvite} />&nbsp; เพิ่มเพื่อน</p>
          <div className="input-team col-8 col-sm-8 col-md-8 col-lg-8">
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ชื่อทีมต้องมากกว่า 6 ตัวอักษร" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
            <div className="bottom-teamList">
              <button type="button" className="btn bottom-outlineaddTeam " >ส่งคำขอ</button>
            </div>
          </div>
        </div>

      </>
    )
  }


  friendList() {
    const { friend, addfriend } = this.state;
    return (
      <>
        {addfriend === false ?
          friend !== null ?
            <>
              <div className="box-challengeIn">
                <p className="headTeam bold">รายชื่อเพื่อน <span className="span-challenge headTeamSpan">จำนวนสมาชิก 3/10 คน</span></p>
                <p className="text-challenge"><p><span className="color-mvp1">1. </span>HummingBirth  <img src={mvp_gold} className="image-mvp" />&nbsp;</p> <span>Newbie</span><span className="span-challenge"> 20 คะแนน</span></p>
                <p className="text-challenge"><p><span className="color-mvp2">2. </span>HummingBirth <img src={mvp_money} className="image-mvp" />&nbsp;</p>  <span>Newbie</span><span className="span-challenge"> 10 คะแนน</span></p>
                <p className="text-challenge"><p><span className="color-mvp3">3. </span>HummingBirth <img src={mvp_copper} className="image-mvp" />&nbsp;</p>  <span>Newbie</span><span className="span-challenge"> 8 คะแนน</span></p>
                <p className="text-challenge"><p><span>4. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 2 คะแนน</span></p>
                <p className="text-challenge"><p><span>5. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 1 คะแนน</span></p>
                <p className="text-comment">*รายการจะถุูก Reset ทุกวันอาทิตย์</p>
                <p className="text-comment">*คะแนนจะถูกสรุปทุกวันอาทิตย์</p>
                <p className="border-bottom"></p>
                <p className="rules-add"> <p data-bs-toggle="modal" data-bs-target="#modalAddfriendList" >วิธีการเพิ่มจำนวนเพื่อน</p> <span className="rules-invite" onClick={(e) => this.clickaddfriend(true)}>+ เพิ่มเพื่อน</span></p>


              </div>
            </>
            :
            <>
              <div className="box-challengeIn">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 ellipse24">
                  <img src={group22} />
                </div>
                <p className="text-teamHead">คุณยังไม่มีเพื่อน</p>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                  <div className="bottom-teamList">
                    <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickaddfriend(true)}>เพิ่มเพื่อน</button>
                  </div>
                </div>
              </div>
            </>
          :
          this.addfriendList()

        }

      </>
    )
  }



  render() {
    const { challenge, allMissions, teamList, scoreboard, friendList } = this.state;
    return (
      <>
        <div className="box-challenge">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
            <ul className="challenge">
              <li className="video-li  video-liPadding-left">
                <a className={allMissions} name="allMissions" onClick={e => this.challengeBottom(e)}>ภารกิจทั้งหมด</a>
              </li>
              <li className="video-li">
                <a className={teamList} name="teamList" onClick={e => this.challengeBottom(e)}>รายชื่อภายในทีม</a>
              </li>
              <li className="video-li">
                <a className={scoreboard} name="scoreboard" onClick={e => this.challengeBottom(e)}>กระดานคะแนนทีม</a>
              </li>
              <li className="video-li">
                <a className={friendList} name="friendList" onClick={e => this.challengeBottom(e)}>รายชื่อเพื่อน</a>
              </li>
            </ul>
          </div>
          <div className="box-challengeManu">
            <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-12 col-sm-12 col-md-7 col-lg-7">
                  {challenge === "challenge1" ?
                    this.allMissions()
                    :
                    challenge === "challenge2" ?
                      this.teamList()
                      :
                      challenge === "challenge3" ?
                        this.scoreboard()
                        :
                        this.friendList()

                  }


                </div>
                <div class="col-12 col-sm-12 col-md-5 col-lg-5">
                  <div className="emblem-box">
                    <img src={newbie} />
                    <p className="circleTextHead color1">Newbie</p>
                    {/* <div className="circle-progress"></div> */}
                    <div className="progress-barChallenge">
                      <div className="progressChallenge">
                        <div className="progress-doneChallenge" id="progress-doneChallenge"></div>
                      </div>
                    </div>

                    <p className="circleTextHead">0/100 Point</p>
                  </div>
                </div>
              </div>
              {/*                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalChallenge">
                                Launch demo modal
                                </button> */}

              {/* <p className="circle-VideoAll">คลิปแบบซื้อ <span className="color1"> ดูทั้งหมด {'>'}</span></p> */}
              {/* <div className="box-VideoChallenge">
                <div className="scrolloverflow">
                  <ul>
                    <li>
                      <div className="boxvideo-1" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                                                    </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                                                    </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                                                    </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                                                    </button>
                        </div>
                      </div>
                      <div className="boxvideo" >
                        <div className="box-video">

                        </div>
                        <div className="box-video1">
                          <div className="text-videobox">
                            <p className="bold"> โดยเชือก 1,000 ยกระชับสัดส่วน ต้นขาเห็นผลภายใน 5 วัน </p>
                            <p className="text-box-video1"> ในคลิปประกอบไปด้วยการโดดเชือก 20 คลิปทำให้เห็นผลการลดน้ำหนักภายใน 5 วัน จะลดลงไปถึง...</p>
                          </div>
                          <button button className="btn bottom-pink-video" type="button" >
                            ซื้อโปรแกรมนี้
                                                    </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>



        {/* <!-- Modal กฎและกติกา --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal">กฎและกติกา</p>
                <div className="headBox">
                  <p className="headTextBox"><li>สมาชิกในทีม</li></p>
                  <p className="textBoxchallenge">1 ทีม จะมีสมาชิกจำนวน 10 ท่าน โดยระบบจะทำการจัดทีมให้อัตโนมัติหากสมาชิกหมดอายุก่อนจบ Season ระบบจะตัดออกจากกลุ่มใน 7 วัน</p>
                  <br />
                  <p className="headTextBox"><li>การเลื่อนขั้น (Rank)  </li></p>
                  <p className="textBoxchallenge">ระดับขั้นจะแบ่งออกเป็น Newbie, Bronze, Silver, Gold และ Platinum ในแต่ละสัปดาห์ถ้ามีคะแนนรวมมากกว่า 40 คะแนนจะได้รับการเลื่อนขั้นแต่หากคะแนนน้อยกว่าหรือเท่ากับ 40 คะแนนจะถูดลดขั้นลงมา 1 ลำดับ โดยระบบจะทำการอัปเดตคะแนนทุกวันอาทิตย์เวลา 00.00 น.</p>
                  <br />
                  <p className="headTextBox"><li>การสะสมคะแนน </li></p>
                  <p className="textBoxchallenge"><span className="bold">คะแนนส่วนบุคคล</span> จะได้รับจากภารกิจ โดยจำนวนคะแนนที่ได้รับนั้นจะขึ้นอยู่กับ Rank ในแต่ละสัปดาห์ ยิ่ง Rank สูงจะได้คะแนนมากขึ้น
                                        คะแนนของทีม จะเป็นคะแนนสะสมรวมของสมาชิกถ้าคนในทีมทำภารกิจสำเร็จ ผู้ร่วมทีมจะได้รับคะแนนด้วยเช่นกัน</p>
                  <br />
                  <p className="headTextBox"><li>รายละเอียดของรางวัลประจำ Season </li></p>
                  <p className="textBoxchallenge">สามารถติดตามของรางวัลได้ทาง Facebook Group</p>
                  <button type="button" className="btn bottom-pink-video close" data-bs-dismiss="modal" >ปิด</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal คำชวนเข้าร่วมทีมชาเรนจ์ --> */}
        <div class="modal fade" id="modalChallenge" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal">คำชวนเข้าร่วมทีมชาเรนจ์</p>
                <p className="textModel-challenge"><span className="bold">HummingBirth</span> ต้องการชวนคุณเข้าร่วมทีม</p>
                <div className="headBox">

                  <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                    <div className="bottom-teamList">
                      <button type="button" className="btn bottom-outlinebackTeam">ปฎิเสธ</button>
                      <button type="button" className="btn bottom-outlineoutTeam bottomEditProfileLeft">เข้าร่วมทีม</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal add เพื่อน --> */}
        <div class="modal fade" id="modalAddfriendList" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-bodyChallenge">
                <p className="rules-modal">วิธีการเพิ่มจำนวนเพื่อน</p>
                <div className="headBox">
                  <p className="textmodel-addfriend">เริ่มต้นสามารถ add เพื่อนได้ 1 คน</p>
                  <p className="textmodel-addfriend">ทำ 1 active week จะสามารถเพิ่มเพื่อนได้อีก 2 คน</p>
                  <p className="textmodel-addfriend">จำนวนเพื่อนสูงสุดที่สามารภมีได้ = 15 คน</p>
                  <p className="textmodel-addfriend">มี microleaderboard สำหรับเพื่อน</p>
                  <p className="textmodel-addfriend">เข้าอยู่ในระบบ Bebe stay fit ครบ 4 วันใน 1 อาทิตย์จะเพิ่ม  จำนวนเพื่อนได้ 2 คน</p>
                  <p className="textmodel-addfriend">จำนวนเพื่อนมีาสูงสุดได้ 15 คน</p>
                  <button type="button" className="btn bottom-pink-video close" data-bs-dismiss="modal" >ปิด</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ authUser, challenges }) => {
  const { user } = authUser;
  const { statusCreateTeam, numberOfTeamNotFull, statusGetNumberOfTeamNotFull, statusLeaveTeam } = challenges;
  return { user, statusCreateTeam, numberOfTeamNotFull, statusGetNumberOfTeamNotFull, statusLeaveTeam };
};

const mapActionsToProps = { getGroupID, getRank, getLogWeight, getIsReducedWeight, getLogWeightTeam, getDailyTeamWeightBonus, getNumberOfTeamNotFull, assignGroupToMember, clearChallenges, createChallengeGroup, leaveTeam, getMembersAndRank, getGroupName, getScoreOfTeam, getLeaderboard, getChallengePeriod };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Challenge);