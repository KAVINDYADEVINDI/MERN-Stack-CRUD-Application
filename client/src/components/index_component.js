import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import TableRow from './TableRow';

class Index extends Component{

  //ceate constuctor
  constructor(props){
    super(props);

    this.state={
      user:[]
    };
  }
  //get data from database
  componentDidMount(){
    axios.get('/user')
      .then(response=>{
        this.setState({
          user:response.data
        });
      })
      .catch(function(err){
        console.log(err);
      });
  }
  //create table row
  tabRow(){
    //get data with keys
    return this.state.user.map((object,i)=>{
      //return data to tablerow.js
      return <TableRow obj={object} key={i} />;
    });
  }

  render(){
    return(
      <div className="container">
        <h3 align="center" >User List</h3>
        <table className="table table-striped" style={{marginTop:20}}>
          <thead>
            <th>User Name</th>
            <th>Address</th>
            <th>NIC Number</th>
            <th colSpan="2">Action</th>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Index;