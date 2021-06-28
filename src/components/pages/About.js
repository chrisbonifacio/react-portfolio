import React from "react";
import "../../App.css";

const About = () => (
  <div>
    {/*<!-- Images of Me -->*/}
    <div className="w3-container w3-padding-large w3-center" id="about">
      <div className="w3-col m12">
        <img
          src="imgs/silhouette.JPG"
          alt="Me"
          style={{ width: 50 + "%", margin: 20 + "px" }}
        />
      </div>
    </div>
    <section
      id="aboutMe"
      className="w3-container"
      style={{ marginLeft: 300 + "px" }}
    >
      <div className="w3-container w3-padding-large">
        <h2>About Me</h2>
        <p>
          My name is Dana Smooke but everyone calls me Danny (make sure to spell
          it like a boy's name!). I am 25 years old, and I graduated from Yale
          University with a double major in Theater Studies and Art History.
          <p>
            I first got a taste for web design after I took a summer course on
            Adobe InDesign and Photoshop. I loved being able to add my own style
            to professional looking layouts. When COVID-19 hit,the need for
            developers skyrocketed. It became clear that all schools would need
            to transition to some form of online teaching platform. I spent the
            summer converting my father's handwritten technical notes into PNG
            images by using LaTeX.I liked what I was doing and wanted to learn
            more.
          </p>
          <p>
            When I'm not in the theater or behind the computer, you can find me
            working outside in the yard, doing a crossword puzzle, working out,
            cooking, or drawing political cartoons.
          </p>
        </p>
      </div>
    </section>
    {/*<!--Technical Skills-->*/}
    <section
      className="w3-container w3-padding-large"
      style={{ margin: 20 + "px" }}
      style={{ marginLeft: 300 + "px" }}
    >
      <h2>Technical Skills</h2>
      {/*<!-- Progress bars / Skills --> */}
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>Bootstrap</li>
      <li>Git & GitHub</li>
      <li>Node.js</li>
      <li>Express</li>
      <li>React.js</li>
      <li>Inquirer</li>
      <li>APIs</li>
      <li>DOM</li>
      <li>MongoDB</li>
      <li>MySQL</li>
      <li>Sequelize</li>
      <li>NoSQL/Mongoose</li>
      <li>LaTeX</li>
      <li>Adobe Photoshop & InDesign</li>
      <li>QLab</li>
      <li>Procreate</li>
      <li>Visual & Performing Arts</li>

      {/*<!--Download Resume-->*/}
      <p>
        {/* <a></a> */}
        <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
          <a
            href="imgs/Coding-Resume-DSmooke.pdf"
            download="codingResumeDsmooke"
            rel="noreferrer"
          >
            <i className="fa fa-download w3-margin-right"></i>Download Resume
          </a>
        </button>
      </p>
      <hr />
    </section>
  </div>
);

export default About;
