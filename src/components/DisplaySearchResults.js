import React from "react";
import studentsData from "./studentsData";

function DisplaySearchResults(props) {
  const HeaderItems = [
    "Student ID",
    "First Name",
    "Last Name",
    "Mailing Address",
    "GPA",
    "eMail",
  ];
  const filteredItems = studentsData.filter((student) => {
    if (
      props.value.studentId &&
      props.value.lastName &&
      props.value.firstName
    ) {
      return (
        student.firstName === props.value.firstName &&
        student.lastName === props.value.lastName &&
        student.studentId === props.value.studentId
      );
    } else if (
      props.value.studentId ||
      props.value.lastName ||
      props.value.firstName
    ) {
      return (
        student.firstName === props.value.firstName ||
        student.lastName === props.value.lastName ||
        student.studentId === parseInt(props.value.studentId)
      );
    } else {
      console.log("in else");
      return null;
    }
  });
  console.log(filteredItems);
  return (
    <div class="table-responsive">
      <table class="table table-bordered ">
        <thead class="thead-dark">
          <tr>
            {HeaderItems.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(filteredItems).map((k, i) => {
            let data = filteredItems[k];
            return (
              <tr key={i}>
                <td>{data.studentId}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.mailingAddress}</td>
                <td>{data.gpa}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DisplaySearchResults;
