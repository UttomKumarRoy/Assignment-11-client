import React from 'react';

const ReviewDetails = ({handleDelete, handleReviewUpdate, review}) => {
    const {_id, serviceId,serviceName, text}=review
   
    return (
        <div className='border bg-secondary text-white p-3 rounded-3 d-flex flex-row justify-content-between align-items-center'>
            <div>
                <p>Service Id: {serviceId}</p>
                <p>Service Name: {serviceName}</p>
                <p>Review text: {text}</p>
            </div>
            <div className='d-flex flex-column gap-5 gy-2'>
                <button onClick={() => handleReviewUpdate(_id)} className='btn btn-success'>Edit Review</button>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete Review</button>
            </div>
        </div>
    );
};

export default ReviewDetails;