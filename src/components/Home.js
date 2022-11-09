import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const Home = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services3')
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <div id="demo" className="carousel slide bg-dark" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://www.servermania.com/kb/wp-content/uploads/2022/04/KB-MERN-Featured.jpg" alt="Los Angeles" className="d-block img-fluid opacity-50"/>
                        <div className="carousel-caption text-white d-flex flex-column justify-content-center align-items-center h-100">
                            <h1>Welcome to our youtube hunter!
                            </h1>
                            <p>Hey! You are in the right place. We have some services in the youtube. You can increase your knowledge by learning from us..</p> 
                        </div>
                    </div> 
                </div>
            </div> <br /> <br />
            <h3 className='text-center bg-secondary text-white p-2 rounded-1'>Our Services</h3> <br />
            <div className='row d-flex justify-content-between align-items-center'>
            {
                services.map(service=><Service key={service._id} course={service}></Service>)
            }
            </div> <br />
            <div className='text-center'>
                <Link className='text-white bg-danger p-2 rounded-3' to='/services'>See All</Link>
            </div>
            <br /> <br /> <br />
            <footer id="about">
        <div className="container-fluid bg-dark text-white d-flex flex-column justify-content-center align-items-center p-5">
            <h1>Youtube Hunter</h1>
            <p>Office 50, , Saidpur, Nilphamari.
            </p>
            <p>Bangladesh</p>
            <p><Link className="text-decoration-none text-white" to='/'>Privacy Policy</Link> | <Link className="text-decoration-none text-white" to='/'>Terms of use</Link></p>
            </div>
            </footer>
        </div>
    );
};

export default Home;