import React from "react";

console.log(window.localStorage.getItem("user"));

export default function Layout(props) {
  const logout = () => {
    window.localStorage.removeItem("user");
    window.location.reload();
  };

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
          {window.localStorage.getItem("user") && (
            <ul className="list">
              <li>
                <a className="linkB" href="/Blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="linkB" href="/PublishPost">
                  Publish
                </a>
              </li>
              <li>
                <a className="linkB" href="/signin" onClick={logout()}>
                  Logout
                </a>
              </li>
            </ul>
          )}
          {!window.localStorage.getItem("user") && (
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
            </ul>
          )}
        </nav>
      </div>

      {props.children}
    </div>
  );
}
