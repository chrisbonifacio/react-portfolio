import React from "react";
import "../App.css";

function NavTabs(props) {
  return (
    <div>
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        id="mySidebar"
      >
        <br />
        <div className="w3-container">
          <a
            href="/"
            onClick={"w3_close()"}
            className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
            title="close menu"
          >
            <i className="fa fa-remove"></i>
          </a>
          <img
            id="sidebar-img"
            src="imgs/Smooke_Headshot.jpeg"
            className="w3-round"
            alt="headshot"
          />
          <br />
          <br />
          <h4>
            <b>DANA SMOOKE</b>
          </h4>
        </div>
        <div className="w3-bar-block">
          <div className="w3-bar-item w3-button w3-padding">
            <a
              href="#about"
              onClick={() => props.handlePageChange("About")}
              className={props.currentPage && "About"}
            >
              <i className="fa fa-user fa-fw w3-margin-right"></i>ABOUT
            </a>
          </div>
          <div className="w3-bar-item w3-button w3-padding">
            <a
              href="#portfolio"
              onClick={() => props.handlePageChange("Portfolio")}
              className={props.currentPage && "Portfolio"}
            >
              <i className="fa fa-th-large fa-fw w3-margin-right"></i>PORTFOLIO
            </a>
          </div>
          <div className="w3-bar-item w3-button w3-padding">
            <a
              href="#contact"
              onClick={() => props.handlePageChange("Contact")}
              className={props.currentPage && "Contact"}
            >
              <i className="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT
            </a>
          </div>
        </div>
        <div className="w3-panel w3-large">
          <i>
            <a
              className="fa fa-globe w3-hover-opacity"
              href="https://www.danasmooke.com/"
              rel="noreferrer"
              target="_blank"
              style={{ margin: 10 + "px" }}
            ></a>
          </i>
          <i>
            <a
              className="fa fa-github w3-hover-opacity"
              href="https://github.com/dsmooke"
              rel="noreferrer"
              target="_blank"
              style={{ margin: 10 + "px" }}
            ></a>
          </i>
          <i>
            <a
              className="fa fa-linkedin w3-hover-opacity"
              href="https://www.linkedin.com/in/dana-smooke/"
              rel="noreferrer"
              target="_blank"
              style={{ margin: 10 + "px" }}
            ></a>
          </i>
        </div>

        {/* Overlay effect when opening sidebar on small screens */}
        <div
          className="w3-overlay w3-hide-large w3-animate-opacity"
          onClick={"w3_close()"}
          title="close side menu"
          id="myOverlay"
        ></div>
        <p className="w3-text-grey">Template by W3.CSS</p>
      </nav>
    </div>
  );
}
export default NavTabs;
