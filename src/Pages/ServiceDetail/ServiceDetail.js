import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../sharePages/Footer/Footer';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>this is a service detail: {serviceId}</h2>
           <div className="text-center">
           <Link to = "/checkout">
                <button className='btn btn-primary'>Proceed checkout</button>
            </Link>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default ServiceDetail;