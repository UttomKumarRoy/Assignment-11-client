import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Service from './Service';
import useTitle from './useTitle';

const Home = () => {
    const services=useLoaderData()
   
    useTitle('Home')
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
            <div>
                    <div className="container bg-info p-5 rounded">
                        <div className="row ">
                            <div className="col-lg-10 col-md-12 col-sm-12 text-lg-start text-center text-white">
                                <h2>Ready to join?</h2>
                                <p>If you want to join our any courses, please register yourself by giving some information of you.</p>
                            </div>
                            <div className="col-lg-2 col-md-12 col-sm-12  text-center">
                                <Link to='/register' className="btn ms-auto text-primary bg-light px-4 py-2" data-bs-toggle="modal" data-bs-target="#RegisterMe">Register Now</Link>

                                
                            </div>
                        </div>
                    </div>
            </div> <br /> <br />
           
            <div>
            <section>
        <div className="container">
            <div>
                <h1>Some Students Feedback</h1>
                <p>Some of our students make comment for our service. Explore below.</p>
                <br/>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 border border-1 p-5">
                    <div className="d-flex justify-content-between">
                        <img className="img-fluid" style={{height:'30px'}} src="https://t3.ftcdn.net/jpg/05/27/25/98/360_F_527259891_vtlhiqW7ajrLlxf6aQYpa8Aw7BaMsLpW.jpg" alt=""/>
                        <div className="text-warning">
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                        </div>
                    </div>

                    <p>
                        This is very nice institute. I learned many things from here.
                    </p>
                    <div className="d-flex gap-3">
                        <img  style={{height:'60px'}}  className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFWYXoT82R6VsoCOXzgGh2IJEMT4Nf6kV62Us8IxJk&s" alt=""/>
                        <div>
                            <h5>Awlad Hossain
                            </h5>
                            <p>UI Designer</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 border border-1 p-5">
                    <div className="d-flex justify-content-between">
                        <img className="img-fluid" style={{height:'30px'}} src="https://t3.ftcdn.net/jpg/05/27/25/98/360_F_527259891_vtlhiqW7ajrLlxf6aQYpa8Aw7BaMsLpW.jpg" alt=""/>
                        <div className="text-warning">
                        <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                            <img style={{height:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZtliqy3A-_J3-nQKje4ydO0DX9BAqAiYKg10uxeYZg&s" alt="" />
                        </div>
                    </div>
                    <p>
                        This is very nice institute. I learned many things from here.
                    </p>
                    <div className="d-flex gap-3">
                        <img style={{height:'60px'}} className="img-fluid" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
                        <div>
                            <h5>Shanta Akter
                            </h5>
                            <p>Graphic Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div> <br />
            <footer id="about">
        <div className="container-fluid bg-dark text-white d-flex flex-column justify-content-center align-items-center p-5">
            <h1>Youtube Hunter</h1>
            <p>Office 50, , Saidpur, Nilphamari.
            </p>
            <p>Bangladesh</p>
            <p><Link className="text-decoration-none text-white" to='/'>Privacy Policy</Link> | <Link className="text-decoration-none text-white" to='/'>Terms of use</Link></p>
            </div>
            </footer> <br />
        </div>
    );
};

export default Home;