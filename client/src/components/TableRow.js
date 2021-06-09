import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//create table rows
class TableRow extends Component {

     onDelete=(id)=>{
          axios.delete('/user/delete/'+id);
          //this.props.history.push('/index');
     }
    render() {
        return (
           <tr>
               <td>
                    {this.props.obj.user_name}
               </td>
               <td>
                    {this.props.obj.address}
               </td> 
               <td>
                    {this.props.obj.nic_number}
               </td>
               <td>
                    <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
               </td>
               <td>
                    <a href="#" onClick={()=>this.onDelete(this.props.obj._id)} className="btn btn-primary">Delete</a>
               </td>
           </tr>
        )
    }
}
export default TableRow;
