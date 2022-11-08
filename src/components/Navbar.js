import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
   

   
    
    const image=require('./logo.jpg');
    
    return (
        <div className='d-flex justify-content-between align-items-center pt-5'>
            <div className='d-flex'>
                <img src={image} alt="Icon" />
                <h1 className='text-success'>Youtube Hunter</h1>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
            <div>
                <Link className='mx-2 text-decoration-none' to='/'>
                    Home
                </Link>
                </div>
                <div>
                <Link className='mx-2 text-decoration-none' to='/courses'>
                    Services
                </Link>
                </div>
                
                <div>
                <Link className='mx-2 text-decoration-none' to='/blog'>
                    Blog
                </Link>
                </div>
               
                <div>    
                 <Link className='mx-2 text-decoration-none' to='/login'>
                     Login
                </Link>
                  </div>
                
                
               
               
            </div>
        </div>
    );
};

export default Navbar;