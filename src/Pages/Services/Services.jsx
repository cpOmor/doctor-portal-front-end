import React from 'react';
import Primary from '../../Components/Primary';
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceInfo =
        [
            {
                id: 1,
                img: 'https://i.ibb.co/pXLPnrz/whitening-1.png',
                title: 'Fluoride Treatment',
                description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
            },
            {
                id: 2,
                img: 'https://i.ibb.co/C27KDQ5/cavity-1.png',
                title: 'Cavity Filling ',
                description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
            },
            {
                id: 3,
                img: 'https://i.ibb.co/tMvLYnY/fluoride-1.png',
                title: 'Teeth Whitening',
                description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
            }
        ]
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className="text-center mt-10">
                <p className="text-primary font-bold">OUR SERVICES</p>
                <p className="text-2xl">Services We Provide</p>
            </div>
            <div className='gap-5 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {serviceInfo?.map(si => <ServiceCard key={si.id} services={si} />)}
            </div>
            <div className="p-[8%] lg:card md:flex items-center lg:card-side bg-base-100  shadow-xl">
                <div className='px-5 md:w-1/2 lg:w-2/5 md:flex items-center'>
                    <img className='w-full rounded-md bg-cover lg:h-[80%]' src="https://i.ibb.co/GFY9ms1/treatment.png" alt="Movie" />
                </div>
                <div className="lg:pl-10 md:w-1/2 md:flex items-center lg:w-3/5">
                    <div>
                        <h2 className="text-4xl lg:text-5xl  font-bold">
                            Exceptional Dental Care, on Your Terms
                        </h2>
                        <p className='py-5'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                        </p>
                        <div >
                            <Primary>Get Started</Primary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;