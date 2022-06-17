import React, { Component } from 'react'
import { connect } from "react-redux";
import { setPassword } from "../../redux/auth"

class new_password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      confirm_password: null,
      status_reset_password: "default"
    };
  }

  componentDidMount() {
    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);

    const email = params.get("email");
    this.setState({ email: email })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  };

  onSubmit(email, password, confirm_password) {
    console.log("email :", email)
    console.log("password :", password)
    console.log("confirm_password :", confirm_password)
    if (password === confirm_password) {
      this.props.setPassword(email, password)
      this.setState({
        status_reset_password: "success"
      })
      console.log("status_reset_password :", this.state.status_reset_password);
    } else {
      this.setState({
        status_reset_password: "fail"
      })
      console.log("status_reset_password :", this.state.status_reset_password);
    }

  }

  render() {
    const { email, password, confirm_password } = this.state;
    return (
      <>
        <div className="padding-top4 center">
          <p className="font-size8 bold color-protein"> เปลี่ยนรหัสผ่าน</p>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12  center2 ">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5  center2 ">
            <div className="box-protein margin-bottom1 padding-top">
              <div class="mb-3  col-10 col-sm-10 col-md-10 col-lg-10 center2 text-left2">
                <label for="exampleFormControlInput1" className="form-label text-left2  size-login">รหัสผ่าน</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <div class="mb-3  col-10 col-sm-10 col-md-10 col-lg-10 center2 text-left2">
                <label for="exampleFormControlInput1" className="form-label text-left2  size-login">ยืนยันรหัสผ่าน</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm_password"
                  value={confirm_password}
                  onChange={(event) => this.handleChange(event)}
                />
              </div>
              <div className="col-10 col-sm-10 col-md-10 col-lg-10 center2 padding-bottom padding-top2 ">
                <button type="button" className="btn bottom-pink-video" onClick={() => this.onSubmit(email, password, confirm_password)}>ยืนยัน</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ }) => {

  return {};
};


const mapActionsToProps = { setPassword };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(new_password);