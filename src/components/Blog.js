import React from 'react';
import useTitle from './useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div> <br />
            <h2 className='text-white text-center bg-secondary rounded-5 p-3'>Please read this blog</h2> <br /> <br />
             <div className='bg-dark text-white p-2 rounded-3'>
                <h3>1. What are the differences between SQL and NoSQL?</h3>
                <p> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).A SQL Database follows a table like structure which can have an unlimited number of rows and every data present inside the database is properly structured with Predefined Schemas, it is basically used to manipulate Relational Databases Management Systems. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.A NoSQL Database is a Distributed Database where the data is very unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited rows but it follows a Standard Schema Definition and can store all sorts of data models with large distributed data in the form of key-value pairs, graph databases, documents or wide-column stores. </p>
            </div> <br />
            <div className='bg-dark text-white p-2 rounded-3'>
                <h3>2. What is JWT and how does it work?</h3>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />
                JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                </p>
            </div> <br />
            <div className='bg-dark text-white p-2 rounded-3'>
                <h3>3. What is the difference between javascript and NodeJS?</h3>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div> <br />
            <div className='bg-dark text-white p-2 rounded-3'>
                <h3>4. How does NodeJS handle multiple requests at the same time?</h3>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div> <br />
        </div>
    );
};

export default Blog;