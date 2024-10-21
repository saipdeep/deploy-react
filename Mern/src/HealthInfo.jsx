import React from 'react';
import './HealthInfo.css'; // Import CSS for styling

function HealthInfo() {
    const doctors = [
        { name: "Dr. John Smith", specialty: "Cardiologist", contact: "+1 (234) 567-8901", email: "john.smith@clinic.com"},
        { name: "Dr. Jane Doe", specialty: "Dermatologist", contact: "+1 (234) 567-8902", email: "jane.doe@clinic.com"},
        { name: "Dr. Emily Johnson", specialty: "Pediatrician", contact: "+1 (234) 567-8903", email: "emily.johnson@clinic.com"},
        { name: "Dr. Michael Brown", specialty: "Orthopedic Surgeon", contact: "+1 (234) 567-8904", email: "michael.brown@clinic.com"},
        { name: "Dr. Sarah Davis", specialty: "General Practitioner", contact: "+1 (234) 567-8905", email: "sarah.davis@clinic.com"},
    ];

    return (
        <div className="health-info-container">
            <h2>Doctors by Specialty</h2>

            {/* List of doctor specialties */}
            {doctors.map((doctor, index) => (
                <div key={index} className="doctor-card">
                    <h3>{doctor.name}</h3>
                    <p><strong>Specialty:</strong> {doctor.specialty}</p>
                    {/* Displaying contact and email */}
                    <p><strong>Contact:</strong> {doctor.contact}</p>
                    {/* Optional email display */}
                    {/* You can uncomment this line if you want to show emails */}
                    {/*<p><strong>Email:</strong> {doctor.email}</p>*/}
                </div>
            ))}
            
             {/* You can add images or graphics related to health information here */}
         </div>

     );
 }

 export default HealthInfo;