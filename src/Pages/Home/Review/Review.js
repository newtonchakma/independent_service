import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, image, comment} = review;
    return (
           <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card shadow rounded-3 review">
              <img src={image} alt=""/>
                   <p className="card-text px-3 pt-4">{comment}</p>
                   <h6 className="card-name">{name}</h6>
              </div>
           </div>
      
    
    );
};

export default Review;