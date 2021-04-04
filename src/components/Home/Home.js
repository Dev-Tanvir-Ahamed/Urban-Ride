import React from 'react';
import vehiclesData from '../../vehiclesData.json'
import VehiclesCard from '../VehiclesCard/VehiclesCard';

const Home = () => {
    let vehicles = vehiclesData;
    // console.log(vehicles);
    return (
        <div>
            <div className="container">
                {
                    vehicles.map(vehicle => <VehiclesCard key={vehicle.id} vehicle={vehicle}></VehiclesCard>)
                }
            </div>
        </div>
    );
};

export default Home;