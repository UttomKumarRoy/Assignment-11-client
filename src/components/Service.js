import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = (props) => {
    const {_id, serviceName, image, price, description}=props.service;
    
    return (
        <PhotoProvider>
            <div style={{border:"2px solid green"}} className='col-sm-12 col-md-6 col-lg-4 g-3'>
            <h4>Service Name: {serviceName}</h4>
            <PhotoView src={image}>
                 <img style={{height:'250px'}} className='img-fluid' src={image} alt="This is course" />
            </PhotoView>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <div>{<Link to={`/services/${_id}`}><span className='rounded-3 p-3'>View Details</span> </Link>}</div>
            
        </div>
        </PhotoProvider>
        
    );
};

export default Service;