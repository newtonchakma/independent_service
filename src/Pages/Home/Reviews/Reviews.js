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
      
        <div id="reviews" className="customer-reviews">
            <h1 className="text-center mb-5 pb-5 mt-5 pt-5">SUCCESSFULL STORY</h1>
          <div className="reviews-section container mb-5 pb-5">
        
         <div className="row gx-3 gy-5 mt-xl-5">

         {
                reviews.map(review =><Review 
                
                key={review.id}
                review={review}
                ></Review>)
            }
         </div>
         
          </div>
      <div className=" text-center review-btn mb-5 pb-5">
      <button className='mx-auto btn '>SHOW MORE STORY</button>
      </div>
        </div>
    );
};

export default Reviews;