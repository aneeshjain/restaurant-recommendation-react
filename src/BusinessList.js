import React from "react";
import Business from "./Business";
import './BusinessList.css';

function BusinessList(props){

    return (
        <div className="business-list">
            {props.returnedBusinesses.map((business, idx) => {return <Business key={idx} businessData={business}/>;})}
        </div>
    );
}

export default BusinessList;