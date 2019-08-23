// import React from "react";
// import { Link } from "react-router-dom";

// // console.log(window.localStorage.getItem("user"));

// export default function Layout(props) {
//   const logout = () => {
//     window.localStorage.removeItem("user");
//     window.location.reload();
//   };

//   return (
//     <div>
//       <div className="layout">
//         <nav className="nav">
//           <h1 id="left">
//             <Link className="linkA" to="/">
//               TECHONE Blog
//             </Link>
//           </h1>
//           {/* <div id="clears" /> */}
//           {window.localStorage.getItem("user") && (
//             <ul className="list">
//               <li>
//                 <Link className="linkB" to="/Blog">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link className="linkB" to="/PublishPost">
//                   Publish
//                 </Link>
//               </li>
//               <li>
//                 <Link className="linkB" to="/signin" onClick={logout()}>
//                   Logout
//                 </Link>
//               </li>
//             </ul>
//           )}
//           {!window.localStorage.getItem("user") && (
//             <ul className="list">
//               <li>
//                 <Link className="linkB" to="/signin">
//                   Signin
//                 </Link>
//               </li>
//               <li>
//                 <Link className="linkB" to="/signup">
//                   Signup
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </nav>
//       </div>

//       {/* {props.children} */}
//       <div>
//         <h1>Welcome to TECHONE</h1>
//       </div>
//     </div>
//   );
// }
