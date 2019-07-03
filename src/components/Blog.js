import React, { Component } from "react";
import Name from "./Name";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cohortList: [
        {
          id: 1,
          name: "Mr Ademola",
          age: 22
        },
        {
          id: 2,
          name: "Mr Somto",
          age: 70
        },
        {
          id: 3,
          name: "Mr Stanley",
          age: 30
        },
        {
          id: 4,
          name: "Mrs Meka",
          age: 40
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.cohortList.map(cohort => {
          return <Name key={cohort.id} name={cohort.name} age={cohort.age} />;
        })}
      </div>
    );
  }
}

export default Blog;
