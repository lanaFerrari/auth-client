import { useEffect, useState } from "react";
import React from "react";

export default function PostsList({ userEmail }) {
  const [posts, setPosts] = useState([]);
  console.log("Posts", posts);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    console.log("TOKEN", token);

    const fetchOptions = {
      method: "GET",
      headers: {
        authorization: token,
      },
    };

    fetch("http://localhost:3030/posts", fetchOptions)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [userEmail]);

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
