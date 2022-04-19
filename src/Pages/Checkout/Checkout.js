import React from 'react';
import Footer from '../../sharePages/Footer/Footer';

const Checkout = () => {
    return (
        <>
        <div className='mx-auto text-center'>
           <h1 className='mt-5 pt-5 text-uppercase'>Please checkout for your bookings</h1>
           <div className="container">
               <div className="row">
                   <div className="col mt-5 mb-5">
                   <div className="card text-center">
                        <h1>$110</h1>
                        <h3>for 1st mont then $99per month</h3>
                      <ul className="list-group list-group-flush">
                         <li className="list-group-item">Fantastic opportunity to enhance fitness levels within a gym or home setting.</li>
                          <li className="list-group-item">FREE Initial Consultation</li>
                          <li className="list-group-item">Includes real-time home training with trainer via video (upto 3 x 45 min sessions per week)</li>
                          <li className="list-group-item">Tailored Workouts & Exercise Programmes </li>
                          <li className="list-group-item">Fitness Goal Setting and Advice</li>
                          <li className="list-group-item">Nutritional Guidance and Advice For Meal Preparation </li>
                       </ul>
                <div className="card-footer">
                     START NOW
            </div>
        </div>
                   </div>
               </div>
           </div> 
        </div>
        <Footer></Footer>
        </>
    );
};

export default Checkout;