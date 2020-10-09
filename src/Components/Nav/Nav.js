import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Nav.css';

class Nav extends Component {

    render(){
        return (
            <div className = 'navBar'>
            <ul>
                <li>
                    <Link to ='/dashboard'>Home</Link>
                </li>
                <li>
                    <Link to ='/new'>New Post</Link>
                </li>
                <li>
                    <Link to = '/'>Log Out</Link>
                </li>
            </ul>
            </div>
        )
    }
}

export default Nav;