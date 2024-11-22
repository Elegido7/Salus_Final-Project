import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Welcome to the HealthCare Portal</h1>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
        interval={3000}>
        <div>
          <img className="carousel-image" src="/images/AI-and_HealthCare.webp" alt="Reaching out" />
          <p className="legend">Providing Excellent Care</p>
        </div>
        <div>
          <img className="carousel-image" src="/images/AI_in-Health.jpeg" alt="Technology" />
          <p className="legend">Advanced Medical Technology</p>
        </div>
        <div>
          <img className="carousel-image" src="/images/connecting.jpg" alt="care for you" />
          <p className="legend">Compassionate Staff</p>
        </div>
        <div>
          <img
            className="carousel-image"
            src="/images/teaser-2023-healthcare-technology.jpg"
            alt="data management"
          />
          <p className="legend">Comprehensive Solutions</p>
        </div>
      </Carousel>
    </div>
  );
}

export default HomePage;
