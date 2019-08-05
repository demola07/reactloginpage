import React from "react";
import { BrowserRouter as R, Route, Link } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Blog from "./Blog";
import Layout from "./Layout";
import PublishPost from "./PublishPost";
// import JobApplications from "./JobApplications";

const CustomRouter = () => {
  return (
    <R>
      {/* <Route path="/JobApplications" component={JobApplications} /> */}
      <Route path="/" exact component={Blog} />
      {!window.localStorage.getItem("user") && (
        <div>
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
        </div>
      )}
      <Route path="/Blog" component={Blog} />
      {window.localStorage.getItem("user") && (
        <Route path="/PublishPost" component={PublishPost} />
      )}
    </R>
  );
};

export default CustomRouter;
