import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import CustomRouter from "./components/CustomRouter";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

// import Layout from "./components/Layout";
// import Signin from "./components/auth/Signin";
// import Signup from "./components/auth/Signup";
// import Blog from "./components/Blog";
// import PublishPost from "./components/PublishPost";

function App() {
  const logout = () => {
    window.localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <Router history={history}>
      <div>
        <div className="layout">
          <nav className="nav">
            <h1 id="left">
              <Link className="linkA" to="/">
                TECHONE Blog
              </Link>
            </h1>
            {/* <div id="clears" /> */}
            {window.localStorage.getItem("user") && (
              <ul className="list">
                <li>
                  <Link className="linkB" to="/Blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="linkB" to="/PublishPost">
                    Publish
                  </Link>
                </li>
                <li>
                  <Link className="linkB" to="/signin" onClick={logout()}>
                    Logout
                  </Link>
                </li>
              </ul>
            )}
            {!window.localStorage.getItem("user") && (
              <ul className="list">
                <li>
                  <Link className="linkB" to="/signin">
                    Signin
                  </Link>
                </li>
                <li>
                  <Link className="linkB" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>

        {/* {props.children} */}
        <div>
          {/* <h1>Welcome to TECHONE</h1> */}
          <CustomRouter />
        </div>
      </div>
    </Router>
  );
}

export default App;
