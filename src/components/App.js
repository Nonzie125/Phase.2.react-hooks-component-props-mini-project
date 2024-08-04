import React from "react";
import blogData from "../data/blog";
import Article from "../Article.js/Article.js";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Head name="Mwende"/>;
      <About img="src" about="text"/>
      <ArticleList posts="ArticleList"/>
      <Article title="title of article" date="January 1,1970" preview="display preview" />
    
    </div>
  );
}

export default App;
