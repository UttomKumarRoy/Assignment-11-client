import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
   const courses= useLoaderData();
//   const [id, name, price, image, description]=courses;
    return (
        <div className='row'>
           
            <div className='col-sm-12 col-md-9'>
                <div className='row'>
                    <h2 className='text-center bg-primary text-white rounded-2 p-2'>All Services here</h2>
                {
                courses.map(course => <Service key={course.id} course={course} />)
                }
                </div>
            
            </div>
        </div>
    );
};

export default Services;