import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhotoVideo } from "react-icons/fa";
import toast from 'react-hot-toast';

const AddDoctor = () => {
    const imageHostKey = '6a56f720ef5af169c2b3789d5fb3086f'
    const [specials, setSpecials] = useState([])
    const { register, formState: { errors }, handleSubmit, refetch } = useForm()


    useEffect(() => {
        fetch('http://localhost:5000/appointment-special')
            .then(res => res.json())
            .then(data => setSpecials(data))
    }, [])

    const handleDoctorAdded = data => {

        const image = data?.file[0]


        const formData = new FormData()
        formData.append('image', image)
        const url = 'https://api.imgbb.com/1/upload?key=6a56f720ef5af169c2b3789d5fb3086f'

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(data)
                if (imgData.success) {
                    const doctor = {
                        doctorName: data?.username,
                        special: data?.special,
                        email: data?.email,
                        image: imgData.data.url
                    }
                    console.log(doctor)
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            // navigate('/dashboard/managedoctors')
                        })

                }
            })
    }
    return (
        <div className="">
            <div className=" w-full md:w-5xl">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-900">
                    <form onSubmit={handleSubmit(handleDoctorAdded)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <input type="text" name="username"  {...register("username")} placeholder="Full Name" className="w-full px-4  py-3 rounded-md  border border-gray-200 bg-gray-100 text-gray-900 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input onChange type="email" name="email" {...register("email")} placeholder="Email" className="w-full px-4 py-3 rounded-md  border border-gray-200 bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm p-3  border border-gray-200 bg-gray-100">
                            <select selected name="special" {...register("special")} className='focus:outline-none w-full'>
                                {specials.map(sp => <option
                                    key={sp._id} 
                                    value={sp.title}
                                >{sp.title}</option>)}
                            </select>
                        </div>
                        <div className="space-y-1 text-sm text-center text-gray-400  p-3  border border-gray-200 border-dashed bg-gray-100">
                            <input type="file" name="file"  {...register("file")} className="w-full px-4 py-3 rounded-md  border border-gray-200 bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400" >

                            </input>
                            <p>Upload Your Photo </p>
                            <div className='w-full flex justify-center mt1'>
                                <FaPhotoVideo className='w-10 h-10 text-center' />
                            </div>
                        </div>


                        <button className=" w-full p-3 text-center rounded-md text-gray-100 bg-accent">SUBMIT</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddDoctor;