import React, { useState } from "react";

const BlogContext = React.createContext();

export function BlogProvider({ children }) {
  const [blogPosts, setBlogPosts] = useState([]);

  function addBlogPost() {
    setBlogPosts([
      ...blogPosts,
      { title: `blog post #${blogPosts.length + 1}` },
    ]);
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
