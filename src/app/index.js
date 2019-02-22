import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

import "./index.scss";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="Header">
          <h1>John Snow</h1>
          <hr />
          <p className="Header--contact">Phone: +37063339991</p>
          <p className="Header--contact">
            Email:{" "}
            <a
              href="mailto:John@Snow.hbo"
              target="_blank"
              rel="noopener noreferrer"
            >
              John@Snow.hbo
            </a>
          </p>
          <p className="Header--summary">
            Wafer apple pie cheesecake tootsie roll sweet roll jelly-o liquorice
            jujubes. Dessert carrot cake danish lollipop. Oat cake tart chupa
            chups pie toffee donut. Liquorice brownie lollipop bonbon carrot
            cake candy canes.
          </p>
          <img
            className="Header--profile-picture"
            alt="This is me"
            src="https://images-na.ssl-images-amazon.com/images/I/61IavHElJOL._SY741_.jpg"
          />
        </header>
        <main>
          <section className="Section">
            <div className="Section--left">
              <h3>Education</h3>
            </div>
            <div className="Section--right">
              <h3>SpecOps University</h3>
              <p>
                <span>Major:</span> Close Quarter Battle
              </p>
              <p>
                <span>Minor:</span> Tactical Defence
              </p>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Skills</h3>
            </div>
            <div className="Section--right">
              <div>
                <h3>Hacking</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut mattis lectus.
                </p>
              </div>
              <div>
                <h3>Marksmanship</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  ut mattis lectus.
                </p>
              </div>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Experience</h3>
            </div>
            <div className="Section--right">
              <div>
                <div className="Section--right-job-title">
                  <h3>Code Academy</h3>
                  <span> Very Good Student, 2018.10 - present</span>
                </div>
                <ul>
                  <li>HTML</li>
                  <li>CSS/SCSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                </ul>
              </div>
              <div>
                <div className="Section--right-job-title">
                  <h3>School Of Life</h3>
                  <span> Super Human, 1986.07 - present</span>
                </div>
                <ul>
                  <li>Eating</li>
                  <li>Breathing</li>
                  <li>Learning</li>
                  <li>Fighting</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>Hobbies</h3>
            </div>
            <div className="Section--right">
              <p>MMA, Learning, Skydiving, Drawing</p>
            </div>
          </section>
          <section className="Section">
            <div className="Section--left">
              <h3>References</h3>
            </div>
            <div className="Section--right">
              <p>Ask my Coach - Good Luck getting that !!!</p>
            </div>
          </section>
        </main>
        <footer className="footer">
          <a
            href="https://github.com/Rinzler555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/egidijus-balzaris-42584040/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
