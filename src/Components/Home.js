import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Home extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
              //className="profile-img"
              //src="images/DSC_5211-00.jpg"
              //alt="Joe"
              />
            </div>
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>HTML | CSS | JS | REACT</p>
              <div className="social-links">
                {/* Twitter */}
                <a href="" rel="noopener noreferrer" target="_blank">
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{"https://twitter.com/CotterchioJoe"}
                </a>
                {/* Github */}
                <a href="" rel="noopener noreferrer" target="_blank">
                  {"https://github.com/josephcotterchio"}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                {/* LinkedIn */}
                <a href="" rel="noopener noreferrer" target="_blank">
                  {"https://www.linkedin.com/in/joe-cotterchio-milligan/"}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
