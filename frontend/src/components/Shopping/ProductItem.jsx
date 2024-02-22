// ProductItem.js
import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
    return (
        <div className="border p-4 m-4 shadow-md rounded-md">
            <img src={product.image} alt={product.name} className="h-70 w-full object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold">{product.name}</h3>
            <p className="text-gray-700">Price: ${product.price}</p>
            <button
                onClick={() => onAddToCart(product)}
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductItem;
