import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';
import useTitle from './useTitle';



const ServiceDetails = () => {
   const [reviews,setReviews]= useState({})
    const {user}=useContext(AuthContext);
    const service=useLoaderData();
   const {_id, serviceName, image, description, price}=service
console.log(_id);
useEffect(() => {
    fetch(`https://youtuber-server.vercel.app/reviews/${_id}`)
    .then(res => res.json())
    .then(data => setReviews(data))
    .catch(err => console.log(err))
}, [_id])

   useTitle('Service Details')
   
   const handleReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = user?.name;
    const email = user?.email || 'unregistered';
    const photoURL=user.photoURL;
    const text = form.review.value;
    const serviceId=`${_id}`
    const sName=`${serviceName}`
    console.log(serviceName);
    const review = {
        name,
        email,
        photoURL,
        text,
        serviceId,
        serviceName:sName
    }

    

    fetch('https://youtuber-server.vercel.app/reviews', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(review)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                toast.success('Review given successfully')
                form.reset();
                
            }
        })
        .catch(er => console.error(er));


}
    return (
        <div>
            <div>
                <h2 className='bg-primary text-white p-2 rounded-2 text-center'>Service Details Section</h2>
                <h3>Service Name: {serviceName}</h3>
                <img height={200} className='img-sm ' src={image} alt="this is pic" />
                <p>Service Description: {description}</p>
                <p>Service Price: {price}</p>
            </div>
          
            <br />
            <div>
                <h2 className='bg-primary text-white p-2 rounded-2 text-center'>Review Section</h2>
                {
                    <div>
                       Reviewer: <img className='img-fluid' style={{height:'60px'}} src={reviews?.photoURL} alt='Pic of Commenter'></img> -Comment:{reviews?.text}
                    </div>
                }
            </div>
        <div>
        {
            user? (<div>
                <h3>Please give a review</h3>
                <form onSubmit={handleReview}>
                    <textarea name='review' placeholder='Write your comment' required></textarea> <br />
                    <input className='btn btn-primary' type="submit" value="Submit your review" />
                </form>
            </div>) : 
            (<div>Please login  to add a review. <Link to='/login'>Login</Link> </div>)
                
            
        }
        </div> <br /> <br />
       
        
          
            
        </div>
    );
};

export default ServiceDetails;