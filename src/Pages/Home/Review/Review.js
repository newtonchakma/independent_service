import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {name, image, comment} = review;
    return (
     <div className="review ">
            <div className="card shadow" style={{width: "22rem"}}>
             <img src={image} alt="..."/>
                   <p className="card-text px-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <h6 className="card-name">{name}</h6>
              
        </div>
      
     </div>
    );
};

export default Review;