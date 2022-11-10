import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to='/update'id={_id} handleReviewUpdate={handleReviewUpdate} className='btn btn-success'>Edit Review</Link>
                <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete Review</button>
            </div>
        </div>
    );
};

export default ReviewDetails;