import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowseRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Create from './components/create_component';
import Edit from './components/edit_component';
import Index from './components/index_component';

class App extends Component{
  render(){
    return(
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">React CRUD Operation</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto"></ul>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
            </div>
          </nav><br/>
          <h2>Welcome to CRUD</h2><br/>
          //add route
          <Switch>
            <Route exact path='/create' component={Create}></Route>
            <Route exact path='/edit/:id' component={Edit}></Route>
            <Route exact path='/index' component={Index}></Route>
          </Switch>
      </div>
    );
  }
}
export default App;
