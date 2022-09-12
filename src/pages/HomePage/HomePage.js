import React from 'react';
import { HomeComponent } from '../../components/HomeComponent';
import { NavBar } from '../../components/NavBar';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <HomeComponent/>
    </div>
  )
}
