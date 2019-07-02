import React, { Component } from "react";
const axios = require("axios");

class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/signin", this.state)
      .then(res => {
        const data = res.data;
        data.status
          ? this.setState({
              loginSuccess: true,
              fullname: data.userDetails.fullname
            })
          : this.setState({
              loginFail: true
            });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = event => {
    let target = event.target;
    let value = target.vale === "checked" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="head">Sign in to your Account</h1>
        </header>

        <section className="container">
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
            Keep me Signed in?
            <br />
            <input type="submit" value="Sign In" className="btn" />
          </form>

          <a href="#" className="link">
            Forgot your Password?
          </a>
          <p>
            Don't have an Account..<a href="Signup.js">SignUp Here</a>
          </p>
        </section>

        {this.state.loginSuccess && (
          <div>
            <button className="btn">
              Login Successful...Welcome {this.state.fullname}
            </button>
          </div>
        )}
        {this.state.loginFail && (
          <div>
            <button className="btn">
              Login Failed...Check details and Try Again
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Signin;
