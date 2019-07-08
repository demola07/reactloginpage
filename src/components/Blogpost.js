import React from "react";

function Blogpost(props) {
  return (
    <div className="blog">
      <h2 id="tag2">{props.title}</h2>
      <h3 id="tag3">{props.author}</h3>
      <p id="para1">{props.body}</p>
      <h5 id="tag4">Post time: {props.date}</h5>
    </div>
  );
}
export default Blogpost;
