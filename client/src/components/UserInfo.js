import React from "react";
import CardBody from './itemCard';
import PostItem from "./postItem";

class UserInfo extends React.Component {
    state = {
        name: "",
        image: "",
        items: []
    }

    componentDidMount() {
        this.setUserInfo();
    }

    setUserInfo = () => {

        this.setState({ name: "Mustafa", image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png", items: [{ title: "Do Homework", image: "http://lorempixel.com/output/abstract-q-c-640-480-1.jpg", isDone: false }, { title: "Get a Job", image: "http://lorempixel.com/output/nightlife-q-c-640-480-1.jpg", isDone: false }, { title: "Climb Mt. Everest", image: "http://lorempixel.com/output/people-q-c-640-480-4.jpg", isDone: false }, { title: "Go to Japan", image: "http://lorempixel.com/output/fashion-q-c-640-480-6.jpg", isDone: false }, { title: "Eat Sushi", image: "http://lorempixel.com/output/nature-q-c-658-282-4.jpg", isDone: false }, { title: "Learn how to ride a horse", image: "http://lorempixel.com/output/sports-q-c-658-282-8.jpg", isDone: true }, { title: "Do Dishes", image: "http://lorempixel.com/output/technics-q-c-658-282-8.jpg", isDone: true }] })

    }


    render() {
        return <>
            <PostItem />

            <div className="container-fluid">
                <div className="jumbotron bg-transparent text-center">
                    <img style={{ width: "18rem" }} src={this.state.image} alt={this.state.name} className="rounded-circle" />
                    <br />
                    <button className="btn btn-primary btn-lg mt-3" id="edit-profile">Upload Profile Picture</button>
                    <h1 className="display-4">Hello, {this.state.name}!</h1>


                    <button className="btn btn-outline-success btn-lg" data-toggle="modal" data-target="#postItemBtn">Post a Bucketlist Item</button>

                    <button className="btn btn-danger ml-3 btn-lg" id="delete-profile">Delete Account</button>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Bucketlist Items</h3>
                        <hr />
                    </div>
                </div>

                <div className="row">

                    {this.state.items.filter(item => !item.isDone).map(item => <CardBody {...item} />)}
                </div>

                <div className="row mt-3">
                    <div className="col bg-success text-white">
                        <h3 className="">Completed Items</h3>
                    </div>
                </div>

                <div className="row">
                    {this.state.items.filter(item => item.isDone).map(item => <CardBody {...item} />)}
                </div>




            </div>
        </>
    }
}


export default UserInfo;