import React, { Component } from "react";
import DisplaySearchResults from "./DisplaySearchResults";

class SearchStudents extends Component {
  constructor() {
    super();
    this.state = {
      studentId: 0,
      firstName: "",
      lastName: "",
      searchresults: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleSearchSubmit(event) {
    event.preventDefault();
    if (
      this.state.firstName === "" &&
      this.state.lastName === "" &&
      this.state.studentId === ""
    ) {
      alert("Enter atleast one search parameter..");
    } else {
      let searchresults = <DisplaySearchResults value={this.state} />;
      this.setState({ searchresults: searchresults });
    }
  }

  render() {
    return (
      <div class="container">
        <div class="searchstyle container">
          <form onSubmit={this.handleSearchSubmit}>
            <label for="studentid">Student Id:</label>
            <input
              type="text"
              value={this.state.studentId}
              name="studentId"
              placeholder="Student ID"
              onChange={this.handleChange}
            />
            <br />
            (or)
            <br />
            <label for="firstname">First Name:</label>
            <input
              type="text"
              value={this.state.firstName}
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <br />
            (or)
            <br />
            <label for="lastname">Last Name:</label>
            <input
              type="text"
              value={this.state.lastName}
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button>Search for Students</button>
          </form>
        </div>
        <br />
        <div>
          <p>
            <b>Search Results</b>
          </p>
          {this.state.searchresults}
        </div>
      </div>
    );
  }
}

export default SearchStudents;
