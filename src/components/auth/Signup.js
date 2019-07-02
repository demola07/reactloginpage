import React, { Component } from "react";
// import axios from ('axios')
const axios = require("axios");

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      username: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/signup", this.state)
      .then(res => {
        const data = res.data;
        if (data.status) {
          alert(
            `Congratulations ${data.userDetails.fullname} SignUp Successful`
          );
        } else {
          alert(`Pls try again`);
        }
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
        <header className="headerUp">
          <h1 className="headUp">Create Account</h1>
        </header>

        <section className="containerUp">
          <form className="formUp" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.fullname}
              onChange={this.handleChange}
              placeholder="Enter FullName"
              className="form-input"
            />
            <br />
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Enter UserName"
              className="form-input"
            />
            <br />
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter Email"
              className="form-input"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter Password"
              className="form-input"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Confirm Password"
              className="form-input"
            />
            <br />
            <input type="checkbox" className="check" value="check" />
            Keep me Signed in?
            <br />
            <input type="submit" value="Sign Up" className="btn" />
          </form>

          <p>
            Already have an Account...<a href="Signin.js">Sign In Here</a>
          </p>
        </section>
      </div>
    );
  }
}

export default Signup;
