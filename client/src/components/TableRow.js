import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//create table rows
class TableRow extends Component {

     //when click delete button
     onDelete=(id)=>{
          //send url to user_route.js
          axios.delete('/user/delete/'+id);
         
     }
     //props mean property of tablerow in index_component.js
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
