// src/Blogs.jsx
import React from 'react';
import Card from './Card';

const Blogs = () => {
  return (
    <div>
      <Card
        title="Blog Title 1"
        date="January 1, 2023"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin at justo nec leo consequat scelerisque ut id libero."
      />

      {/* Repeat the above block for other blogs */}
    </div>
  );
};

export default Blogs;
