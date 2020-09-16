import React from "react";
import studentsData from "./studentsData";

function DisplayStudents() {
  const HeaderItems = [
    "Student ID",
    "First Name",
    "Last Name",
    "Mailing Address",
    "GPA",
    "eMail",
  ];
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
          {Object.keys(studentsData).map((k, i) => {
            let data = studentsData[k];
            // console.log(data);
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

export default DisplayStudents;
