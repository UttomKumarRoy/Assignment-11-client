import React, { useState } from 'react';

const Update = ({ id}) => {

    const[review, setReview]=useState()

    const handleReviewUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({text:`${review}`})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            //if(data.modifiedCount > 0) {
            //    const remaining = reviews.filter(odr => odr._id !== id);
            //    const approving = reviews.find(odr => odr._id === id);
            //    approving.text = 'Approved'

            //    const newOrders = [approving, ...remaining];
            //    setReview(newOrders);
            //}
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newService = {...review}
        newService[field] = value;
        setReview(newService);
    }
    //const {_id}=review
    return (
        <div>
            <h3>Update your Review</h3>
            <form onSubmit={() => handleReviewUpdate(id)}>
                <textarea onBlur={handleInputBlur} name="text" id="" cols="30" rows="10">Updated Text write here</textarea>
                <input type='submit' value='Update Review'/>
            </form>
        </div>
    );
};

export default Update;