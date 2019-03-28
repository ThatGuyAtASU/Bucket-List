import React from "react";
import axios from "axios";
import CardBody from "./itemCard";
import {setCurrentUser} from "./jwt"

class RecentItems extends React.Component {
    state = {
        recentItems: [],

        userExist: false
    }

    componentWillMount() {
        this.setState({ userExist: localStorage.getItem('jwtToken') ? true : false });

    }

    componentDidMount() {
        this.getRecentItems();
    }

    getRecentItems = () => {

        axios.get("/api/items").then(res => {
            this.setState({ recentItems: res.data })
        }).catch(err => console.log(err));

    }

    handleLikeBtn = item => {
        let currentUserId = setCurrentUser(localStorage.getItem('jwtToken')).payload.id;
        axios.put(`/api/items/likes/${item}`, { id: currentUserId }).then(data => {console.log(data);
        window.location.reload();
        }).catch(err => console.log(err));
    }

    saveItem = item => {
        let currentUserId = setCurrentUser(localStorage.getItem('jwtToken')).payload.id;
        axios.put(`/api/user/add/${currentUserId}`, {id: item}).then(res=>{console.log(res);
        window.location.reload();
        }).catch(err=>console.log(err));
    }


    render() {
        return <div className="container-fluid">
            <div className="row">
                {this.state.recentItems.map(item => <CardBody saveItem={this.saveItem} handleLikeBtn={this.handleLikeBtn} user={this.state.userExist} {...item} />)}
            </div>
        </div>
    }

}


export default RecentItems;