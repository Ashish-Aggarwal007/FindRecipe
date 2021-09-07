import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Component/Header';
export default class Home extends Component {
    render() {
        return (
          
        <Header title = "Amazing Recipes"> 
        <Link to="recipes" className="text-uppercase btn btn-secondary btn-lg mt-3">
            search recipes
        </Link></Header>
            
        )
    }
}
