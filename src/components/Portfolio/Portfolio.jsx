import React from "react";
import "./Portfolio.css";
import course from "../../assets/ocourse.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio-title">
          <p>Portfolio</p>
        </div>
        <div className="boxes">
          <div style={{ backgroundImage: `url(${course})` }} className="box">
            <div className="overlay">
              <span className="">React JS Application</span>
              <div className="overlay-link">
                <a href="https://online-course-taupe.vercel.app/">
                    <button>Demo</button>
                </a>
                <a href="https://github.com/Pegazar/online-course">
                    <button>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${course})` }} className="box">
            <div className="overlay">
              <span className="">React JS Application</span>
              <div className="overlay-link">
                <a href="https://online-course-taupe.vercel.app/">
                    <button>Demo</button>
                </a>
                <a href="https://github.com/Pegazar/online-course">
                    <button>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${course})` }} className="box">
            <div className="overlay">
              <span className="">React JS Application</span>
              <div className="overlay-link">
                <a href="https://online-course-taupe.vercel.app/">
                    <button>Demo</button>
                </a>
                <a href="https://github.com/Pegazar/online-course">
                    <button>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${course})` }} className="box">
            <div className="overlay">
              <span className="">React JS Application</span>
              <div className="overlay-link">
                <a href="https://online-course-taupe.vercel.app/">
                    <button>Demo</button>
                </a>
                <a href="https://github.com/Pegazar/online-course">
                    <button>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${course})` }} className="box">
            <div className="overlay">
              <span className="">React JS Application</span>
              <div className="overlay-link">
                <a href="https://online-course-taupe.vercel.app/">
                    <button>Demo</button>
                </a>
                <a href="https://github.com/Pegazar/online-course">
                    <button>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${course})` }} className="box">
            <div className="overlay">
              <span className="">React JS Application</span>
              <div className="overlay-link">
                <a href="https://online-course-taupe.vercel.app/">
                    <button>Demo</button>
                </a>
                <a href="https://github.com/Pegazar/online-course">
                    <button>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
