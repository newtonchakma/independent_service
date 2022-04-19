import React from 'react';
import aboutme from '../../images/aboutMe/about-me.jpg'

const About = () => {
    return (
        <div>
            <h1 className='text-center text-primary mt-5 mb-5 pt-5 pb-5 text-fw-bold'>MY MISSION</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="image">
                    <img src={aboutme} alt="" />
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="about">
                    <p>My present goal is to be a skilled full stack web developer. For dis reason i always try to study and practice web related technology and also take some sort courses to improve my knowledge.</p>
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;