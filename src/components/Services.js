import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import LoadingSpinner from './LoadingSpinner';
import Service from './Service';
import useTitle from './useTitle';

const Services = () => {
   const services= useLoaderData();
  const {loading}= useContext(AuthContext)
useTitle('Services')
    return (
        <div className='row'>
           
                <div className='row'>
                    <h2 className='text-center bg-primary text-white rounded-2 p-2'>All Services here</h2>
                {
                    (loading)?LoadingSpinner():
                    
                services.map(service => <Service key={service._id} service={service} />)
                }
                </div> 
            
        </div>
    );
};

export default Services;