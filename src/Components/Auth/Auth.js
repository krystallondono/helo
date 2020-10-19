import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
// import {getUser} from '../../../ducks/store';
import '../Auth/Auth.css';

class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    // okay time to handle the inputs

    handleInput = el => {
        this.setState({
            [el.target.name]: el.target.value
        })
    }

    


    // let's set up these axios requests

    login =  (e) => {
        e.preventDefault();
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password})
            .then(res => {
                this.props.history.push('/dashboard');
            })
            .catch(err => alert(err.response.request.response));
    }

    register = (e) => {
        e.preventDefault();
        axios.post('/api/auth/register', {username: this.state.username, password: this.state.password})
            .then (res => {
                this.props.history.push('/dashboard');
            })
            .catch(err => alert(err.response.request.response));
    }



    render(){
        const {username, password} = this.state;
        return (
            <div className = 'authPage'>
                <form className = 'formBox'>
                    {/* <h1>Helo</h1> */}
                    <input name = 'username' type= 'text' placeholder = 'username' value = {username} onChange = {el => this.handleInput(el)}/>
                    <input name ='password' type= 'password' placeholder = 'password' value = {password} onChange = {el => this.handleInput(el)}/>
                    <button onClick={this.login}>Log In</button>
                    <button onClick = {this.register}>Register</button>
                </form>
            </div>
        )
    }
}

const mapStatetoProps = reduxState => reduxState;

export default connect(mapStatetoProps)(Auth);