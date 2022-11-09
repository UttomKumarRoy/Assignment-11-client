import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from './useTitle';

const AddService = () => {
    const [service, setService] = useState({});

    const handleAddService = event =>{
        event.preventDefault();
        console.log(service);

        fetch('https://youtuber-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Service added successfully');
                event.target.reset();
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...service}
        newService[field] = value;
        setService(newService);
    }
useTitle('Add Service')
    return (
        <div className='text-center'>
            <h2 className='bg-success text-white p-2 rounded-2'>Please add a new Service</h2> <br />
            <form onSubmit={handleAddService}>
                <input onBlur={handleInputBlur} type="text" name='serviceName' placeholder='Service Name' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='image' placeholder='Image URL' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='price' placeholder='Service Price' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="description"  placeholder='Service Description' required />
                <br /> <br />
                <button className='btn btn-primary' type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;