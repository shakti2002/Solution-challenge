import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import { FiSearch } from 'react-icons/fi';
import VideoCarousel from '../Crousel/Crousel';

const Shopping = () => {
    const videos = [
        { id: 1, src: 'crousel/video1.mp4' },
        { id: 2, src: 'crousel/video2.mp4' },
        { id: 3, src: 'crousel/video3.mp4' },
        // Add more video objects as needed
    ];

    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const products = [
        { id: 1, name: 'Dog ', price: 10, image: 'dog-food.jpg' },
        { id: 2, name: 'Cat ', price: 8, image: 'cat-food.jpg' },
        { id: 3, name: 'Dog ', price: 10, image: 'dog-food.jpg' },
        { id: 4, name: 'Cat Food', price: 8, image: 'cat-food.jpg' },
        { id: 5, name: 'Dog Food', price: 10, image: 'dog-food.jpg' },
        { id: 6, name: 'Cat ', price: 8, image: 'cat-food.jpg' },
        // Add more products as needed
    ];


    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter(item => item.id !== itemId);
        setCart(updatedCart);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.price.toString().includes(searchTerm);
    });

    return (
        <div className="  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">


            <Header />

            <div className="w-full max-w-md m-auto relative mt-[4rem] sticky top-[4rem]">

                <input
                    type="text"
                    placeholder="Search by name or expertise"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="px-4 py-2  pr-10 border rounded-md w-full border-blue-500 transition-all duration-300 outline-none focus:border-blue-600 focus:shadow-lg focus:shadow-blue-200"
                />
                <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-300" />
            </div>
            <div className='h-[40vh] my-[4rem]'>
                <VideoCarousel videos={videos} />
            </div>
            <div className='my-[15rem]'>
                <ProductList products={filteredProducts} onAddToCart={addToCart} />
                <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
            </div>

        </div>
    );
}

export default Shopping;
