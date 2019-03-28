import React from "react";
import {storage} from "./firebase";
import axios from 'axios';
import {setCurrentUser} from './jwt';




class profilePicModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();

        var file = this.fileInput.current.files[0];
        // var imgExt = file.name.split(".").pop();
        
        var storageRef;
        

        if (true) {
            storageRef = storage.ref('bucketlist/' + file.name);
            

            storageRef.put(file);



            storageRef.put(file).on('state_changed', function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;


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
                        axios.put(`api/user/profilePicture/${currentUserId}`, {image: url}).then(res=> window.location.reload()).catch(err=>console.log(err));

                        


                    }).catch(function (error) {

                    });

                }
            })

        } else {
            // $("#warningImg").append($("<p>").addClass("text-danger").text("Invalid File. Acceptable extensions are .png, .jpg and .jpeg"));
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
                                    {/* <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                                            role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                                            style={{width: "0%"}}>0%</div>
                                    </div> */}
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