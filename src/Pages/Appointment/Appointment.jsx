import React, {  useState } from 'react';
import AppointmentCards from './AppointmentCards';
import AppointmentBanner from './AppointmentBanner';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

const Appointment = () => {
        const [selected, setSelected] = useState(new Date())
        const date = format(selected, 'PP')

    

    const {data : appointmentData = []} = useQuery({
        queryKey : ['appointment', date ] ,
        queryFn : () => fetch(`http://localhost:5000/appointment?date=${date}`)
        .then(res => res.json())
    })


    return (
        <div className='max-w-[1440px] mx-auto'>
            <AppointmentBanner selected={selected} setSelected={setSelected} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {appointmentData?.map(ap => <AppointmentCards selected={selected} key={ap._id} ap={ap} />)}
            </div>
        </div>
    );
};

export default Appointment;