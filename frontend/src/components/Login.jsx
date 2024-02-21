import react, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import './Login.css';


const Login = () => {
    const [user, Setuser] = useState({ email: "dd4321@gmail.com", password: "dd4321" });
    let navigate = useNavigate();
    const LoginUser = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                user: user,
            });

            if (response.status == 200) {
                //Save And Redirect To Home
                localStorage.setItem("email", user['email']);
                navigate('/');
            } else {
                toast.error("PLease fill correct details again !");
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
        LoginUser();
    }
    return (
        <>
            <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                <form className='login_container' onSubmit={handleSubmit}>
                    <h1>Login</h1>

                    <div className='login_row'>
                        <h4 className='login_email'>Email</h4>
                        <input type='email' name='email' onChange={handleChange} required />
                    </div>
                    <div className='login_row'>
                        <h4>Password</h4>
                        <input type='password' name='password' onChange={handleChange} required />
                    </div>
                    <button disabled={user.password.length < 1} >Submit</button>
                </form>
                <ToastContainer />
            </div>
        </>

    );
}
export default Login;