import React from "react";

function CardBody(props) {

    return <div className="col-md-3 mt-3">
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    </div>



}

export default CardBody;