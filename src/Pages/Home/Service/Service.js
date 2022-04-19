import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {title, about, price, picture, id} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
      navigate(`/service/${id}`)
    }
    return (
      
      <>
          
          <div className="col-sm-12 col-md-6 col-lg-4 col-12 gx-5">
          <div className="card ">
           <img className='service-photo' src={picture} alt="" />
                 <div className="card-body">
                   <h5 className="card-title">{title}</h5>
                    <h6 className="card-title">{price}</h6>
                    <p className="card-text">{about}</p>
                   <button onClick={() => navigateToServiceDetail(id)} className="btn btn-primary w-100 pb-0 mb-0"><small>SHOW MORE</small></button>
        
         </div>
           </div>
          </div>


      </>
      
        
    );
};

export default Service;

