import React, { Component } from "react";
import Layout from "../Layout";
const axios = require("axios");

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: ""
      },
      loginFail: false,
      loginSuccess: false,
      responseMessage: "",
      fullname: ""
    };
    this.baseState = this.state;
  }

  handleChange = event => {
    let target = event.target;
    let value = target.value === "checked" ? target.checked : target.value;
    let name = target.name;
    let userN = this.state.user;

    userN[name] = value;
    this.setState({
      user: userN
    });
  };

  loginGood(data) {
    this.setState({
      fullname: data.value.fullname,
      loginSuccess: true
    });
    window.localStorage.setItem("user", data.value);
    // console.log(localStorage);
    window.location.reload();
  }
  loginBad(data) {
    this.setState({
      responseMessage: data.message,
      loginFail: true
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/signin", this.state.user)
      .then(res => {
        const data = res.data;
        data.status ? this.loginGood(data) : this.loginBad(data);
        setTimeout(() => {
          this.setState(this.baseState);
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Layout>
        <div className="wrapper">
          <div className="header">
            <header className="head">
              <h1>WELCOME TO TECHONE BLOG</h1>
              <p>
                Read and Post about Latest Software development features in
                Insudtry
              </p>
              <h3 className="head">Sign in to your Account</h3>
            </header>
          </div>
          <div className="signin">
            <section>
              <form className="form" onSubmit={this.handleSubmit}>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="email@example.com"
                  className="form-input"
                />
                <br />
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  placeholder="Enter Password"
                  className="form-input"
                />
                <br />
                <input type="checkbox" className="check" />
                Keep me signed in?
                <br />
                <input type="submit" value="Sign In" className="btn" />
              </form>

              <a href="#" className="link">
                Forgot your Password?
              </a>
              <p id="para">Don't have an Account</p>
              <a href="./Signup.js" className="link">
                SignUp Here
              </a>
              {this.state.loginSuccess && (
                <div>
                  <button className="btn" id="btn1">
                    Login Successful...Welcome {this.state.fullname}
                  </button>
                </div>
              )}
              {this.state.loginFail && (
                <div>
                  <button className="btn" id="btn2">
                    Login Failed...{this.state.responseMessage}
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Signin;
