import React, { Component } from "react";
import { render } from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  cookie:''
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({cookie: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const data={
      sequence:this.state.value,
      matching_partner:"None"
    }
    fetch("/api/dna/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          DNA Sequence:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;






