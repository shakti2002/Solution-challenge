import React, { useState } from 'react';

const DoctorSignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        availableHours: '',
        prescriptionFees: '',
        expertise: '',
        specialization: '',
        degree: '',
        experience: '',
        currentSalary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, like sending data to backend or performing validation
        console.log('Form submitted', formData);
    };

    return (
        <div className="min-h-screen  flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign up as a Professional Doctor or Advisor</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {Object.keys(formData).map((key) => (
                            <div key={key}>
                                <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                <input
                                    id={key}
                                    name={key}
                                    type="text"
                                    autoComplete="off"
                                    required
                                    value={formData[key]}
                                    onChange={handleChange}
                                    className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                />
                            </div>
                        ))}
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DoctorSignupPage;
