import React, { Component } from "react";
import axios from "axios";
import Layout from "./Layout";

class PublishPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      body: "",
      date: new Date()
    };
  }

  handleChange = event => {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/publishpost", this.state)
      .then(res => {
        console.log(res);
        alert(`Post Successfully Saved`);
      })
      .catch(err => {
        console.log(err);
        alert(`Error Submitting post`);
      });
  };

  render() {
    return (
      <Layout>
        <div className="textA">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleChange}
              className="form-input"
            />
            <br />
            <input
              type="Author"
              name="author"
              placeholder="Author"
              value={this.state.author}
              onChange={this.handleChange}
              className="form-input"
            />
            <br />
            <textarea
              name="body"
              // rows="10"
              // cols="50"
              value={this.state.body}
              onChange={this.handleChange}
              className="form-textarea"
              placeholder="Enter Post"
            />
            <br />
            <input type="submit" value="publish post" className="btn" />
          </form>
        </div>
      </Layout>
    );
  }
}

export default PublishPost;
