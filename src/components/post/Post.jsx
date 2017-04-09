import React from 'react';

const Post = ({title , posted , body , author , img}) => (

  <div className="container">

    <div className="row">

      <div className="col-sm-8 blog-main">


        <div className="blog-post mt-4 mb-4">
          <h2 className="blog-post-title">{title}</h2>
          <p className="blog-post-meta mt-2">
            {posted} by <a href="#">{author}</a>
          </p>
            {body}
          <p>

          </p>
        </div>
        </div>
        </div>
        </div>
);


export default Post;
