import React from "react";
import { loginUser } from "./jwt";
import Alert from './alert';

class LogIn extends React.Component {

    state = {
        email: "",
        password: "",
        errors: false
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

        if (this.state.email && this.state.password) {
            let userInfo = {
                email: this.state.email,
                password: this.state.password

            }


            loginUser(userInfo).catch(err => {
                this.setState({errors: err.response.data});
                localStorage.removeItem('jwtToken');

            });


        }




        this.setState({
            email: "",
            password: ""
        });
    };


    render() {

        return <div className="modal" id="loginBtn" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <h4 className="text-center"><i class="fas fa-sign-in-alt"></i> Login</h4>
                        <hr />
                        {this.state.errors ? Object.values(this.state.errors).map(error => <Alert message={error}/>)  : ""}
                        <form>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleInputChange}
                                    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleInputChange}
                                    type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>


                            <button onClick={this.handleFormSubmit} type="submit" class="btn btn-primary col-12 text-center"><i class="fas fa-sign-in-alt"></i> Log In</button>
                        </form>
                        <p className="text-center">Don't you have an account yet?  <a href="" data-dismiss="modal" data-toggle="modal" data-target="#signUpBtn">Create an Account</a></p>
                    </div>
                </div>
            </div>
        </div>



    }


}

export default LogIn;