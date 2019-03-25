import React from "react";

function CardBody(props) {

    console.log(props);

    return <div className="col-md-3 mt-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title} <button onClick={()=> props.handleLikeBtn(props._id)} className="btn btn-sm btn-primary"><i className="far fa-thumbs-up"></i> {props.likes}</button></h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {!props.user ? <button onClick={()=> props.saveItem(props._id)} className="btn btn-primary">Add</button> : " "}
                {props.user ? <button onClick={()=> props.removeItem(props._id)} className="btn btn-danger">Remove</button> : " "}
                {props.user && !props.isDone ? <button onClick={()=> props.isDone(props._id)} className="btn btn-success ml-3">Done</button> : " "}
            </div>
        </div>

    </div>



}

export default CardBody;