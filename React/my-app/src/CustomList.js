import React, { Component } from 'react';
import CreateForm from './Create';
import './CustomList.css';

class CustomList extends React.Component{
    constructor(props)
    {
        super(props);
         this.state = {users: []};
    }
    
     componentDidMount() {
      let URL = 'http://localhost:62051/api/React/GetAllUsers'  
         fetch(URL)
         .then( (response) => {
            return response.json()
         }).then((json) => {
            this.setState({
               users: json
            })
         })
         .catch( (ex) => {
            console.log('parsing failed', ex)
         })
     } 

 render(){
  return (
        <div>
        <div>
            <table className="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>CONTACT</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                 {this.state.users.map((user, i) => <TableRow key={user.UserId} data={user}> </TableRow>)}
                </tbody>
            </table>
            <CreateForm/>
        </div>
        </div>
      );
 }
}

class TableRow extends React.Component{
     render() {
      return (
         <tr>
             <td>{this.props.data.UserId}</td>
             <td>{this.props.data.Name}</td>
            <td>{this.props.data.Email}</td>
             <td>{this.props.data.Contact}</td>                   
             <td>
                <ActionButton UserId={this.props.data.UserId}> </ActionButton>
             </td>                                                                                                              
         </tr>
      );
   }
}


class ActionButton extends React.Component{
    render(){
        return(
            <div> 
              <button className="btn btn-sm" value={this.props.UserId}>Edit</button> |   
              <button className="btn btn-sm"><i className="fa fa-trash-o"></i> Delete</button>
            </div>
        );
    }
}


export default CustomList;
