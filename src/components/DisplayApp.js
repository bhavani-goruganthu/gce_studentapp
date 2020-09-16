import React, { Component } from "react";
import DisplayStudents from "./DisplayStudents";
import StudentAddForm from "./StudentAddForm";
import SearchStudents from "./SearchStudents";
import Navbar from "./Navbar";

class DisplayApp extends Component {
  constructor() {
    super();
    this.state = {
      bodycontent1: "Welcome!!",
      bodycontent2:
        "You can Add a student, Search for students and Display all students using this website",
      studentlist: [],
      studentaddform: "",
      searchscreen: "",
    };
    this.handleUpdateHome = this.handleUpdateHome.bind(this);
    this.handleDisplayAll = this.handleDisplayAll.bind(this);
    this.handleAddStudent = this.handleAddStudent.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.updatebodycontent1 = this.updatebodycontent1.bind(this);
  }

  handleUpdateHome() {
    this.setState({
      bodycontent1: "Welcome!!",
      bodycontent2:
        "You can Add a student, Search for students and Display all students using this website",
      studentlist: [],
      studentaddform: "",
      searchscreen: "",
    });
  }

  handleDisplayAll() {
    let studenttable = <DisplayStudents />;
    this.setState({
      bodycontent1: "Students List",
      bodycontent2: "",
      studentlist: studenttable,
      studentaddform: "",
      searchscreen: "",
    });
  }

  updatebodycontent1(text) {
    this.setState({ bodycontent1: text });
  }
  handleAddStudent() {
    let studentaddform = (
      <StudentAddForm updatebodycontent1={this.updatebodycontent1} />
    );
    this.setState({
      bodycontent2: "",
      studentlist: [],
      studentaddform: studentaddform,
      searchscreen: "",
    });
  }

  handleSearch() {
    let searchform = <SearchStudents />;
    this.setState({
      bodycontent1: "Search students using below filters :",
      bodycontent2: "",
      studentlist: "",
      studentaddform: "",
      searchscreen: searchform,
    });
  }
  render() {
    return (
      <div container-fluid>
        <Navbar
          key={this.state}
          handleUpdateHome={this.handleUpdateHome}
          handleDisplayAll={this.handleDisplayAll}
          handleAddStudent={this.handleAddStudent}
          handleSearch={this.handleSearch}
        />
        <div class="bodycontent container">
          <div>
            <p>
              <b>{this.state.bodycontent1}</b>
            </p>
            <div>
              {this.state.bodycontent2}
              {this.state.studentlist}
              {this.state.studentaddform}
              {this.state.searchscreen}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayApp;
