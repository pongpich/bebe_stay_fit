import React, { Component } from 'react';
import vectorinvite from '../../assets/img/vectorinvite.png';
import mvp from '../../assets/img/mvp.png';
import newbie from '../../assets/img/newbie.png';
import ellipse24 from '../../assets/img/ellipse24.png';

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
            outteam: false,
        }
    }

    componentDidMount() {

    var progressChallenge = document.getElementById("progress-doneChallenge");

    const maxMember = 100;
    const minMember = 30;
    var member = minMember;
 
    const width = (member / maxMember) * 100;

    progressChallenge.style.width = width + "%";

    
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
        }else{
            this.setState({
                team: null,
              
            });
        }
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
                    <p className="rules"  data-bs-toggle="modal" data-bs-target="#exampleModal">กฎและกติกา</p>
                </div>
            </>
        )
    }
    teamList() {
        return (
            <>
                <div className="box-challengeIn">
                    {
                        this.state.team === null ?
                            this.state.addteam === "add"
                                ?
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
        return (
            <>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 ellipse24">
            <img src={ellipse24}/>
            </div>
                <p className="text-teamHead">คุณยังไม่มีทีม</p>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                    <div className="bottom-teamList">
                        <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickTeam("add")}>สร้างทีมของคุณ</button>
                        <button type="button" className="btn bottom-outlineaddTeam bottomEditProfileLeft" onClick={(e) => this.clickTeam("invite")}>สุ่มเข้าร่วมทีม</button>
                    </div>
                </div>
            </>
        )
    }
    addTeamList() {
        return (
            <>
                <p className="text-addteam">ตั้งชื่อทีมของคุณ</p>
                <div className="input-team col-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ชื่อทีมต้องมากกว่า 6 ตัวอักษร" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                    <div className="bottom-teamList">
                        <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickTeam(null)}>ยืนยันการตั้งชื่อ</button>
                    </div>
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
                        <button type="button" className="btn bottom-outlineaddTeam " onClick={(e) => this.clickTeam(null)}>ยืนยันการตั้งชื่อ</button>
                    </div>
                </div>
            </>
        )
    }
    outTeamList() {
        return (
            <>
                <p className="text-teamHeadout">คุณยืนยันที่จะออกจากทีมหรือไม่</p>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2  margin-top-3">
                    <div className="bottom-teamList">
                        <button type="button" className="btn bottom-outlinebackTeam " onClick={(e) => this.clickOutTeamList(false)}>ย้อนกลับ</button>
                        <button type="button" className="btn bottom-outlineoutTeam bottomEditProfileLeft" onClick={(e) => this.clickOutTeamList(false)}>ออกจากทีม</button>
                    </div>
                </div>
            </>
        )
    }
    teamYou() {
        return (
            <>
                <p className="headTeam bold">ทีม : หมีไฟพยักษ์ขาว <span className="span-challenge headTeamSpan">จำนวนสมาชิก 3/10 คน</span></p>
                <p className="text-challenge"><p><span className="color-mvp1">1. </span>HummingBirth  <img src={mvp} className="image-mvp" />&nbsp;</p> <span>Newbie</span><span className="span-challenge"> 20 คะแนน</span></p>
                <p className="text-challenge"><p><span className="color-mvp2">2. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 10 คะแนน</span></p>
                <p className="text-challenge"><p><span className="color-mvp3">3. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 8 คะแนน</span></p>
                <p className="text-challenge"><p><span>4. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 2 คะแนน</span></p>
                <p className="text-challenge"><p><span>5. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 1 คะแนน</span></p>
                <p className="text-comment">*รายการจะถุูก Reset ทุกวันอาทิตย์</p>
                <p className="text-comment">*คะแนนจะถูกสรุปทุกวันอาทิตย์</p>
                <p className="border-bottom"></p>
                <p className="rules-out"> <p  onClick={(e) => this.clickOutTeamList(true)}>ออกจากทีม</p> <span className="rules-invite" onClick={(e) => this.clickTeam("invite")}>+ ชวนเพื่อนเข้าทีม</span></p>
            </>
        )

    }

    scoreboard() {
        return (
            <>
                <div className="box-challengeIn">
                <p className="headTeam bold">กระดานคะแนนทีม<span className="span-challenge headTeamSpan">จำนวนสมาชิก 3/10 คน</span></p>
                <p className="text-challenge"><p><span className="color-mvp1">1. </span>HummingBirth  <img src={mvp} className="image-mvp" />&nbsp;</p> <span>Newbie</span><span className="span-challenge"> 20 คะแนน</span></p>
                <p className="text-challenge"><p><span className="color-mvp2">2. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 10 คะแนน</span></p>
                <p className="text-challenge"><p><span className="color-mvp3">3. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 8 คะแนน</span></p>
                <p className="text-challenge"><p><span>4. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 2 คะแนน</span></p>
                <p className="text-challenge"><p><span>5. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 1 คะแนน</span></p>
                <p className="text-comment">*รายการจะถุูก Reset ทุกวันอาทิตย์</p>
                <p className="text-comment">*คะแนนจะถูกสรุปทุกวันอาทิตย์</p>

                </div>

            </>
        )
    }
    friendList() {
        return (
            <>
                <div className="box-challengeIn">
                <p className="headTeam bold">รายชื่อเพื่อน <span className="span-challenge headTeamSpan">จำนวนสมาชิก 3/10 คน</span></p>
                <p className="text-challenge"><p><span className="color-mvp1">1. </span>HummingBirth  <img src={mvp} className="image-mvp" />&nbsp;</p> <span>Newbie</span><span className="span-challenge"> 20 คะแนน</span></p>
                <p className="text-challenge"><p><span className="color-mvp2">2. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 10 คะแนน</span></p>
                <p className="text-challenge"><p><span className="color-mvp3">3. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 8 คะแนน</span></p>
                <p className="text-challenge"><p><span>4. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 2 คะแนน</span></p>
                <p className="text-challenge"><p><span>5. </span>HummingBirth</p>  <span>Newbie</span><span className="span-challenge"> 1 คะแนน</span></p>
                <p className="text-comment">*รายการจะถุูก Reset ทุกวันอาทิตย์</p>
                <p className="text-comment">*คะแนนจะถูกสรุปทุกวันอาทิตย์</p>
             {/*    <p className="border-bottom"></p>
                <p className="rules-out"> <p  onClick={(e) => this.clickOutTeamList(true)}>ออกจากทีม</p> <span className="rules-invite" onClick={(e) => this.clickTeam("invite")}>+ ชวนเพื่อนเข้าทีม</span></p> */}


                </div>
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

                            <p className="circle-VideoAll">คลิปแบบซื้อ <span className="color1"> ดูทั้งหมด {'>'}</span></p>
                            <div className="box-VideoChallenge">
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
                            </div>
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
            </>
        )
    }
}

export default Challenge;