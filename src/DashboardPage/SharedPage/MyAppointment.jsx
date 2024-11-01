import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvide';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)

    const [appointment, setAppointment] = useState([])
    

    // const { data: bookings, isLoading} = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFun: async () => {
    //         const res = await fetch(`http://localhost:5000/bookings?email=omar@gmail.com`)
    //         const data = await res.json()
    //         return data
    //     }
    // })



    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers : {
                authorization: `bearer ${localStorage.getItem('accessToken')}`  
            }
        })
        .then(res => res.json())
        .then(data => setAppointment(data))
        
    }, [user])

    return (
        <div className='bg-gray-100  min:h-[700px] p-10'>
            <h3 className="text-3xl py-3 ">
                My Appointment
            </h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        appointment.map((ap, i) =>
                            <tr key={ap._id}>
                                <th>{i+1}</th>
                                <td>{ap?.pasent}</td>
                                <td>{ap?.treatment}</td>
                                <td>{ap?.appointmentDate}</td>
                                <td>{ap?.slot}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;