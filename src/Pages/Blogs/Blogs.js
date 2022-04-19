import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
      <question-one-ans-section >
      <div className="question-1">
          <h6> <strong>Q-01:</strong> Difference between authorization and authentication?</h6>
          <h5>Ans : difference between authentication and authorization-</h5>
          <div className="">
              <h3>Authentication</h3>
              <p>1.In authentication process, the identity of users are checked for providing the access to the system.</p>
             <p> 2.In authentication process, users or persons are verified.</p>
              <p>3.It is done before the authorization process.</p>
              <p>4.It needs usually user’s login details.</p>
              <p> 5.Authentication determines whether the person is user or not.</p>
          </div>
          <div className="">
          <h3>Authorization</h3>
              <p>1.While in authorization process, person’s or user’s authorities are checked for accessing the resources.</p>
              <p>2.While in this process, users or persons are validated.</p>
              <p>3.While this process is done after the authentication process.</p>
              <p>4.While it needs user’s privilege or security levels.</p>
              <p>5.While it determines What permission do user have?</p>
          </div>
           
           </div>
      </question-one-ans-section>

        <div className="question-two-ans-section">
            <h6><strong>Q-02 :</strong> Why are you using firebase? What other options do you have to implement authentication?</h6>
            <p><strong>Ans :</strong> Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps.Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>

            <p>Cybercriminals always improve their attacks. As a result, security teams are facing plenty of authentication-related challenges. This is why companies are starting to implement more sophisticated incident response strategies, including authentication as part of the process. The list below reviews some common authentication methods used to secure modern systems.</p>
            <h6>1. Password-based authentication:</h6>
             <p>Passwords are the most common methods of authentication. Passwords can be in the form of a string of letters, numbers, or special characters. To protect yourself you need to create strong passwords that include a combination of all possible options. </p>
             <h6>2. Multi-factor authentication :</h6>
             <p>Multi-Factor Authentication (MFA) is an authentication method that requires two or more independent ways to identify a user. Examples include codes generated from the user’s smartphone, Captcha tests, fingerprints, voice biometrics or facial recognition</p>
             <h6>3. Certificate-based authentication :</h6>
             <p>Certificate-based authentication technologies identify users, machines or devices by using digital certificates. A digital certificate is an electronic document based on the idea of a driver’s license or a passport</p> 
             <h6>4. Biometric authentication :</h6>  
             <p>Biometric authentication technologies are used by consumers, governments and private corporations including airports, military bases, and national borders. The technology is increasingly adopted due to the ability to achieve a high level of security without creating friction for the user</p>  
             
             </div>

        </div>
    );
};

export default Blogs;