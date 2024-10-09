import React from 'react';

const SliderItem = ({ review, className }) => {
  return (
    <div className={`bg-white p-4 shadow-md rounded-md ${className}`}>
      <p className="text-base sm:text-lg font-bold mb-2">{review.name}</p>
      <p className="text-sm sm:text-base mb-4">{review.review}</p>
      <p className="text-xs sm:text-sm text-gray-500">{review.date}</p>
    </div>
  );
};

export default SliderItem;
