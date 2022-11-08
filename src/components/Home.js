import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services3')
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            {
                services.map(service=><h3>{service.name}</h3>)
            }
            <div>
                <Link to='/services'>See All</Link>
                </div>
        </div>
    );
};

export default Home;