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
    onChangeUsername(e){
        this.setState({
            user_name:e.target.value
        });
    }
    onChangeAddress(e){
        this.setState({
            address:e.target.value
        });
    }
    onChangeNICnumber(e){
        this.setState({
            nic_number:e.target.value
        });
    }
    onSubmit(e){
       e.preventDefault();
       console.log(`the values are ${this.state.user_name},${this.state.address},${this.state.nic_number}`);
       this.setState({
           user_name:'',
           address:'',
           nic_number:''
        });

    }



  render(){
    return(
      <div style={{marginTop:10}}>
        <h3>Add New User</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>User name:</label>
                <input type="text"
                    value={this.state.user_name}
                    onChange={this.onChangeUsername}
                    className="form-control">        
                </input>
            </div>
            <div className="form-group">
                <label>Address:</label>
                <input type="text"
                    value={this.state.address}
                    onChange={this.onChangeAddress}
                    className="form-control">        
                </input>
            </div>
            <div className="form-group">
                <label>NIC number:</label>
                <input type="text"
                    value={this.state.nic_number}
                    onChange={this.onChangeNICnumber}
                    className="form-control">        
                </input>
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