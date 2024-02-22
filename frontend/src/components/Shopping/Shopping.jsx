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
        { id: 1, name: 'Dog ', price: 10, image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww' },
        { id: 2, name: 'Dog ', price: 8, image: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D' },
        { id: 3, name: 'Cat ', price: 10, image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 4, name: 'Dog', price: 8, image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBldHN8ZW58MHx8MHx8fDA%3D' },
        { id: 5, name: 'Parrot ', price: 10, image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww' },
        { id: 6, name: 'Fish ', price: 8, image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGZpc2h8ZW58MHx8MHx8fDA%3D' },
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

            <div className="w-full max-w-md m-auto relative mt-[4rem] sticky top-[4rem] z-[3]">

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
            <div className='mt-[15rem]'>
                <ProductList products={filteredProducts} onAddToCart={addToCart} />
                <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
            </div>

        </div>
    );
}

export default Shopping;
