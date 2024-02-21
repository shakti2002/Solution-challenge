import react, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './Login.css';

export const Signuppage = () => {
    const [user, Setuser] = useState({ name: "", email: "", password: "" });


    let navigate = useNavigate();
    //call for api sigup
    const Signup = async (name, email, password) => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/signup', {
                user: JSON.stringify({ name, email, password })
            });

            if (response.status == 200) {
                //Save And Redirect To Home
                localStorage.setItem("email", user['email']);
                navigate('/');
            } else {

                toast.error("User alredy exist!!");

            }
        } catch (error) {
            toast.error('Please tyr to check your network. Backend is not available');
        }

    }



    const handleChange = (e) => {
        Setuser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Signup(user.name, user.email, user.password);
    }
    return (
        <>
            <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                <form className='login_container' onSubmit={handleSubmit}>
                    <h1>Signup</h1>
                    <div className='login_row'>
                        <h4 className='login_email'>Name</h4>
                        <input type='text' name='name' onChange={handleChange} required />
                    </div>
                    <div className='login_row'>
                        <h4 className='login_email'>Email</h4>
                        <input type='email' name='email' onChange={handleChange} required />
                    </div>
                    <div className='login_row'>
                        <h4>Password</h4>
                        <input type='password' name='password' onChange={handleChange} required />
                    </div>
                    <button disabled={user.name.length < 1 || user.password.length < 1}>Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>

    );
}