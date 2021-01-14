import React, { Component } from "react";
import { render, createPortal } from "react-dom";
import NameForm from "./NameForm"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/dna")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }
  handleClick(dnaId){
    const requestOptions = {
      method: 'GET'
    };
  
    fetch("/api/dna/"+dnaId+"/delete/", requestOptions).then((response) => {
      console.log(response)
      return response;
    }).then((result) => {
      return
    });
  }
  render() {
    return (
    <div>
      <NameForm/>
      <ul>
        {this.state.data.map(dna => {
          return (
            <span key={dna.id}>
              <li >
              ID:{dna.id} - Sequence:{dna.sequence} - Timestamp:{dna.checked_at}
              <button onClick={() => { this.handleClick(dna.id) }} className="delete-btn">Delete</button>
              </li>
            </span>
          );
        })}
      </ul>
    </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);