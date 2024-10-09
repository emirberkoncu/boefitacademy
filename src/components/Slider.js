import React, { useEffect, useState } from 'react';
import SliderItem from './SliderItem';

const reviews = [
  {
    name: 'John Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-01-01',
  },
  {
    name: 'Jane Doe',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-04-02',
  },
  {
    name: 'Bob Smith',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-08-03',
  },
  {
    name: 'Alice John',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-02-04',
  },
  {
    name: 'Mike Brown',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-09-05',
  },
  {
    name: 'Emily Davis',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-10-06',
  },
  {
    name: 'Tom Harris',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-11-07',
  },
  {
    name: 'Linda Martin',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-10-08',
  },
  {
    name: 'David Lee',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-6-07',
  },
  {
    name: 'Sophia Patel',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2022-23-08',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (reviews.length - itemsPerView + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="relative px-4 py-8">
      <div className="font-bold mb-4 text-2xl sm:text-3xl md:text-4xl text-center">
        <h1>Öğrenci Yorumları</h1>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            width: `${(reviews.length / itemsPerView) * 100}%`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-2"
              style={{ flex: `0 0 ${100 / itemsPerView}%` }}
            >
              <SliderItem review={review} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform transform-translate-y-1/2 bg-white rounded-full p-2  shadow-md"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform transform-translate-y-1/2 bg-white rounded-full  p-2 shadow-md"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
