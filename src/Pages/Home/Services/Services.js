import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])
    return (

            <>
             <h1 className='text-center mt-5 mb-4 pt-5 pb-4'>MY SERVICE</h1>
              <div id='services' className="card-group container gx-5 mb-5 pb-5 "> 
           {
               services.map(service => <Service
               key={service.id}
               service={service}
               ></Service>)
               
            }
           </div>
            </>
       
       
    );
};

export default Services;