import React from "react";
import axios from "axios";
import PexelsAPI from "pexels-api-wrapper";
import { setCurrentUser } from "./jwt";







class postItem extends React.Component {

    state = {
        title: "",
        image: ""

    }

    



    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        var pexelsClient;
        axios.get("/api/user/env/getInfo").then(res => {
        
            pexelsClient = new PexelsAPI(res.data.pexels);

            let currentUserId = setCurrentUser(localStorage.getItem('jwtToken')).payload.id;



            if (this.state.title) {
                let itemInfo = {
                    title: this.state.title,
                    image: ""
                }
                pexelsClient.search(itemInfo.title, 1, 1)
                    .then(function (result) {

                        itemInfo.image = result.photos[0].src.medium;

                        axios.post(`/api/items/${currentUserId}`, itemInfo).then(res => window.location.reload()).catch(err => console.log(err));


                    }).catch(function (e) {
                        console.log(e);
                    });


                this.setState({
                    title: ""
                });

            }

        });


    };
    render() {
        return <div className="modal" id="postItemBtn" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4 className="text-center"><i class="far fa-plus-square"></i> Post an Item</h4>
                        <hr />
                        <form>
                            <div class="form-group">
                                <label for="name">Title</label>
                                <input
                                    value={this.state.title}
                                    name="title"
                                    onChange={this.handleInputChange}
                                    type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter a Bucketlist Item" />
                            </div>

                            <button onClick={this.handleFormSubmit} type="submit" class="btn btn-primary col-12"><i class="far fa-plus-square"></i> Post</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>


    }

}

export default postItem;