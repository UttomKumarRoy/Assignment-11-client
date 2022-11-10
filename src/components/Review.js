import React from 'react';

const Review = (props) => {
    const {photoURL, text}=props.review
    return (
        <div className='border bg-success text-white p-2 rounded-2'>
            {
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <img style={{height:'40px'}} className='img-fluid' src={photoURL} alt='User Pic'/> ----
                     <div>{text}</div> 
                </div>
           

            }
        </div>
    );
};

export default Review;