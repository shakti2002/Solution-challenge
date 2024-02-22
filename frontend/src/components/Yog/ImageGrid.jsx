import React from 'react';

const ImageGrid = ({ images }) => {
    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} className="image" />
            ))}
        </div>
    );
};

export default ImageGrid;
