import React, { Component } from "react";
const axios = require("axios");

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    if (this.state.password !== this.state.passwordConfirm) {
      alert(`Password mismatch...Try again`);
    } else {
      axios
        .post("http://localhost:8080/signup", this.state)
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
    }
  };

  handleChange = event => {
    let target = event.target;
    let value = target.value === "checked" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <header className="headerUp">
          <h1 className="headUp">Create Account</h1>
        </header>

        <section className="containerUp">
          <form className="formUp" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
              placeholder="FullName"
              className="form-input"
            />
            <br />
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Enter UserName"
              className="form-input"
            />
            <br />
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
            Keep me Signed in?
            <br />
            <input type="submit" value="Sign Up" className="btn" />
          </form>

          <p>
            Already have an Account...<a href="Signin.js">Sign In Here</a>
          </p>
        </section>

        {this.state.loginSuccess && (
          <div>
            <button className="btn">
              SignUp Successful...Welcome {this.state.fullname}
            </button>
          </div>
        )}
        {this.state.loginFail && (
          <div>
            <button className="btn">
              Signup Failed...Check details and Try Again
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Signup;
