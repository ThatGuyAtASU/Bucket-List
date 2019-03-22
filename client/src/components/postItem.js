import React from "react";

class postItem extends React.Component{

    state={
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
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        
        this.setState({
            title: ""
            
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