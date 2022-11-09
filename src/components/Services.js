import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';
import useTitle from './useTitle';

const Services = () => {
   const courses= useLoaderData();
useTitle('Services')
    return (
        <div className='row'>
           
                <div className='row'>
                    <h2 className='text-center bg-primary text-white rounded-2 p-2'>All Services here</h2>
                {
                courses.map(course => <Service key={course.id} course={course} />)
                }
                </div> 
            
        </div>
    );
};

export default Services;