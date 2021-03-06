import React, {Component} from 'react';
import './App.css';
import routes from './routes';
import {withRouter} from 'react-router-dom';
import Nav from './Components/Nav/Nav';




class App extends Component {
  render (){  
    return (
    <div >
      <div>
      {this.props.location.pathname !== '/' && <Nav/>}
      {routes}
      </div>
    </div>
  )
  }
}

export default withRouter(App);
