import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import PostList from "../../components/organisms/PostList";

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      postDeleteId: "0"
    };
  }

  // Lifecycle
  componentDidMount() {
    this._getPostsData();
  }

  // Handle function
  setPostDeleteId = id => {
    this.setState({ postDeleteId: id });
  };

  setPostDeleteIdNull = () => {
    this.setState({ postDeleteId: "0" });
  };

  handleDelete = id => {
    const token = localStorage.getItem("token");
    const headers = {
      token: token
    };
    if (token === null) this.props.history.push("/login");

    axios
      .delete(`http://localhost:3000/posts/${id}`, { headers })
      .then(res => {
        alert(`Successfully delete post with id ${res.data.data.id}`);
        this._getPostsData();
      })
      .catch(err => {
        alert(`Something went wrong${err}`);
      });
  };

  // Custom
  _getPostsData = () => {
    const token = localStorage.getItem("token");
    const headers = {
      token: token
    };
    if (token === null) this.props.history.push("/login");

    axios
      .get("http://localhost:3000/posts", { headers })
      .then(res => this.setState({ posts: res.data.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <h2>Welcome to feed</h2>

        <Link to="/posts/create" className="btn btn-primary">
          Add Post
        </Link>

        <PostList posts={this.state.posts} handleDelete={this.handleDelete} />
      </React.Fragment>
    );
  }
}
