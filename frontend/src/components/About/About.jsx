import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        A mental health support website with advanced chatbot integration for personalized counseling, NLP-driven chatbots, empathetic responses, prioritizing privacy, and therapy escalation.
                    </p>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: Chatbot */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Chatbot</h3>
                        <p className="text-gray-600">
                            Ensures secure, comfortable, and private conversation experiences for users, offering confidential support and guidance.
                        </p>
                    </div>
                    {/* Feature 2: Mood Playlist */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Mood Playlist</h3>
                        <p className="text-gray-600">
                            Suggests songs based on the user's mood, analyzing chatting words to provide personalized music recommendations for relaxation and comfort.
                        </p>
                    </div>
                    {/* Feature 3: Scheduling Meetings */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Scheduling Meetings</h3>
                        <p className="text-gray-600">
                            Offers personalized therapist interaction by scheduling meetings when users require additional support or guidance.
                        </p>
                    </div>
                    {/* Feature 4: Snap Me */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Snap Me</h3>
                        <p className="text-gray-600">
                            Utilizes sentiment analysis to conduct mental health checks via image snapshots, offering insights and support based on user emotions.
                        </p>
                    </div>
                    {/* Feature 5: Near Me */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Near Me</h3>
                        <p className="text-gray-600">
                            Locates nearby therapists for physical meetings when necessary, providing users with convenient access to in-person support and counseling.
                        </p>
                    </div>
                    {/* Feature 6: Test Me */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Test Me</h3>
                        <p className="text-gray-600">
                            Conducts mental health analysis through personalized tests, offering users valuable insights into their emotional well-being and suggesting appropriate support resources.
                        </p>
                    </div>
                    {/* Feature 7: Meditate with us */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Meditate with Us</h3>
                        <p className="text-gray-600">
                            Suggests various meditation and yogic practices to promote mental well-being and relaxation, guiding users through mindfulness exercises for stress relief and inner peace.
                        </p>
                    </div>
                    {/* Feature 8: Security */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Security</h3>
                        <p className="text-gray-600">
                            Chats are highly secure with two-factor authentication, ensuring the privacy and confidentiality of user conversations and data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;