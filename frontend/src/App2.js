import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Posts from "./components/Posts";
function App2() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [postperpage, setPostsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
      console.log(posts);
    };
    fetchPosts();
  }, []);

  let indexofLastPage = currentpage * postperpage;
  let indexofFirstPage = indexofLastPage - postperpage;
  let currentposts = posts.slice(indexofFirstPage, indexofLastPage);
  const changecurrentpage = (n) => {
    setCurrentPage((prev) => prev + n);
    indexofLastPage = currentpage * postperpage;
    indexofFirstPage = indexofLastPage - postperpage;
    currentposts = posts.slice(indexofFirstPage, indexofLastPage);
  };
  return (
    <div>
      <h1>Posts</h1>
      <Posts posts={currentposts} loading={loading} />
      <h1>move</h1>
      {currentpage > 1 && (
        <button
          className="m-2 p-2 bg-slate-300"
          onClick={() => {
            changecurrentpage(-1);
          }}
        >
          previous
        </button>
      )}
      <button
        onClick={() => {
          changecurrentpage(1);
        }}
        className="m-2 p-2 bg-slate-300"
      >
        {currentpage + 1}
      </button>
      <button
        onClick={() => {
          changecurrentpage(2);
        }}
        className="m-2 p-2 bg-slate-300"
      >
        {currentpage + 2}
      </button>
      <button
        onClick={() => {
          changecurrentpage(3);
        }}
        className="m-2 p-2 bg-slate-300"
      >
        {currentpage + 3}
      </button>
      <button
        onClick={() => {
          changecurrentpage(1);
        }}
        className="m-2 p-2 bg-slate-300"
      >
        Next
      </button>
    </div>
  );
}

export default App2;
