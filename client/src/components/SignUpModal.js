import React from "react";
import axios from "axios";

class SignUp extends React.Component {

    state = {
        name: "",
        email: "",
        password: "",
        confirm: ""
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
        if (this.state.password === this.state.confirm && this.state.password.length > 5) {
            let newUser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }

            axios.post("/api/user/register", newUser).then(data => {
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    confirm: ""
                });
                console.log(data);
            }).catch(err => console.log(err));



        } else {
            if (this.state.password !== this.state.confirm) {
                alert("Password does not match.");
            } else {
                alert("Password should be 6 characters long at least.");
            }
        }



        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Name: ${this.state.name}, Email: ${this.state.email}, Pass: ${this.state.password}, Confirm: ${this.state.confirm}`);

    };
    render() {
        return <div className="modal" id="signUpBtn" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4 className="text-center"><i className="fas fa-user-plus"></i> Sign Up</h4>
                        <hr />
                        <form>
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input
                                    value={this.state.name}
                                    name="name"
                                    onChange={this.handleInputChange}
                                    type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Your Name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="confirmPass">Confirm Password</label>
                                <input
                                    value={this.state.confirm}
                                    name="confirm"
                                    onChange={this.handleInputChange}
                                    type="password" class="form-control" id="confirmPass" placeholder="Confirm Password" />
                            </div>

                            <button onClick={this.handleFormSubmit} type="submit" class="btn btn-primary col-12"><i className="fas fa-user-plus"></i> Sign Up</button>
                        </form>
                        <p className="text-center">Already have an account? <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#loginBtn">Log In</a></p>
                    </div>
                </div>
            </div>
        </div>


    }


}

export default SignUp;