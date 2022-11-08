import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext';


const Navbar = () => {
   const{user, logout, loading}=useContext(AuthContext)

   console.log(user,logout, loading);

   const handleLogout=()=>{
     logout()
   }
    
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
                 
                  </div>
                <div>
                    {
                    user? (<div className='d-flex justify-content-between align-items-center'><Link className='mx-2 text-decoration-none' to='review'>Review</Link><Link className='mx-2 text-decoration-none' to='addService'>Add Service</Link><Link onClick={handleLogout} className='mx-2 text-decoration-none' to='/'>Logout</Link></div>):<Link className='mx-2 text-decoration-none' to='/login'>
                    Login
               </Link>

                    }
                </div>
                
               
               
            </div>
        </div>
    );
};

export default Navbar;