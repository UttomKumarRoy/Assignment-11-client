import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/UserContext';
import useTitle from './useTitle';

const MyReview = () => {
    const[reviews,setReviews]=useState([])
    const {user}=useContext(AuthContext)
    console.log(user.email);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email==${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
        .catch(err => console.log(err))
    },[user?.email])
    useTitle('My Review')
    return (
        <div>
            {
                reviews.map(review => <div key={review._id}>{review.name}</div>)
            }
        </div>
    );
};

export default MyReview;