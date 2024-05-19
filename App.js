import React from 'react';
import './App.css';
import amrita from './amrita.png'; // Ensure the image is in the src folder
import image1 from './image1.jpg'; // Ensure the image is in the src folder

function App() {
  const redirectToLogin = () => {
    // Add your login redirection logic here
    console.log('Redirect to login');
  };

  return (
    <div className="container">
      <header>
        <center>
          <img src={amrita} alt="Amrita Logo" width="100" height="100" />
        </center>
        <button onClick={redirectToLogin}>Login</button>
      </header>
      <section id="about-us">
        <h2>About Us</h2>
        <p>
          Amrita Vishwa Vidyapeetham is a multi-disciplinary, research-intensive, private university, educating a vibrant student population of over 24,000 by 1700+ strong faculty. Accredited with the highest possible ‘A++’ grade by NAAC, Amrita offers more than 250 UG, PG, and Ph.D. programs in Engineering, Management, and Medical Sciences including Ayurveda, Life Sciences, Physical Sciences, Agriculture Sciences, Arts & Humanities, and Social & Behavioral Sciences.

          With its extensive network of eight campuses spread across Amaravati, Amritapuri, Bengaluru, Chennai, Coimbatore, Kochi, Mysuru, and NCR Delhi (Faridabad), Amrita University stands as one of India’s preeminent private educational institutions. Encompassing an expansive area of over 1200 acres, these campuses offer an impressive built-up space of more than 100 lakh square feet. Renowned for its commitment to academic excellence, Amrita University consistently ranks among the top-tier private universities in the nation, solidifying its reputation as a beacon of quality education.
        </p>
      </section>
      <section id="our-universities">
        <h2>Our University</h2>
        <center>
          <img src={image1} alt="University Image" width="200" height="200" />
        </center>
        <p>
          Situated in the serene village of Vallikavu, our campus exudes a sense of warmth and tranquility, creating the perfect environment for intellectual growth and personal development. Our educational institution encompasses six prestigious schools and more than 20 research centres, catering to students passionate about various disciplines such as arts, business, humanities, natural sciences, and social sciences. With a sprawling 80-acre expanse of land, our campus provides ample space for learning, exploration, and recreation. The million square feet of built-up area includes state-of-the-art academic blocks, comfortable student hostels, and a range of modern amenities to enhance the overall campus experience.
        </p>
      </section>
    </div>
  );
}

export default App;
