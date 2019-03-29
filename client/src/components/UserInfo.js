import React from "react";
import CardBody from './itemCard';
import PostItem from "./postItem";
import axios from "axios";
import { setCurrentUser } from "./jwt";

class UserInfo extends React.Component {
    state = {
        name: "",
        image: "",
        items: [],
        userId: ''
    }

    componentWillMount() {
        if (!localStorage.getItem('jwtToken')) {
            return window.location.replace("/");
        }
        this.setUserInfo();

    }

    

    // componentDidMount() {
    //     this.setUserInfo();
    // }

    setUserInfo = () => {

        let currentUser = setCurrentUser(localStorage.getItem('jwtToken')).payload;
        this.setState({userId: currentUser.id});


        this.setState({ name: currentUser.name});

        axios.get(`/api/user/populatedUser/${currentUser.id}`).then(res=>{
            this.setState({items: res.data.items, image: res.data.image });
        }).catch(err=> console.log(err));
    }

    removeItem = item => {

        let currentUserId = setCurrentUser(localStorage.getItem('jwtToken')).payload.id;

        axios.put(`/api/user/isRemoved/${currentUserId}`, {id: item}).then(data => { 
            window.location.reload(); 
        }).catch(err => console.log(err));


    }

    itemDone = item => {
        

        axios.put(`/api/user/isDone/${item}`, {id: this.state.userId}).then(data => {
        window.location.reload();
        }).catch(err => console.log(err));

    }

   


    render() {
        return <>
            <PostItem />

            <div className="container-fluid">
                <div className="jumbotron bg-transparent text-center">
                    <img style={{ width: "18rem" }} src={this.state.image} alt={this.state.name} className="rounded-circle" />
                    <br />
                    <button className="btn btn-primary btn-lg mt-3" data-toggle="modal" data-target="#profilePicture">Upload Profile Picture</button>
                    <h1 className="display-4">Hello, {this.state.name}!</h1>


                    <button className="btn btn-outline-success btn-lg" data-toggle="modal" data-target="#postItemBtn">Post a Bucketlist Item</button>

                    <button className="btn btn-danger ml-3 btn-lg" data-toggle="modal" data-target="#delete-modal">Delete Account</button>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Bucketlist Items</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">

                    {this.state.items.filter(item => !item.isDone.includes(this.state.userId)&&!item.isRemoved).map(item => <CardBody profile={true} user={true} itemDone={this.itemDone} removeItem={this.removeItem} {...item} />)}
                </div>

                <div className="row mt-3">
                    <div className="col bg-success text-white">
                        <h3 className="">Completed Items</h3>
                    </div>
                </div>

                <div className="row">
                    {this.state.items.filter(item => item.isDone.includes(this.state.userId)&&!item.isRemoved).map(item => <CardBody user={true} profile={true} isDone={this.isDone} removeItem={this.removeItem} {...item} />)}
                </div>




            </div>
        </>
    }
}


export default UserInfo;