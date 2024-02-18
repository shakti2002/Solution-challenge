// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <ul className="divide-y divide-gray-300">
                {cart.map(item => (
                    <li key={item.id} className="py-2 flex items-center">
                        <img src={item.image} alt={item.name} className="h-16 w-16 rounded mr-4" />
                        <div className="flex-grow">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-600">${item.price} - Quantity: {item.quantity}</p>
                        </div>
                        <button
                            className="text-red-500 hover:text-red-700 font-semibold"
                            onClick={() => handleRemoveFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
