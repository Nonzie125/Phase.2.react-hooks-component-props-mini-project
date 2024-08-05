import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Mwende"/>;
      <About image="/home/amali/Downloads/WhatsApp Image 2024-08-04 at 12.57.09.jpeg" alt="blog logo" about="I deliver you code"/>;
      <ArticleList posts="ArticleList"/>;
    </div>
  );
}

export default App;
