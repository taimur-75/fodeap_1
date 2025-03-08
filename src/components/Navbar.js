import React from 'react'
import {Link} from "react-router-dom"

export default function navbar() {
  return ( 
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-dark  bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic fw-bold" to="/">Fodeap_1</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/createuser">SignUp</Link>
        </li>
      </ul>

      <form className="d-flex">
      <input className="form-control me-2" style={{marginLeft:'100px'}} type="search" placeholder="Search here ..." aria-label="Search"/>
      <button className="btn btn-outline-success " style={{backgroundColor:'orange', color:'purple'}} type="submit">Search</button>
    </form>

    </div>
  </div>
</nav>

    </div>
  )
}
