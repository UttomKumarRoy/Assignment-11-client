import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';
import ReviewDetails from './ReviewDetails';
import useTitle from './useTitle';

const MyReview = () => {
    const[reviews,setReviews]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.log(err))
    },[user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('Deleted successfully');
                    const remaining = reviews.filter(odr => odr._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }
    
    const handleReviewUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = reviews.filter(odr => odr._id !== id);
                const approving = reviews.find(odr => odr._id === id);
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining];
                setReviews(newOrders);
            }
        })
    }


    useTitle('My Review')
    return (
        <div> 
            <h3 className='text-white bg-primary text-center p-2 rounded-2'>All Reviews of mine are here</h3> <br /> <br />
            {
                reviews.length===0? <h3 className='text-center'>No reviews were added</h3> : reviews.map(review => <ReviewDetails handleDelete={handleDelete} handleReviewUpdate={handleReviewUpdate} review={review} key={review._id}/>)
            }
        </div>
    );
};

export default MyReview;