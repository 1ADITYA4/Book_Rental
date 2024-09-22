import React from 'react';

function BookCard({ title, author, description, cover }) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={cover} alt="Book Cover" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600">by {author}</p>
                <p className="text-gray-600 mt-2">{description}</p>
                <button className="mt-4 btn-primary">Borrow</button>
            </div>
        </div>
    );
}

export default BookCard;
