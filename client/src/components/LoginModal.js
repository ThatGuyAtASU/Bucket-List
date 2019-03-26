import React from "react";
import axios from "axios";
import {loginUser} from "./jwt";

class LogIn extends React.Component {
    
    state={
        email: "",
        password: ""
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

        if(this.state.email && this.state.password){
            let userInfo= {
                email: this.state.email,
                password: this.state.password

            }


            loginUser(userInfo);

            

            // axios.post("/api/user/login", userInfo).then(data=>{
            //     console.log(data);
            //     window.location.replace("/user");
            //     this.setState({
            //         email: "",
            //         password: ""
            //     })
            // }).catch(err=>console.log(err));

        }

        
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.email} ${this.state.password}`);
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
                        <p className="text-center">Don't you have an account yet?  <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#signUpBtn">Create an Account</a></p>
                    </div>
                </div>
            </div>
        </div>



    }


}

export default LogIn;