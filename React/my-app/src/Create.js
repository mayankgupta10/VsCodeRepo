import React, { Component } from 'react';

class CreateForm extends React.Component{
    render(){
        return(
            <div> 
                <div className="container">
                    <button type="button" className="btn btn-sm pull-right" data-toggle="modal" data-target="#myModal">Create</button>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                        <div className="container">
                                                <div className="row">
                                                <div className="col-md-6">
                                                    <div className="well well-sm">
                                                    <form className="form-horizontal" action="" method="post">
                                                
                                                        <div className="form-group">
                                                        <label className="col-md-3 control-label" for="name">Name</label>
                                                        <div className="col-md-9">
                                                            <input id="name" name="name" type="text" placeholder="Your name" className="form-control"/>
                                                        </div>
                                                        </div>
                                                
                                                        <div className="form-group">
                                                        <label className="col-md-3 control-label" for="email">E-mail</label>
                                                        <div className="col-md-9">
                                                            <input id="email" name="email" type="text" placeholder="username@email.com" className="form-control"/>
                                                        </div>
                                                        </div>
                                                
                                                       <div className="form-group">
                                                        <label className="col-md-3 control-label" for="email">Contact No</label>
                                                        <div className="col-md-9">
                                                            <input id="contactno" name="contactno" type="number" placeholder="91-XXXX-XXXX" className="form-control"/>
                                                        </div>
                                                        </div>
                                                
                                                        <div className="form-group">
                                                        <div className="col-md-12 text-right">
                                                            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                                        </div>
                                                        </div>
                                                    </form>
                                                    </div>
                                                </div>
                                                </div>
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Create</button>
                                </div>
                            </div>
                         </div>
                    </div>
                  </div>
               </div>
          </div>
        );
    }
}


export default CreateForm;
