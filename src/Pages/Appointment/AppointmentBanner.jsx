import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({setSelected, selected}) => {
        return (
            <div className='bg-base-100 py-10 md:p-10'>
                <div className="md:flex items-center  md:flex-row-reverse">
                    <div className='md:w-3/5 md:pl-5'>
                        <img src={"https://i.ibb.co/qnJqRvg/chair.png"} className="max-w-full rounded-lg shadow-2xl" alt='banner' />
                    </div>
                    <div className=' md:w-2/5 flex justify-center pb-4'>
                        <DayPicker className='mx-auto'
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                        />
                    </div>
                </div>
            </div>
        );
    };

    export default AppointmentBanner;