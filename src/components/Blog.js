import React, { Component } from "react";
import Layout from "./Layout";
import Blogpost from "./Blogpost";

import axios from "axios";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPosts: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.post("http://localhost:8080/getposts");
      // console.log(response);
      this.setState({
        blogPosts: response.data
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <Layout>
        <div>
          {this.state.blogPosts.map(post => {
            return (
              <Blogpost
                key={post.title}
                title={post.title}
                author={post.author}
                body={post.body}
                date={post.date}
              />
            );
          })}
        </div>
        <Blogpost />
      </Layout>
    );
  }
}

export default Blog;
