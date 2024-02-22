import React from 'react';
import './Yoga.css';
const ImageGridWithDescription = ({ images }) => {
    const openYoutube = (youtubeLink) => {
        window.open(youtubeLink, '_blank');
    };

    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image.url} alt={image.description} className="image" />
                    <p className="description">{image.description}</p>
                    <button onClick={() => openYoutube(image.youtubeLink)}>Watch on YouTube</button>
                </div>
            ))}
        </div>
    );
};

const Yoga = () => {
    const images = [
        { url: 'https://cdn.pixabay.com/photo/2016/05/10/21/50/meditation-1384758_1280.jpg', description: 'Mindfulness meditation involves focusing your attention on the present moment without judgment.', youtubeLink: 'https://youtu.be/KG8eZsIJwO4?si=VSoYEnX6fI6Yi4B6' },
        { url: 'https://cdn.pixabay.com/photo/2018/02/06/14/07/ease-3134828_960_720.jpg', description: 'Walking meditation is a practice of mindfulness and awareness while walking slowly and deliberately',youtubeLink: 'https://youtu.be/aUdtFe8inl4?si=Dfysio0aMmi0w_42' },
        { url: 'https://cdn.pixabay.com/photo/2017/08/02/20/24/woman-2573216_640.jpg', description: 'Breath awareness meditation involves paying attention to the natural rhythm of your breath as it flows in and out of your body.',youtubeLink: 'https://youtu.be/KG8eZsIJwO4?si=VSoYEnX6fI6Yi4B6' },
        { url: 'https://cdn.pixabay.com/photo/2016/11/18/15/05/beach-1835213_640.jpg', description: 'isualization meditation involves creating mental images or scenes that evoke feelings of relaxation, calmness, or positivity.',youtubeLink: 'https://youtu.be/aUdtFe8inl4?si=Dfysio0aMmi0w_42' },
        { url: 'https://cdn.pixabay.com/photo/2021/10/19/11/35/yoga-6723315_640.jpg', description: 'Mantra meditation involves repeating a sacred word, phrase, or sound (mantra) silently or aloud to focus the mind and evoke a particular state of consciousness.',youtubeLink: 'https://youtu.be/aUdtFe8inl4?si=Dfysio0aMmi0w_42' },
        { url: 'https://cdn.pixabay.com/photo/2019/06/26/09/52/girl-4300034_1280.jpg', description: 'n a body scan meditation, you systematically focus your attention on different parts of your body.',youtubeLink: 'https://youtu.be/KG8eZsIJwO4?si=VSoYEnX6fI6Yi4B6' },
        // { url: 'https://example.com/image7.jpg', description: 'Description 7' },
        // { url: 'https://example.com/image8.jpg', description: 'Description 8' },
        // { url: 'https://example.com/image9.jpg', description: 'Description 9' },
        // Add more image URLs and descriptions as needed
    ];

    return (
        <div>
            {/* <h1>Image Gallery</h1> */}
            <ImageGridWithDescription images={images} />
        </div>
    );
};

export default Yoga;
