import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginLeft: "auto",
          color: "#fff",
          marginRight: "auto",
          marginTop: "100px",
          width: "60%",
          background: "gray",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            textTransform: "uppercase",
            fontFamily: "Anton, sans-serif",
          }}
        >
          Joe
        </h1>
        <p style={{ textAlign: "justify", fontFamily: "Oxygen, sans-serif" }}>
        </p>
      </div>
    );
  }
}

export default About;
