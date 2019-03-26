import React from "react";
import axios from "axios";
import CardBody from "./itemCard"

class RecentItems extends React.Component{
    state= {
        recentItems: [{image:"http://lorempixel.com/output/nature-q-c-640-480-4.jpg", title:"Climb Mt. Everest"}, {image:"http://lorempixel.com/output/nature-q-c-640-480-7.jpg", title:"Collect Flowers"}, {image:"http://lorempixel.com/output/nature-q-c-640-480-2.jpg", title:"Sail the World"}, {image:"http://lorempixel.com/output/nature-q-c-640-480-8.jpg", title:"Watch Clouds"}, {image:"http://lorempixel.com/output/sports-q-c-640-480-9.jpg", title:"Run a Marathon"}, {image:"http://lorempixel.com/output/food-q-c-640-480-10.jpg", title:"Bake Bread"}, {image:"http://lorempixel.com/output/business-q-c-640-480-5.jpg", title:"Get Hired"},]
    }

    componentDidMount(){
        this.getRecentItems();
    }

    getRecentItems= ()=>{

        axios.get("/api/items").then(res=>{
            this.setState({recentItems: res.data })
        }).catch(err => console.log(err));

    }

    handleLikeBtn = item => {
        axios.put("/api/items/likes", {id: item}).then(data=> console.log(data)).catch(err=> console.log(err));
    }


    render(){
        return <div className="container-fluid">
        <div className="row">
        {this.state.recentItems.map(item=> <CardBody handleLikeBtn={this.handleLikeBtn} {...item} />)}      
        </div>
        </div>
    }

}


export default RecentItems;