import React from 'react';
import Primary from '../../../Components/Primary';

const Contact = () => {
    return (
        <div className='lg:py-10 bg-[url("https://i.ibb.co/h8pXZ0N/appointment.png")]'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='text-center pt-10  '>
                    <p className='text-primary '>Contact Us</p>
                    <p className='text-2xl text-gray-100'>Stay connected with us</p>
                </div>
                <section className="p-6 md:max-w-lg lg:w-2xl mx-auto">
                    <form className="w-full ">
                        <div>
                            <input type="email" placeholder="Your email" required="Please enter your a valid mail" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-200" />
                        </div>
                        <div>
                            <input type="text" placeholder="Subject" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-200 my-2" />
                        </div>
                        <div>
                            <textarea type="text" placeholder="Message..." className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-200 mb-2"></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <Primary><span className='px-5'>Submit</span></Primary>
                            {/* <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-gray-50 btn btn-primary">Send</button> */}
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;