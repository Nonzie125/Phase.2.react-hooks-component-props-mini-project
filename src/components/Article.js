import React from 'react';


const Article = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>Article {index + 1}</h2>
          <p>{post}</p>
          <h3>{post.title}</h3>
          <small>{post.date}</small>
          <p>{post.preview}</p>
        </div>
      ))}
    </div>
  );
};

export default Article;


