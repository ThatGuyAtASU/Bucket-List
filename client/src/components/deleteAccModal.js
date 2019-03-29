import React from 'react';
import { setCurrentUser, logoutUser } from "./jwt";
import axios from 'axios';

class DeleteAccModal extends React.Component {


    handleDelete = () => {
        

        let currentUserId = setCurrentUser(localStorage.getItem('jwtToken')).payload.id;

        axios.delete(`/api/user/deleteAccount/${currentUserId}`).then(res => {
            logoutUser();
        }).catch(err => console.log(err));


    }

    render() {
        return <div id="delete-modal" className="modal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Account</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Do you want to delete your account?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                        <button id="delete-confirm" onClick={this.handleDelete} type="button" className="btn btn-primary">Yes</button>
                    </div>
                </div>
            </div>
        </div>

    }


}

export default DeleteAccModal;