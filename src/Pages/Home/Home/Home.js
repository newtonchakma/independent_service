import React from 'react';
import Footer from '../../../sharePages/Footer/Footer';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Services></Services>
         <Reviews></Reviews>
         <Footer></Footer>
        </div>
    );
};

export default Home;