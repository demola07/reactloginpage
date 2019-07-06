import React from "react";

export default function Layout(props) {
  return (
    <div>
      <nav>
        <h1>
          <a href="/">Demola's Blog</a>
        </h1>
        <ul>
          <li>
            <a href="/Signin">Signin</a>
          </li>
          <li>
            <a href="/Signup">Signup</a>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
        </ul>
      </nav>

      {props.children}
    </div>
  );
}
