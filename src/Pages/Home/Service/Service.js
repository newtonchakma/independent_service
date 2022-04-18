import React from 'react';

const Service = ({service}) => {
    const {title, about, price, picture} = service;
    return (
      
      <>
       


       
          <div className="card col-sm-12 col-md-6 col-lg-3" style={{width:"18rem"}}>
               <img src={picture} alt="" />
          {/* <img src={picture} className="card-img-top" alt="..."/> */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{price}</h6>
            <p className="card-text">{about}</p>
            <p className="btn btn-primary w-100 pb-0 mb-0"><small>SHOW MORE</small></p>
          </div>
        </div>
      

      </>
      
        
    );
};

export default Service;