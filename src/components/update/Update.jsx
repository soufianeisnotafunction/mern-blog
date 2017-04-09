import React from "react";

class Update extends React.Component {


  render() {
    return (
      <div className="container mt-4 ">
        <div className="row justify-content-center ">
          <form action="/api/posts" method="put" className="form-signin col-10 col-sm-8 col-md-6 col-lg-4 ">
            <h2 className="form-signin-heading mb-4 text-center">
              Edit Post
            </h2>
            <label for="inputTitle" className="sr-only">Title</label>
            <input
              name="title"
              type="text"
              id="inputTitle"
              className="form-control mb-4"
              placeholder="title"
              required
            />
            <label for="inputBody" className="sr-only">body</label>
            <textarea
              name="body"
              type="text"
              id="inputBody"
              className="form-control mb-4"
              placeholder="body"
              required
            />
            <label for="inputAuthor" className="sr-only">author</label>
            <input
              name="author"
              type="text"
              id="inputAuthor"
              className="form-control mb-4"
              placeholder="author"
              required
            />
            <label for="inputImg" className="sr-only">image</label>
            <input
              name="image"
              type="text"
              id="inputImg"
              className="form-control mb-4"
              placeholder="image"
              required
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Send
            </button>
          </form>
        </div><br/><br/><br/><br/><br/>

      </div>
    );
  }

}

export default Update;
