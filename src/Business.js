import React from "react";
import './Business.css';


function Business(props){
    return (
        <div className="business-container">
            <img className='business-image' src={props.businessData.image_url} />
            <div id="business-name">{props.businessData.name}</div>
            <div className="text-container">
                <div className="vertical-container">
                    <div className="box-left-1"> {props.businessData.location.address1} </div>
                    <div className="box-left-2"> {props.businessData.location.city} </div>
                    <div className="box-left-3"> {props.businessData.location.state} {props.businessData.location.zip_code} </div>
                </div>
                <div className="vertical-container">
                    <div className="box-right-1"> {props.businessData.categories[0].title} </div>
                    <div className="box-right-2"> {props.businessData.rating} stars </div>
                    <div className="box-right-3"> {props.businessData.review_count} reviews</div>
                </div>
            </div>
        </div>
        
    );
}

export default Business;