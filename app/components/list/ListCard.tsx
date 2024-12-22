import React from 'react';

const ListCard: React.FC = () => {
    const cards = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2 h-48">
            <h2 className="text-xl font-bold mb-2">Card {index + 1}</h2>
            <p className="text-gray-700">This is a description of the card.</p>
        </div>
    ));

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="grid grid-cols-4 gap-4">
                {cards}
            </div>
        </div>
    );
};

export default ListCard;