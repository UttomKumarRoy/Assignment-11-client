import React from 'react';
import { useState } from 'react';

const AddService = () => {
    const [service, setService] = useState({});

    const handleAddService = event =>{
        event.preventDefault();
        console.log(service);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Service added successfully');
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

    return (
        <div>
            <h2>Please add a new Service</h2>
            <form onSubmit={handleAddService}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='image' placeholder='image' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name='price' placeholder='price' required />
                <br />
                <input onBlur={handleInputBlur} type="text" name="description"  placeholder='description' required />
                <br />
                <button type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;