import React from "react";
import blogData from "../data/blog";
import Article from "./Article.js.js";
import Header from "../Header.js/Header.js";
import About from "./About.js.js";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Mwende"/>;
      <About image="/home/amali/Downloads/WhatsApp Image 2024-08-04 at 12.57.09.jpeg" alt="blog logo" about="I deliver you code"/>;
      <ArticleList posts="ArticleList"/>;
      <Article title="title of article" date="January 1,1970" preview="display preview" />
    
    </div>
  );
}

export default App;
