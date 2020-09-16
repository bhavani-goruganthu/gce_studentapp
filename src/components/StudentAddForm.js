import React, { Component } from "react";
import studentsData from "./studentsData";
import DisplayStudents from "./DisplayStudents";

class StudentAddForm extends Component {
  constructor(props) {
    super();
    this.state = {
      studentId: studentsData[studentsData.length - 1].studentId + 1,
      firstName: "",
      lastName: "",
      mailingAddress: "",
      gpa: 0.0,
      email: "",
      displayaftersubmit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type } = event.target;
    if (type === "number") {
      if (value <= 4.0 && value >= 0) this.setState({ [name]: value });
      else alert("GPA should be between 0 & 4");
    } else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.mailingAddress === "" ||
      this.state.email === ""
    ) {
      alert("Enter all fields..");
    } else {
      studentsData.push({
        studentId: this.state.studentId,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        mailingAddress: this.state.mailingAddress,
        gpa: this.state.gpa,
        email: this.state.email,
      });
      console.log("Submitted");
      this.setState({ displayaftersubmit: true });
    }
  }

  render() {
    if (this.state.displayaftersubmit === true) {
      this.props.updatebodycontent1("Students List");
      this.state.displayaftersubmit = false;
      this.state.firstName = "";
      this.state.lastName = "";
      this.state.mailingAddress = "";
      this.state.email = "";
      this.state.gpa = 0.0;
      this.state.studentId =
        studentsData[studentsData.length - 1].studentId + 1;
      return <DisplayStudents />;
    } else {
      this.props.updatebodycontent1("Add a Student");
      return (
        <div class="formcss">
          <form onSubmit={this.handleSubmit}>
            <label for="studentid">Student Id:</label>
            <br />
            <input type="text" value={this.state.studentId} name="studentId" />
            <br />
            <label for="firstname">First Name:</label>
            <br />
            <input
              type="text"
              value={this.state.firstName}
              name="firstName"
              placeholder="John"
              onChange={this.handleChange}
            />
            <br />
            <label for="lastname">Last Name:</label>
            <br />
            <input
              type="text"
              value={this.state.lastName}
              name="lastName"
              placeholder="Doe"
              onChange={this.handleChange}
            />
            <br />
            <label for="mailaddress">Mailing Address:</label>
            <br />
            <input
              type="text"
              value={this.state.mailingAddress}
              name="mailingAddress"
              placeholder="1312 Lakeshore Circle"
              onChange={this.handleChange}
            />
            <br />
            <label for="gpa">GPA:</label>
            <br />
            <input
              type="number"
              value={this.state.gpa}
              name="gpa"
              placeholder="gpa"
              onChange={this.handleChange}
            />
            <br />
            <label for="email">Email:</label>
            <br />
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="@gmail.com"
            />
            <br />
            <br />
            <button>Submit</button>
          </form>
        </div>
      );
    }
  }
}

export default StudentAddForm;
