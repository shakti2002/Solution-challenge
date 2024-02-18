import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoCarousel = ({ videos }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className='w-[80%] m-auto bg-[#69696929] p-[2rem] rounded'>
            {videos.map(video => (
                <div key={video.id}>
                    <video controls className='h-[25rem] m-auto'>
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </Slider>
    );
};

export default VideoCarousel;
