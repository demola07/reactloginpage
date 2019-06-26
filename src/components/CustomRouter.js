import React from "react";
import { BrowserRouter as R, Route, Link } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";

const CustomRouter = () => {
  return (
    <R>
      <Route path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
    </R>
  );
};

export default CustomRouter;
