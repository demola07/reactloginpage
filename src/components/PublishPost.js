import React, { Component } from "react";
import axios from "axios";

class PublishPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {
        title: "",
        author: "",
        body: "",
        date: new Date()
      },
      postSuccess: "",
      postFailed: "",
      responseMessage: ""
    };
    this.baseState = this.state;
  }

  handleChange = event => {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    let detailsN = this.state.details;

    detailsN[name] = value;
    this.setState({
      details: detailsN
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/publishpost", this.state.details)
      .then(res => {
        // console.log(res);
        const data = res.data;
        data.status
          ? this.setState({
              responseMessage: data.message,
              postSuccess: true
            })
          : this.setState({
              responseMessage: data.message,
              postFailed: true
            });
        setTimeout(() => {
          this.setState(this.baseState);
        }, 2000);
      })
      .catch(err => {
        console.log(err);
        alert(`Error Submitting post`);
      });
  };

  render() {
    return (
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
            value={this.state.body}
            onChange={this.handleChange}
            className="form-textarea"
            placeholder="Enter Post"
          />
          <br />
          <input type="submit" value="publish post" className="btn" />
        </form>
        {this.state.postSuccess && (
          <div>
            <button className="btn" id="btn1">
              {this.state.responseMessage}
            </button>
          </div>
        )}
        {this.state.postFailed && (
          <div>
            <button className="btn" id="btn2">
              {this.state.responseMessage}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default PublishPost;
