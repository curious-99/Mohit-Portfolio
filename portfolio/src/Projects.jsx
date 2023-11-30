// src/Projects.jsx
import React from 'react';
import Card from './Card';

const Projects = () => {
  return (
    <div>
      <Card
        title="Book-Store"
        date="October ,2023"
        description="Meet Book Store Buddy, your go-to web companion for managing book collections! A dynamic web application built on the MERN stack, the Book Store enables users to effortlessly organize their book collections."
        sourceLink="https://github.com/curious-99/Book-Store-MERN"
      />

      {/* Repeat the above block for other projects */}
    </div>
  );
};

export default Projects;
