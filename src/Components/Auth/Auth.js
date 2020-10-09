import React, {Component} from 'react';
import axios from 'axios';
import '../Auth/Auth.css';

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            passwored: ''
        }
    }

    // let's set up these axios requests



    render(){
        const {username, password} = this.state;
        return (
            <div className = 'authPage'>
                <form className = 'formBox'>
                    <input type= 'text' placeholder = 'username' value = {username} />
                    <input type= 'password' placeholder = 'placeholder' value = {password}/>
                </form>
            </div>
        )
    }
}

export default Auth;