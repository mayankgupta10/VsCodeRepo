import React, { Component } from 'react';

var ReactBSTable = require('react-bootstrap-table');  
var BootstrapTable = ReactBSTable.BootstrapTable;
var TableHeaderColumn = ReactBSTable.TableHeaderColumn;

class List extends React.Component{
    constructor(props){
        super(props);
         this.state = {users: [],
             selectRowProp:{
                mode: "checkbox",
                clickToSelect: true,
                bgColor: "rgb(214,214,214)" 
            }
         }
    }

     componentDidMount() {
      let URL = 'https://jsonplaceholder.typicode.com/users'  
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
     const cellEdit = {
        mode: 'click', // click cell to edit
        blurToSave: true,
     };
  return (
        <div>
         <BootstrapTable cellEdit={ cellEdit } exportCSV multiColumnSearch searchPlaceholder='Search here...' deleteRow insertRow  selectRow={this.state.selectRowProp} search dataAlign="right" data={this.state.users} striped={true} hover={true} condensed pagination>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>User ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField="username" dataSort={true}>Username</TableHeaderColumn>
                <TableHeaderColumn dataField="email" dataSort={true}>Email</TableHeaderColumn>
            </BootstrapTable>
        </div>
      );
 }
}

export default List;
