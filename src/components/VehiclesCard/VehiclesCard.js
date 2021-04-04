import React from 'react';
import { Link } from 'react-router-dom';
import  './VehiclesCard.css'

const VehiclesCard = (props) => {
    console.log(props)
    let {name, id, img} = props.vehicle
    return (
        <div className="vehicles">
            <Link to={`/destination/${id}`} className="vehicle_card">
                <img src={img} alt="name"/>
                <h2>{name}</h2>
            </Link>

        </div>
    );
};

export default VehiclesCard;