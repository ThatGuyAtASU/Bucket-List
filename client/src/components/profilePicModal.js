import React from "react";
import { storage } from "./firebase";
import axios from 'axios';
import { setCurrentUser } from './jwt';
import Alert from './alert';

const imageExts = ["jpg", "png", "jpeg"];



class profilePicModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valuenow: '',
            width: '',
            text: '',
            errors: false

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }


    handleSubmit = event => {
        event.preventDefault();

        var file = this.fileInput.current.files[0];
        var imgExt = file.name.split(".").pop();

        var storageRef;


        if (imageExts.includes(imgExt)) {
            storageRef = storage.ref('bucketlist/' + file.name);


            storageRef.put(file);



            storageRef.put(file).on('state_changed', (snapshot) => {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                this.setState({ valuenow: percentage, width: `${percentage}%`, text: `${Math.round(percentage)}%` })


                // $(".progress-bar").attr("aria-valuenow", percentage);
                // $(".progress-bar").attr("style", "width: " + percentage + "%");
                // $(".progress-bar").text(Math.round(percentage) + "%");
                if (percentage === 100) {
                    // $("#upload-btn").remove();
                    // var status = $("<h5>").addClass("text-success").text("Photo is uploaded.");
                    // $("#uploadBttn").append(status);


                    var pathReference = storage.ref('bucketlist/' + file.name);
                    pathReference.getDownloadURL().then(function (url) {

                        let currentUserId = setCurrentUser(localStorage.getItem('jwtToken')).payload.id;
                        axios.put(`api/user/profilePicture/${currentUserId}`, { image: url }).then(res => window.location.reload()).catch(err => console.log(err));




                    }).catch(function (error) {

                    });

                }
            })

        } else {
            this.setState({ errors: { image: "Please choose a valid image file(jpeg, png, jpg)" } });
        }



    }


    render() {
        return <div className="modal" id="profilePicture" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Upload a Profile Photo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="card text-center">
                                <div className="card-body justify-content-center">
                                    <h5 className="card-title">Upload a Profile Photo</h5>

                                    <label className="btn btn-secondary" id="upload-btn" for="fileButton">Upload</label><input
                                        type="file" ref={this.fileInput} id="fileButton" style={{ display: "none" }} />
                                    <div id="warningImg"></div>
                                    <br />
                                    {this.state.errors ? Object.values(this.state.errors).map(error => <Alert message={error} />) : ""}
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                                            role="progressbar" aria-valuenow={this.state.valuenow} aria-valuemin="0" aria-valuemax="100"
                                            style={{ width: this.state.width }}>{this.state.text}</div>
                                    </div>
                                    <div id="uploadBttn"></div>
                                    <div id="warningImg"></div>
                                </div>
                            </div>
                            <br />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button id="pic-btn" type="submit" onClick={this.handleSubmit} className="btn btn-primary ">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default profilePicModal;