import React from "react";
import { useNavigate } from "react-router-dom";

const ScheduledMeetings = ({ meetings ,id}) => {
    const navigate = useNavigate();

    const handleMeet = () => {
        navigate(`./room`);
    }
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Scheduled Meetings</h2>
            {meetings.map((meeting, index) => (
                <div key={index} className="mb-4">
                    <div className="text-gray-600 mb-2">{meeting.date.toLocaleString()}</div>
                    <div className="text-gray-600 mb-2">{meeting.doctor.name}</div>
                    <button onClick={handleMeet} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Join</button>
                </div>
            ))}
        </div>
    );
};

export default ScheduledMeetings;