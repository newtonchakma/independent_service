import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(response => response.json())
        .then(data =>setReviews(data))
    },[])
    return (
      
        <div className="customer-reviews">
            <h1 className="text-center mb-5 pb-5">Reviews</h1>
          <div className="reviews-section container mb-5 pb-5">
          {
                reviews.map(review =><Review 
                
                key={review.id}
                review={review}
                ></Review>)
            }
         
          </div>
          <button className='mx-auto btn review-btn text-center mx-auto'>SHOW MORE STORY</button>
        </div>
    );
};

export default Reviews;