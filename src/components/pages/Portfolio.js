import React from "react";

const Portfolio = () => (
  <div>
    {/*<!-- !PAGE CONTENT! --></div>*/}
    <main className="w3-main " style={{ marginLeft: 300 + "px" }}>
      {/*<!-- Header -->*/}
      <header id="portfolio">
        <a href="./Portfolio.js">
          <img
            src="imgs/Smooke_Headshot.png"
            className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
            id="avatar"
            alt="headshot"
          />
        </a>
        <span
          className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
          onclick="w3_open()"
        >
          <i className="fa fa-bars"></i>
        </span>
        <div className="w3-container">
          <h1>
            <b>My Portfolio</b>
          </h1>
          <div className="w3-section w3-padding-16 "></div>
        </div>
      </header>

      {/*<!--Web Development Portfolio-->*/}

      <section className="w3-container ">
        <h2 id="web-development">Web Development</h2>
        <div className="w3-section w3-bottombar w3-padding-16"></div>

        {/*<!-- First Photo Grid-->*/}

        <div className="w3-row-padding ">
          <div className="w3-third w3-container w3-margin-bottom ">
            <img
              src="imgs/refactored-demo.png"
              alt="go-for-launch"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
              alt="launch"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Refactored Website: Semantic HTML</b>
              </p>
              <p>
                A refactored website whose source code was modified to improve
                its operation without altering its functionality and to adhere
                to accessibility standards by using Semantic HTML. Uses HTML and
                CSS. View deployed app{" "}
                <a
                  href="https://dsmooke.github.io/go-for-launch/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . View on{" "}
                <a
                  href="https://github.com/dsmooke/go-for-launch"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub.
                </a>
              </p>
            </div>
          </div>
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/query_cuisine_pic_1.png"
              alt="github-QueryCuisine"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
              alt="project"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Query Cuisine</b>
              </p>
              <p>
                A simple food app that allows users to search for recipes based
                on ingredients that they have on hand. Uses HTML, CSS,
                Spoonacular API, JavaScript, jQuery, and Bootstrap. View
                deployed app{" "}
                <a
                  href="https://jdavidrice.github.io/Query-Cuisine/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . View on{" "}
                <a
                  href="https://github.com/dsmooke/Query-Cuisine"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub.
                </a>
              </p>
            </div>
          </div>
          <div className="w3-third w3-container">
            <img
              src="imgs/bookswap-recs-demo2.png"
              alt="github-BookSwap"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Book Swap</b>
              </p>
              <p>
                An application that generates book recommendations based on the
                user's search and allows a user to save books to a wishlist, .
                Uses HTML, CSS, Google Books API, JavaScript, Node, Express,
                MySQL, Sequelize, and Handlebars. View deployed app{" "}
                <a
                  href="https://super-duper-bookclub.herokuapp.com/?"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . View on{" "}
                <a
                  href="https://github.com/dsmooke/super-duper-bookclub"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub.
                </a>
              </p>
            </div>
          </div>
        </div>

        {/*<!--Second Photo Grid-->*/}
        <div className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/planner-demo.png"
              alt="github-WorkdayPlanner"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Workday Planner</b>
              </p>
              <p>
                A simple workday scheduler application that allows a user to
                save events for each hour of the day. Uses Javascript, jQuery,
                Moment.js, Third-Party-APIs, and Bootstrap. View deployed app{" "}
                <a
                  href="https://dsmooke.github.io/workday-daily-planner/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . View on{" "}
                <a
                  href="https://github.com/dsmooke/workday-daily-planner"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub.
                </a>
              </p>
            </div>
          </div>

          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/password-demo.png"
              alt="github-PasswordGenerator"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Password Generator</b>
              </p>
              <p>
                A note taker application that can be used to write, save, and
                delete notes. Uses HTML, CSS, JavaScript, and Bootstrap. View
                deployed app{" "}
                <a
                  href="https://dsmooke.github.io/password-generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . View on{" "}
                <a
                  href="https://github.com/dsmooke/password-generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub.
                </a>
              </p>
            </div>
          </div>
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/miro-webflow-covid-companion.png"
              alt="github-Covid"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />

            <div className="w3-container w3-white">
              <p>
                <b>COVID Companion</b>
              </p>
              <p>
                An application that lets user share their Covid-19 status with
                other users. Uses HTML, CSS, JavaScript, React, Express, AWS
                Amplify, Moment.js, MongoDB, Mongoose, and Tachyons. View
                deployed app{" "}
                <a
                  href="https://covid-companion21.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . View on{" "}
                <a
                  href="https://github.com/dsmooke/covid-companion"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*<!--Theater Portfolio-->*/}
      <section class="w3-container">
        <h2 id="web-development">Theater</h2>
        <div className="w3-section w3-bottombar w3-padding-16"></div>
        {/*<!-- Third Photo Grid-->*/}
        <div class="w3-row-padding">
          <div class="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/Tenn_6.jpg"
              alt="thst-costumes"
              style={{ width: 100 + "%" }}
              class="w3-hover-opacity"
            />
            <div class="w3-container w3-white">
              <p>
                <b>Costume Design</b>
              </p>
              <p>
                The overlap between fashion history and emotion, or how a
                garment’s pattern, color, and texture can reveal a character’s
                emotions, personality, and subtext. My costume trademarks
                include the use of bold colors and simplicity in design.
                <a
                  href="https://www.danasmooke.com/theaterportfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  View more.
                </a>
              </p>
            </div>
          </div>
          <div class="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/1776.jpg"
              alt="thst-directing"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div class="w3-container w3-white">
              <p>
                <b>Directing</b>
              </p>
              <p>
                "In order to make them laugh you must understand what links us
                all together. Comedy is universal."
                <a
                  href="https://www.danasmooke.com/theaterportfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  View more.
                </a>
              </p>
            </div>
          </div>

          <div class="w3-third w3-container">
            <img
              src="imgs/macbeth-prod2.jpg"
              alt="thst-production"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div class="w3-container w3-white">
              <p>
                <b>Production Design</b>
              </p>
              <p>
                Senior Thesis in Production and Costume Design.
                <a
                  href="https://www.danasmooke.com/theaterportfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  View more.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*<!--Artwork Portfolio-->*/}
      <section className="w3-container">
        <h2 id="arts">Artwork</h2>
        <div className="w3-section w3-bottombar w3-padding-16"></div>
        {/*<!--Fourth Photo Grid-->*/}
        <div className="w3-row-padding">
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/self-portrait.jpg"
              alt="art-oil"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Oil</b>
              </p>
              <p>
                Georgia O'Keefe style. Simple subjects but high contrast.
                <a
                  href="https://www.danasmooke.com/art-portfolio-1#/oil/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View works.
                </a>
              </p>
            </div>
          </div>

          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/art-pencil.jpg"
              alt="art-pencil"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Graphite Pencil</b>
              </p>
              <p>
                Landscapes with surreal elements.
                <a
                  href="https://www.danasmooke.com/art-portfolio-1#/watercolor/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View works.
                </a>
              </p>
            </div>
          </div>
          <div className="w3-third w3-container w3-margin-bottom">
            <img
              src="imgs/art-watercolor.jpg"
              alt="art-oil"
              style={{ width: 100 + "%" }}
              className="w3-hover-opacity"
            />
            <div className="w3-container w3-white">
              <p>
                <b>Watercolor</b>
              </p>
              <p>
                Bioluminescence inspiration.
                <a
                  href="https://www.danasmooke.com/art-portfolio-1#/watercolor-1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View works.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Portfolio;
