import * as $ from "jquery";
import Post from "@models/Post";
// import json from "./assets/json.json";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import orange from "@/assets/orange";
import React from "react";
import { createRoot } from "react-dom/client";
import "@/babel";
import "@/styles/styles";
import "@/styles/less";
import "@/styles/sass";

const post = new Post("Webpack Post Title", orange);
// $("pre").html(post.toString());

const App = () => (
  <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div className="logo" />
    <hr />
    <pre className="code" />
    <hr />
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>Scss</h2>
    </div>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App tab="home" />);

// console.log("JSON:", json);

// console.log("XML:", xml);

// console.log("CSV:", csv);
