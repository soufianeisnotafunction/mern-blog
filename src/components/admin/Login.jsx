import React from "react";
import { Link } from 'react-router'

const Login = () => (
  <div className="container mt-4 ">
    <div className="row justify-content-center ">
      <form className="form-signin col-10 col-sm-8 col-md-6 col-lg-4 ">
        <h2 className="form-signin-heading mb-4 text-center">
          S'identifier
        </h2>
        <label for="inputId" className="sr-only">Identifiant</label>
        <input
          type="text"
          id="inputId"
          className="form-control"
          placeholder="Identifiant"
          required
          autofocus
        />
        <label for="inputPassword" className="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-4"
          placeholder="Mot de passe"
          required
        />

      <Link to="/plateform"><button className="btn btn-lg btn-primary btn-block mb-2" type="submit" >Connexion</button></Link>
      </form>
    </div>

  </div>
);

export default Login;
