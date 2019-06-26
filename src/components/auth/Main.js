import React from "react";
import "../App.css";

function Main() {
  return (
    <section class="container">
      <form class="form">
        <input type="email" placeholder="Enter Email" class="form-input" />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          class="form-input"
        />
        <br />
        <input type="checkbox" class="check" value="check" />
        Keep me Signed in?
        <br />
        <input type="submit" value="Sign In" class="btn" />
      </form>

      <a href="#" class="link">
        Forgot your Password?
      </a>
      <p>Don't have an Account..<a href='Signup.js'>SignUp Here</a></p>
    </section>
  );
}

export default Main;
