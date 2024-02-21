import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doctors } from './DoctorList';
import ScheduledMeetings from './ScheduledMeetings';

const DoctorSchedulePage = () => {
    const { id } = useParams();
    const doctor = doctors.find((doc) => doc.id === Number(id));

    const [selectedDate, setSelectedDate] = useState(null);
    const [scheduledMeetings, setScheduledMeetings] = useState([]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleScheduleMeeting = () => {
        const currentDate = new Date();
        if (selectedDate && selectedDate > currentDate) {
            const newMeeting = { doctor, date: selectedDate };
            setScheduledMeetings([...scheduledMeetings, newMeeting]);
            toast.success(`Meeting scheduled with Dr. ${doctor.name} on ${selectedDate}`);
        } else if (!selectedDate) {
            toast.error('Please select a date and time for the meeting.');
        } else {
            toast.error('Please select a future date and time for the meeting.');
        }
    };

    return (
        <div className='flex'>
            <div className="w-[70%]  mx-auto px-4 py-8 flex">
                <div className="w-[100%]">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4">Schedule a Meeting with {doctor.name}</h1>
                        <img src={doctor.image} alt={doctor.name} className="rounded-full mx-auto w-32 h-32 mb-4" />
                        <p className="text-gray-600 mb-4">{doctor.expertise}</p>
                    </div>
                    <div className="flex justify-center mb-4">
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            showTimeSelect
                            dateFormat="Pp"
                            className="p-2 border rounded-md mr-2 focus:outline-none focus:border-blue-500"
                        />
                        <button onClick={handleScheduleMeeting} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:bg-blue-600">Schedule Meeting</button>
                    </div>
                    <ToastContainer />
                </div>

            </div>
            <div className="w-[30%] ml-8">
                <ScheduledMeetings meetings={scheduledMeetings} id={id } />
            </div>
        </div>
    );
};

export default DoctorSchedulePage;
