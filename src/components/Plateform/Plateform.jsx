import React from "react";
import { Link } from 'react-router'


const Plateform = () => (
  <div className="container mt-4 ">
    <div className="row justify-content-center ">
      <form  className="form-signin col-10 col-sm-8 col-md-6 col-lg-4 ">
        <h2 className="form-signin-heading mb-4 text-center">
          Edition center
        </h2>
        <Link to="/form"><button className="btn btn-lg btn-primary btn-block mb-2" >Add post</button></Link>

      <Link to="/update"><button className="btn btn-lg btn-primary btn-block mb-2" >Edit post</button></Link>
      <Link to="/delete"><button className="btn btn-lg btn-primary btn-block mb-2" >Delete post</button></Link>
      </form>
    </div>

  </div>
);

export default Plateform;
