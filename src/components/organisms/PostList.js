import React from "react";
import { Link } from "react-router-dom";

export default function PostList(props) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <td>Title</td>
          <td>Body</td>
          <td>Aksi</td>
        </tr>
      </thead>
      <tbody>
        {props.posts.map((post, index) => {
          let linkEdit = "/posts/edit/" + post.id;
          return (
            <tr key={index}>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <Link to={linkEdit} className="btn btn-warning">
                  Edit
                </Link>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => props.handleDelete(post.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
