import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {title, about, price, picture, id} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
      navigate(`/service/${id}`)
    }
    return (
      
      <>
       


       
          <div className="card col-sm-12 col-md-6 col-lg-3" style={{width:"18rem"}}>
               <img src={picture} alt="" />
          {/* <img src={picture} className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{price}</h6>
            <p className="card-text">{about}</p>
            <button onClick={() => navigateToServiceDetail(id)} className="btn btn-primary w-100 pb-0 mb-0"><small>SHOW MORE</small></button>
          </div>
        </div>
      

      </>
      
        
    );
};

export default Service;