import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from './SharedPage/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }

    const { data: doctor, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctor', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                console.log(data)
                // const {doctorName, image, special, _id} = data
                return data;
            } catch (error) {

            }
        }
    })

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctor/${doctor._id}`, {
            method: 'DELETE', 
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                alert('deleted')
            }
        })
    }

    
    if (isLoading) {
        return <p>Loading..</p>
    }
    return (
            <div>
                <h2 className="text-3xl">Manage Doctors: {doctor?.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctor.map((doctor, i) => <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{doctor.doctorName}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.special}</td>
                                    <td>
                                        {/* <label className="btn btn-sm btn-error">Delete</label> */}
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
                {
                    deletingDoctor && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you delete ${deletingDoctor.doctorName}. It cannot be undone.`}
                        successAction = {handleDeleteDoctor}
                        successButtonName="Delete"
                        modalData = {deletingDoctor}
                        closeModal = {closeModal}
                    >
                    </ConfirmationModal>
                }
            </div>
    );
};

export default ManageDoctors;