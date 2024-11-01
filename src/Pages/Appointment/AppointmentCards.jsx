import React from 'react';
import AppointmentModal from './AppointmentModal';

const AppointmentCards = ({ ap, selected }) => {
    const { _id,  title, slots, site } = ap
    return (
        <div className=''>
            <div className='text-center  hover:shadow-xl shadow-md py-10 m-10 space-y-2'>
                {/* <h2 className='text-2xl font-semibold text-primary'>Your Selected date : {selected}</h2> */}
                <h2 className='text-xl font-semibold text-primary'>{title}</h2>
                <p className='text-sm'>{site} SPACES AVAILABLE</p>
                <label htmlFor={`my-modal-${_id}`} className="bg-gradient-to-r from-primary to-secondary text-gray-50 btn btn-primary">Book Appointment</label>
                <AppointmentModal title={title} selected={selected} slots={slots} id={_id} />
            </div>
        </div>
    );
};

export default AppointmentCards;