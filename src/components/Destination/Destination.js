import { useState } from 'react';
import icon from '../../images/car.png'
import people from '../../images/peopleicon.png'
import './Destination.css'

const Destination = () => {
    let [searchVisible, setSearchVisible] = useState(true)
    let [pickFrom, setPickFrom] = useState('Mirpur-1')
    let [pickTo, setPickTo] = useState('Dhanmondi')
    let handleSubmit = () => {
        setSearchVisible(false)
    }

    return (
        <div>
            <div className="container">
                <div className="destination">
                <div className="destination_content">
                    {
                        searchVisible && <form onSubmit={handleSubmit}>
                        <div className="input_field">
                            <label htmlFor="pickFrom">Pick From</label>
                            <input className="form-control my-3" onChange={(e) => setPickFrom(e.target.value)} type="text" placeholder="Mirpur-1"/>
                        </div>
                        <div className="input_field">
                            <label htmlFor="pickTo" placeholder="Dhanmondi">Pick To</label>
                            <input className="form-control my-3" onChange={(e) => setPickTo(e.target.value)} type="text" placeholder="Dhanmondi"/>
                        </div>
                        <input className="form-control btn btn-outline-primary" type="submit" value="Search"/>
                        </form>
                    }
                    {
                        !searchVisible && <div>
                        <h1>{pickFrom}</h1>
                        <h2>{pickTo}</h2>
                        <div className="destination_all">

                        
                            <div className="destination_content_details">
                               <img className="car" src={icon} alt=""/> 
                               <span>Car</span>
                               <img className="people" src={people} alt=""/>
                               <span>$67</span>
                            </div>    
                            <div className="destination_content_details">
                               <img className="car" src={icon} alt=""/> 
                               <span>Car</span>
                               <img className="people" src={people} alt=""/>
                               <span>$67</span>
                            </div> 
                            <div className="destination_content_details">
                               <img className="car" src={icon} alt=""/> 
                               <span>Car</span>
                               <img className="people" src={people} alt=""/>
                               <span>$67</span>
                            </div> 
                            <div className="destination_content_details">
                               <img className="car" src={icon} alt=""/> 
                               <span>Car</span>
                               <img className="people" src={people} alt=""/>
                               <span>$67</span>
                            </div> 
                            <button onClick={() => setSearchVisible(true)} className="btn btn-outline-primary form-control mt-5">Back To Search</button>
                            </div>
                        </div>
                    }
                </div>
                <div className="destination_map">
                <iframe title="Mirpur 1" className="mirpur_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.34289342480656!2d90.35353656271444!3d23.794740430696045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2zTWlycHVyLTEsIOCmouCmvuCmleCmvg!5e0!3m2!1sbn!2sbd!4v1617448092864!5m2!1sbn!2sbd" width="600" height="1050" style={{border:0}}allowFullScreen=""></iframe>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Destination; 