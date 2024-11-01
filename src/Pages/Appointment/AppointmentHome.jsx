import React from 'react';
import Primary from '../../Components/Primary';

const AppointmentHome = () => {
   
    return (
        <div className="bg-[url('https://i.ibb.co/h8pXZ0N/appointment.png')] bg-base-100  image-full mt-48">
            <div className='lg:flex max-w-[1440px] mx-auto '>
                <div className='hidden lg:block lg:w-2/5 -mt-48'>
                    <img className='w-full z-50' src="https://i.ibb.co/LrnfVjN/doctor.png" alt="" />
                </div>
                <div className="p-[8%] lg:p-14 text-gray-100 lg:w-3/5">
                    <h2 className=" text-primary">Appointment</h2>
                    <h1 className=" text-4xl lg:text-5xl  font-bold">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                    </p>
                    <Primary className=''>Get Started</Primary>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHome;