import React from "react";
import {setCurrentUser} from "./jwt";
if(localStorage.getItem('jwtToken')){
    var user = setCurrentUser(localStorage.getItem('jwtToken')).payload;
    

}


function CardBody(props) {

    console.log(props);

    return <div className="col-md-3 mt-3">
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
            <h5 className="card-title">{props.title} {props.user && !props.profile ?  <button onClick={!props.likes.includes(user.id) ? () => props.handleLikeBtn(props._id) : () => props.handleDislikeBtn(props._id)} className="btn btn-sm btn-primary">{props.likes.includes(user.id) ? <i class="fas fa-thumbs-up"></i> : <i className="far fa-thumbs-up"></i>} {props.likes ? props.likes.length : 0}</button>: " "}</h5>
                {props.user && !props.profile && !user.items.includes(props._id) ? <button onClick={() => props.saveItem(props._id)} className="btn btn-primary">Add</button> : " "}
                {props.user && props.profile ? <button onClick={() => props.removeItem(props._id)} className="btn btn-danger">Remove</button> : " "}
                {props.user && !props.isDone.includes(user.id) && props.profile ? <button onClick={() => props.itemDone(props._id)} className="btn btn-success ml-3">Done</button> : " "}
            </div>
        </div>

    </div>



}

export default CardBody;