import React from 'react'
import "./Recipes.css";
import rec from "../Images/rec.png";
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
      
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span> </button>
            <Link to= "/" className="navbar-brand"><img className="rimage" src= {rec} alt ="logo"/> 
            </Link>
            <div className="collapse navbar-collapse show ml-sm-5">
              <div className="navbar-nav" id="navbarCollapse">
                <li className="navbar-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link className="nav-link" to="/recipes">
                    Recipes
                  </Link>
                </li>
              </div>
          </div>
        </nav>
      </div>
    )
}
