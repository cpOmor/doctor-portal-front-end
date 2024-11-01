import React from 'react';
import Banner from './Banner';
import Testimonial from '../Testimonial/Testimonial';
import Services from '../Services/Services';
import Contact from './Contact/Contact';
import AppointmentHome from '../Appointment/AppointmentHome';

const Home = () => {
    
    return (
        <div>
            <div>
                <Banner />
                <Services/>
                <AppointmentHome/>
                <Testimonial/>
                <Contact/>
            </div>
        </div>
    );
};

export default Home;