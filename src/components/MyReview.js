import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';
import ReviewDetails from './ReviewDetails';
import useTitle from './useTitle';

const MyReview = () => {
    const[reviews,setReviews]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://youtuber-server.vercel.app/reviews?email=${user?.email}`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem('youtube-token')}`
            }
        }
        )
        .then(res => {
            
            return res.json();
        })
        .then(data => setReviews(data))
        .catch(err => console.log(err))
    },[user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this review');
        if(proceed){
            fetch(`https://youtuber-server.vercel.app/reviews/${id}`, {
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
    
   


    useTitle('My Review')
    return (
        <div> 
            <h3 className='text-white bg-primary text-center p-2 rounded-2'>All Reviews of mine are here</h3> <br /> <br />
            {
                reviews.length===0? <h3 className='text-center'>No reviews were added</h3> : reviews.map(review => <ReviewDetails handleDelete={handleDelete}  review={review} key={review._id}/>)
            }
        </div>
    );
};

export default MyReview;