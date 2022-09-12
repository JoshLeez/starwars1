import React from "react";
import github from "../../image/github.png"
import "./About.css";

function About() {
  return (
    <>
      <div style={{margin: "20px 10px" }}>
        <h2 className="font-bold text-2x1">About this project</h2>
        <p>
          This project was build with Reactjs library and Bootstrap as an CSS
          Framework to help for better UI/UX on the website.
          As the API was used from <a href="https://swapi.dev/">https://swapi.dev/</a>
        </p>
      </div>
      <div style={{margin: "20px 10px" }}>
        <h5 className="font-bold text-2x1">My other project</h5>
        <p> 
         I have work some other project, feel free to check it out on my github. 
        </p>
      </div>
      <a href="https://github.com/JoshLeez" rel={"noreferrer"} target={'_blank'}><img src={github} className="image" alt="github"/></a>
      </>
  );
}

export default About;
