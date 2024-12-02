import React from "react";
import computer from "../img/comp.png";
import cv from "../img/cv.png";
import itunes from "../img/itunes.png";
import todo from "../img/to-do-list.png";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio-body">
        <div className="portfolio-item">
          <a href="/assets/store.zip" className="nav-link" download>
            <img src={computer} className="computer" alt="computer" />
          </a>
          <p>Online Store</p>
        </div>
        <div className="portfolio-item">
          <a href="/assets/itunes-search-app.zip" className="nav-link" download>
            <img src={itunes} className="itunes" alt="itunes" />
          </a>
          <p>iTunes Search App</p>
        </div>
        <div className="portfolio-item">
          <a href="/assets/to-do-app.zip" className="nav-link" download>
            <img src={todo} className="todo" alt="todo" />
          </a>
        <p>To-Do App</p>        
        </div>
        <div className="portfolio-item">
          <a href="/assets/Casey CV.pdf" className="nav-link" download>
            <img src={cv} className="cv" alt="cv" />
          </a>
        <p>Casey CV</p>        
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
