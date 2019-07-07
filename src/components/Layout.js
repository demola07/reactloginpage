import React from "react";

export default function Layout(props) {
  return (
    <div>
      <div className="layout">
        <nav className="nav">
          <h1 id="left">
            <a className="linkA" href="/">
              TECHONE Blog
            </a>
          </h1>
          {/* <div id="clears" /> */}
          <ul className="list">
            <li>
              <a className="linkB" href="/Signin">
                Signin
              </a>
            </li>
            <li>
              <a className="linkB" href="/Signup">
                Signup
              </a>
            </li>
            <li>
              <a className="linkB" href="/Blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
