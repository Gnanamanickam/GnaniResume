import React from "react";
import ReactDOM from "react-dom";

import Sidebar from "./Component/Sidebar";
import HomePage from "./Component/Home";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Skill from "./Component/Skill";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";


// import "assets/vendor/nucleo/css/nucleo.css";
// import "assets/vendor/font-awesome/css/font-awesome.min.css";
// import "assets/css/argon-design-system-react.css";

function App() {
  return (
      <div id="container-wrap">
        <Sidebar></Sidebar>
        <div id="colorlib-main">
          <HomePage></HomePage>
          <About></About>
          <Experience></Experience>
          <Skill></Skill>
          <Blog></Blog>
          <Contact></Contact>
        </div>
    </div>
  );
}

export default App;
