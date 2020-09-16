import React from "react";
import headerimage from "../students.jpg";

function Header() {
  return (
    <div class="container-fluid">
      <header className="headercss container-fluid">
        <img
          src={headerimage}
          alt="student"
          class="rounded"
          width="180"
          height="100"
        />
        Student Management
      </header>
    </div>
  );
}
export default Header;
