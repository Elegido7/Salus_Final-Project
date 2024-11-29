import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css';
import Tasks from '../components/Tasks';
import MainLayout from '../layouts/MainLayout';

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn ? `${authState.user.name}'s tasks` : 'Task Manager';
  }, [authState]);

  return (
    <MainLayout>
      {' '}
      {!isLoggedIn ? (
        <div className="homepage bg-primary text-white h-[100vh] py-8 text-center">
          <h1 className="text-2xl">Welcome to Health Task Manager</h1>
          <Link to="/signup" className="mt-10 h-10 text-xl block space-x-2 hover:space-x-4">
            <span className="transition-[margin]">Register to manage your tasks</span>
            <span className="relative ml-4 text-base transition-[margin]">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </Link>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true}
            interval={3000}>
            <div>
              <img
                className="carousel-image"
                src="/images/AI-and_HealthCare.webp"
                alt="Reaching out"
              />
              <p className="legend">Providing Excellent Care</p>
            </div>
            <div>
              <img className="carousel-image" src="/images/AI_in-Health.jpeg" alt="Technology" />
              <p className="legend">Advanced Medical Technology</p>
            </div>
            <div>
              <img className="carousel-image" src="/images/connecting.jpg" alt="Care for you" />
              <p className="legend">Compassionate Staff</p>
            </div>
            <div>
              <img
                className="carousel-image"
                src="/images/teaser-2023-healthcare-technology.jpg"
                alt="Data management"
              />
              <p className="legend">Comprehensive Solutions</p>
            </div>
          </Carousel>
        </div>
      ) : (
        <>
          <h1 className="text-lg mt-8 mx-8 border-b border-b-gray-300">
            Welcome {authState.user.name}
          </h1>
          <Tasks />
        </>
      )}
    </MainLayout>
  );
};

export default Home;
