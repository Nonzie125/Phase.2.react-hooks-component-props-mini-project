import React from 'react';
import Article from './Article';

const ArticleList = () => {
  const posts = [
    {
      title: "My Page",
      date: "January 1, 1970",
      preview: "I have a degree in Computer Science and have been working as a Software Engineer for a few years now. I have experience in coding and have worked on a few projects. I am good at problem-solving and have strong technical skills",
      content: "1"
    },
    {
      title: "Second Page",
      date: "February 2, 1980",
      preview: "This is the preview of the second article",
      content: "2"
    },
    {
      title: "Third Page",
      date: "March 3, 1990",
      preview: "This is the preview of the third article",
      content: "3"
    }
  ];

  return (
    <div>
      <main>
        <Article posts={posts} />
      </main>
    </div>
  );
};

export default ArticleList;
