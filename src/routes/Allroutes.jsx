import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import LandingPage from './LandingPage';
import Posts from './Posts';
import Profile from './Profile';
import ProfileHomePage from './ProfileHomePage';
import ToDo from './ToDo';

const Allroutes = () => {
  return (
    <div>
      <Routes>
        {/* Route for the landing page */}
        <Route path='/' element={<LandingPage />} />

        {/* Route for the user's profile homepage */}
        <Route path='/profile/:userId' element={<ProfileHomePage />} />

        {/* Route for the user's profile */}
        <Route path='/profile/:userId' element={<Profile />} />

        {/* Route for the user's posts */}
        <Route path='/profile/posts' element={<Posts />} />

        {/* Route for the user's gallery */}
        <Route path='/profile/gallery' element={<Gallery />} />

        {/* Route for the user's to-do list */}
        <Route path='/profile/todo' element={<ToDo />} />


      </Routes>
    </div>
  );
};

export default Allroutes;
