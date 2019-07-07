import React from "react";
import { BrowserRouter as R, Route, Link } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Blog from "./Blog";

const CustomRouter = () => {
  return (
    <R>
      <Route path="/" exact component={Blog} />
      <Route path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
    </R>
  );
};

export default CustomRouter;
