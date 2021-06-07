import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Create extends Component{

constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangeAddress=this.onChangeAddress.bind(this);
    this.onChangeNICnumber=this.onChangeNICnumber.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    this.state={
        user_name:'',
        address:'',
        nic_number:''
    }
    
}

  render(){
    return(
      <div style={{marginTop:10}}>
        <h3>Add New User</h3>
        <form>
            <div className="form-group">
                <label>User name:</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>Address:</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
                <label>NIC number:</label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="form-group" style={{marginTop:10}}>
                <input type="submit" value="Add User" className="btn btn-primary"></input>
            </div>
        </form>
      </div>
    );
  }
}
export default Create;