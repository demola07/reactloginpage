import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Blog from "./Blog";

import PublishPost from "./PublishPost";

// const CustomRouter = () => {
//   return (
//     <div>
//       <Route path="/" exact component={Layout} />
//       {!window.localStorage.getItem("user") && (
//         <div>
//           <Route path="/Signin" component={Signin} />
//           <Route path="/Signup" component={Signup} />
//         </div>
//       )}

//       {window.localStorage.getItem("user") && (
//         <div>
//           {/* <Route path="/" component={Layout} /> */}
//           <Route path="/PublishPost" component={PublishPost} />
//           <Route path="/Blog" component={Blog} />
//         </div>
//       )}
//     </div>
//   );
// };

const CustomRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signin} />
      {!window.localStorage.getItem("user") && (
        <div>
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
        </div>
      )}

      {window.localStorage.getItem("user") && (
        <div>
          <Route path="/PublishPost" component={PublishPost} />
          <Route path="/Blog" component={Blog} />
        </div>
      )}
    </Switch>
  );
};

export default CustomRouter;
