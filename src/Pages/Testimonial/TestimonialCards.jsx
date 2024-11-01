import React from 'react';

const TestimonialCards = ({tsd}) => {
    const {title, time, name, img, description} = tsd 
    return (
        <div className='p-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-100 dark:text-gray-900'>
            <h2 className="mb-1  text-xl font-semibold">{title}</h2>
            <p className="text-sm dark:text-gray-400">{description}</p>
            <div className="flex items-center mt-2">
                <img alt="user" src={img} className="object-cover  bg-primary p-[3px] border- w-14 h-14 rounded-full shadow" />
                <div className=" ml-2">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-gray-400">{time}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCards;