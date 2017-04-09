import React, { Component } from "react";
// import { Link } from "react-router";
import Post from "./components/post/Post.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch(`${window.location.origin}/api/posts`)
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  renderPosts() {
    return this.state.data.map(el => {
      console.log(el.img);
      return (
        <Post
          key={el._id}
          title={el.title}
          posted={el.posted.slice(0,10).split("-").join("/")}
          body={el.body}
          author={el.author}
        />
      );
    });
  }
  render() {
    let posts = this.renderPosts();
    return (
      <div className="App">
        <div className="blog-masthead">

            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <a className="navbar-brand" href="#">MERN</a>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                </ul>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  LOG IN
                </button>
                <button
                  className="btn btn-outline-success my-2 my-sm-0 ml-4"
                  type="submit"
                >
                  SIGN UP
                </button>
              </div>
            </nav>
            <div className="container-fluid">
            <div className="blog-header">
              <div className="container">
                <h1 className="blog-title mt-4">Mern Blog</h1>
                <p className="lead blog-description">
                  A Blog built with the MERN stack.
                </p>
              </div>
            </div>

            {posts}

            <nav className="blog-pagination mb-5 ml-5">
              <a className="btn btn-outline-primary mr-2" href="#">Older</a>
              <a className="btn btn-outline-primary " href="#">
                Newer
              </a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
