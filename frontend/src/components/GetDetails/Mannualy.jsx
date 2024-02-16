import React, { useState } from 'react';

const UserDetailsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        sex: '',
        maritalStatus: '',
        occupation: '',
        location: '',
        address: '',
        aboutFamily: '',
        aboutFriends: '',
        aim: '',
        hobby: '',
        interests: '',
        medicalCondition: ''
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
        console.log(formData); // You can replace this with your form submission logic
        // Here you can send the form data to your backend or perform other actions
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">User Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Age:</label>
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Sex:</label>
                    <input
                        type="text"
                        name="sex"
                        value={formData.sex}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Marital Status:</label>
                    <input
                        type="text"
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Occupation:</label>
                    <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address:</label>
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">About Your Family:</label>
                    <textarea
                        name="aboutFamily"
                        value={formData.aboutFamily}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">About Your Friends:</label>
                    <textarea
                        name="aboutFriends"
                        value={formData.aboutFriends}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Your Aim:</label>
                    <textarea
                        name="aim"
                        value={formData.aim}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Hobby:</label>
                    <textarea
                        name="hobby"
                        value={formData.hobby}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Interests:</label>
                    <textarea
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Medical Condition:</label>
                    <textarea
                        name="medicalCondition"
                        value={formData.medicalCondition}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default UserDetailsForm;
