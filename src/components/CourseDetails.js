import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from './useTitle';


const CourseDetails = () => {
    
    const course=useLoaderData();
   const {_id, name, image, description, price}=course

   useTitle('Service Details')
    return (
        <div>
           
            
        
            <h2>Course Title: {name}</h2>
            <img height={200} className='img-sm ' src={image} alt="this is pic" />
            <h3>Course Description: {description}</h3>
            <p>Course Price: {price}</p>
        
        {
 <Link to={`/checkout/${_id}`}><button className='bg-secondary text-white p-3 rounded-2'>Get Premium Access</button></Link>
        }
          
            
        </div>
    );
};

export default CourseDetails;