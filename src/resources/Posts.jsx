import { useEffect, useState } from "react";
import React from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  console.log("Posts", posts);

  useEffect(() => {
    fetch("http://localhost:3030/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.result));
  }, []);

  return (
    <ul>
      {posts.map((post, index) => {
        return (
          <li key={index}>
            <p>Title: {post.title}</p>
            <p>Description: {post.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
