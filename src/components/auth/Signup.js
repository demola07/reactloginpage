import React, { Component } from "react";
import Layout from "../Layout";
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
      loginFail: false
    };
    this.baseState = this.state;
  }

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
                loginSuccess: true,
                fullname: data.value.fullname
              })
            : this.setState({
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

  handleChange = event => {
    let target = event.target;
    let value = target.value === "checked" ? target.checked : target.value;
    let name = target.name;
    let userN = this.state.user;
    if (name == "passwordConfirm") {
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

  render() {
    return (
      <Layout>
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
              <a href="Signin.js" className="link">
                Sign In Here
              </a>
              {this.state.loginSuccess && (
                <div>
                  <button className="btn">
                    SignUp Successful...Welcome {this.state.user.fullname}
                  </button>
                </div>
              )}
              {this.state.loginFail && (
                <div>
                  <button className="btn">Signup Failed..</button>
                </div>
              )}
            </section>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Signup;
