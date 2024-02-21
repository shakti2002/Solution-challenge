import React from 'react';
import { Link } from 'react-router-dom';

const ApplicationOptionsPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Choose Application Type</h2>
                </div>
                <div className="mt-8 space-y-6">
                    <Link to="/doctor-signup" className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-lg font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 block transform transition duration-300 hover:scale-105">
                        Onboard as a Professional Doctor
                    </Link>
                    <Link to="/friend-signup" className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-lg font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 block transform transition duration-300 hover:scale-105">
                        Onboard as a Friend
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ApplicationOptionsPage;