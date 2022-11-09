import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from './useTitle';

const Service = (props) => {
    const {_id, name, image, price, description}=props.course;
    useTitle('Service')
    return (
        <div style={{border:"2px solid green"}} className='col-sm-12 col-md-6 col-lg-4 g-3'>
            <h4>Service Name: {name}</h4>
            <img height={200} className='img-fluid' src={image} alt="This is course" />
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <div>{<Link to={`/services/${_id}`}><span className='rounded-3 p-3'>View Details</span> </Link>}</div>
            
        </div>
    );
};

export default Service;