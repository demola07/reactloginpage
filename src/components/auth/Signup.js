import React, { Component } from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fullname: "",
        username: "",
        email: "",
        password: ""
      },
      passwordConfirm: "",
      loginSuccess: false,
      loginFail: false,
      responseMessage: ""
    };
    this.baseState = this.state;
  }

  handleChange = event => {
    let target = event.target;
    let value = target.value === "checked" ? target.checked : target.value;
    let name = target.name;
    let userN = this.state.user;
    if (name === "passwordConfirm") {
      this.setState({
        [name]: value
      });
    } else {
      userN[name] = value;
      this.setState({
        user: userN
      });
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.user.password !== this.state.passwordConfirm) {
      alert(`Password mismatch...Try again`);
    } else {
      axios
        .post("http://localhost:8080/signup", this.state.user)
        .then(res => {
          const data = res.data;
          data.status
            ? this.setState({
                fullname: data.value.fullname,
                loginSuccess: true
              })
            : this.setState({
                responseMessage: data.message,
                loginFail: true
              });
          setTimeout(() => {
            this.setState(this.baseState);
          }, 2000);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <header className="head">
            <h1>WELCOME TO TECHONE BLOG</h1>
            <p>
              Read and Post about Latest Software development features in In
              Industry
            </p>
            <h3 className="head">Create Your Account</h3>
          </header>
        </div>
        <div className="signin">
          <section>
            <form className="form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="fullname"
                value={this.state.user.fullname}
                onChange={this.handleChange}
                placeholder="FullName"
                className="form-input"
              />
              <br />
              <input
                type="text"
                name="username"
                value={this.state.user.username}
                onChange={this.handleChange}
                placeholder="Enter UserName"
                className="form-input"
              />
              <br />
              <input
                type="email"
                name="email"
                value={this.state.user.email}
                onChange={this.handleChange}
                placeholder="email@example.com"
                className="form-input"
              />
              <br />
              <input
                type="password"
                name="password"
                value={this.state.user.password}
                onChange={this.handleChange}
                placeholder="Enter Password"
                className="form-input"
              />
              <br />
              <input
                type="password"
                name="passwordConfirm"
                value={this.state.passwordConfirm}
                onChange={this.handleChange}
                placeholder="Confirm Password"
                className="form-input"
              />
              <br />
              <input type="checkbox" className="check" />
              Accept Terms and Conditions
              <br />
              <input type="submit" value="Sign Up" className="btn" />
            </form>

            <p id="para">Already have an Account ? </p>
            <Link to="/signin" className="link">
              Sign In Here
            </Link>
            {this.state.loginSuccess && (
              <div>
                <button className="btn" id="btn1">
                  SignUp Successful...Welcome {this.state.user.fullname}
                </button>
              </div>
            )}
            {this.state.loginFail && (
              <div>
                <button className="btn" id="btn2">
                  Signup Failed..{this.state.responseMessage}
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default Signup;
