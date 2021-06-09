import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Edit extends Component{
//create constructor
  constructor(props){
    super(props);
    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangeAddress=this.onChangeAddress.bind(this);
    this.onChangeNICnumber=this.onChangeNICnumber.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    //create state
    this.state={
        user_name:'',
        address:'',
        nic_number:''
    }
  }
   //get data from database
  async componentDidMount(){
    //send user route.js with id
     await axios.get('/user/edit/'+this.props.match.params.id)
    // console.log(user);
      .then(response=>{
        this.setState({
          //set data in the response
          user_name:response.data.user_name,
          address:response.data.address,
          nic_number:response.data.nic_number
        });
      })
      .catch((err)=>{
        console.log(err);
      });
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
  // console.log(`the values are ${this.state.user_name},${this.state.address},${this.state.nic_number}`);
  const obj={
      user_name:this.state.user_name,
      address:this.state.address,
      nic_number:this.state.nic_number,
  }
  //send user route.js with id and object for update
  axios.put('/user/update/'+this.props.match.params.id,obj);

   this.setState({
       user_name:'',
       address:'',
       nic_number:''
    });
    //redirect to index page
    this.props.history.push('/index');

}


  render(){
    return(
      <div style={{marginTop:10}}>
        <h3>Update Use</h3>
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
                <input type="submit" value="Update" className="btn btn-primary"></input>
            </div>
        </form>
      </div>
    );
  }
}
export default Edit;