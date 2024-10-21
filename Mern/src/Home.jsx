import React from 'react';// Import CSS for styling
import healthClinicImage from './pics/istockphoto-1496103633-612x612.jpg';
import doctorImage from './pics/istockphoto-1935710691-1024x1024.jpg';
import patientCareImage from  './pics/istockphoto-2154850841-612x612.webp'; // Example image 3

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Our Health Clinic</h1>
            <img src={healthClinicImage} alt="Health Clinic" className="clinic-image" />
            <p>Your health is our priority. Please navigate through the website for more information</p>
            <h2>Our Services</h2>
            <div className="image-gallery">
                <img src={doctorImage} alt="Doctor" className="service-image" />
                <img src={patientCareImage} alt="Patient Care" className="service-image" />
            </div>
        </div>
    );
}

export default Home;
