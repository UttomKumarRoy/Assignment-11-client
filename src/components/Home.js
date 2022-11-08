import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseRight from './CourseRight';

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
                services.map(service=><CourseRight key={service._id} course={service}></CourseRight>)
            }
            <div>
                <Link to='/services'>See All</Link>
            </div>
            <br /> <br /> <br />
            
        </div>
    );
};

export default Home;