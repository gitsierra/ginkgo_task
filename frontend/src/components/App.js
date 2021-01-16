import React, { Component } from "react";
import { render, createPortal } from "react-dom";
import NameForm from "./NameForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading",
    };
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

  rerenderParentCallback() {
    fetch("api/dna")
      .then((response) => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then((data) => {
        this.setState(() => {
          return {
            data,
            loaded: true,
          };
        });
      });
  }

  componentDidMount() {
    fetch("api/dna")
      .then((response) => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then((data) => {
        this.setState(() => {
          return {
            data,
            loaded: true,
          };
        });
      });
  }
  handleClick(dnaId, event) {
    const requestOptions = {
      method: "GET",
    };

    fetch("/api/dna/" + dnaId + "/delete/", requestOptions).then((response) => {
      event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    });
  }
  render() {
    return (
      <div>
        <NameForm rerenderParentCallback={this.rerenderParentCallback} />
        <ul>
          {this.state.data.map((dna) => {
            return (
              <span key={dna.id}>
                <li>
                  Sequence:{dna.sequence} - {dna.matching_partner} - Timestamp:
                  {dna.checked_at}
                  <button
                    onClick={(e) => {
                      this.handleClick(dna.id, e);
                    }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
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
