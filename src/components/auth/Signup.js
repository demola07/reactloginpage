import React from "react";

function Signup() {
  return (
    <div>
      <header class="headerUp">
        <h1 class="headUp">Create Account</h1>
      </header>

      <section class="containerUp">
        <form class="formUp">
          <input type="text" placeholder="Enter FullName" class="form-input" />
          <br />
          <input type="text" placeholder="Enter UserName" class="form-input" />
          <br />
          <input type="email" placeholder="Enter Email" class="form-input" />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            class="form-input"
          />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            class="form-input"
          />
          <br />
          <input type="checkbox" class="check" value="check" />
          Keep me Signed in?
          <br />
          <input type="submit" value="Sign Up" class="btn" />
        </form>

        <p>
          Already have an Account...<a href="Signin.js">Sign In Here</a>
        </p>
      </section>
    </div>
  );
}

export default Signup;
