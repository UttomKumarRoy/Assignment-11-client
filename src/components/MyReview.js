import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/UserContext';
import ReviewDetails from './ReviewDetails';
import useTitle from './useTitle';

const MyReview = () => {
    const[reviews,setReviews]=useState([])
    const {user,logout}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://youtuber-server.vercel.app/reviews?email=${user?.email}`,
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem('youtube-token')}`
            }
        }
        )
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                return logout();
            }
            return res.json();
        })
        .then(data => setReviews(data))
        .catch(err => console.log(err))
    },[user?.email,logout])

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
    
    //const handleReviewUpdate = id => {
    //    fetch(`http://localhost:5000/reviews/${id}`, {
    //        method: 'PATCH', 
    //        headers: {
    //            'content-type': 'application/json'
    //        },
    //        body: JSON.stringify({text:'Approved'})
    //    })
    //    .then(res => res.json())
    //    .then(data => {
    //        console.log(data);
    //        if(data.modifiedCount > 0) {
    //            const remaining = reviews.filter(odr => odr._id !== id);
    //            const approving = reviews.find(odr => odr._id === id);
    //            approving.text = 'Approved'

    //            const newOrders = [approving, ...remaining];
    //            setReviews(newOrders);
    //        }
    //    })
    //}


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