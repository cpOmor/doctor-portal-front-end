import React from 'react';

const ServiceCard = ({services}) => {
    const {title, img, description} = services
    return (
        <div className={' text-gray-900 card-side p-5  py-10'}>
            <figure className='h-[86px] mx-auto mb-5 w-[86px]'>
              <img src={img} alt="" />
            </figure>
            <div className="card-body py-0 text-center">
                <h2 className=" text-2xl font-bold text-center">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;