import { useEffect, useState } from "react";

const URL = "http://localhost:3030/posts";

export function PostsPage() {
  const [posts, setPosts] = useState([]);
  async function getPosts() {
    const response = await fetch(URL);
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Posts Page</h1>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>№</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {posts.map((post, index) => (
          <tbody key={index}>
            <tr>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}
