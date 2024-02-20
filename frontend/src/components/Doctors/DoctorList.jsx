import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


export const doctors = [
    { id: 1, name: 'Dr. Rajiv Patel', expertise: 'Cardiologist', description: 'Dr. Rajiv Patel is a highly experienced cardiologist with over 15 years of practice.', image: 'https://dashboard.localvox.com/sites/default/files/inline_images/doctor_1.jpg' },
    { id: 2, name: 'Dr. Sanju Sam', expertise: 'Dermatologist', description: 'Dr. Sanju Sam specializes in dermatology and offers personalized treatment for skin conditions.', image: 'https://dashboard.localvox.com/sites/default/files/inline_images/doctor_1.jpg' },
    { id: 3, name: 'Dr. Mohit Jain', expertise: 'Neurologist', description: 'Dr. Mohit Jain is a renowned neurologist known for his expertise in treating neurological disorders.', image: 'https://dashboard.localvox.com/sites/default/files/inline_images/doctor_1.jpg' },

    { id: 4, name: 'Dr. Rajiv Patel', expertise: 'Cardiologist', description: 'Dr. Rajiv Patel is a highly experienced cardiologist with over 15 years of practice.', image: 'https://dashboard.localvox.com/sites/default/files/inline_images/doctor_1.jpg' },

    { id: 5, name: 'Dr. Rajiv Patel', expertise: 'Cardiologist', description: 'Dr. Rajiv Patel is a highly experienced cardiologist with over 15 years of practice.', image: 'https://dashboard.localvox.com/sites/default/files/inline_images/doctor_1.jpg' },

    { id: 6, name: 'Dr. Rajiv Patel', expertise: 'Cardiologist', description: 'Dr. Rajiv Patel is a highly experienced cardiologist with over 15 years of practice.', image: 'https://dashboard.localvox.com/sites/default/files/inline_images/doctor_1.jpg' },

];

const DoctorList = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredDoctors = doctors.filter((doctor) => {
        return doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.expertise.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="px-4 py-8">
            <div className="w-full max-w-md m-auto relative sticky top-[4rem]">
                <input
                    type="text"
                    placeholder="Search by name or expertise"
                    value={searchTerm}
                    onChange={handleChange}
                    className="px-4 py-2  pr-10 border rounded-md w-full  border-blue-500 transition-all duration-300 outline-none focus:border-blue-600 focus:shadow-lg focus:shadow-blue-200"
                />
                <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-300" />
            </div>

            <div className="flex flex-wrap justify-center mt-8">
                {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

const DoctorCard = ({ doctor }) => {
    const navigate = useNavigate();

    const handleScheduleMeet = () => {
        navigate(`/schedule/${doctor.id}`);
    };

    return (
        <div className="m-4 p-4 w-[17rem] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={doctor.image} alt={doctor.name} className=" w-[10rem] object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{doctor.name}</h2>
            <p className="text-gray-600 mb-2">{doctor.expertise}</p>
            <p className="text-gray-700 mb-4">{doctor.description}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                onClick={handleScheduleMeet}
            >
                Schedule Meet
            </button>
        </div>
    );
};

export default DoctorList;