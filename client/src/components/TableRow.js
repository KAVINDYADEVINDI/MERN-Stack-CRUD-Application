import React, { Component } from 'react'

//create table rows
class TableRow extends Component {
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
                    <button className="btn btn-primary">Edit</button>
               </td>
               <td>
                    <button className="btn btn-primary">Delete</button>
               </td>
           </tr>
        )
    }
}
export default TableRow;
