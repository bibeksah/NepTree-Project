import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import RecentlyUsed from '../components/RecentlyUsed';
import DailySpecial from '../components/DailySpecial';
import Explore from '../components/Explore';
import InfiniteScroll from '../components/InfiniteScroll';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <div className="content">
        <RecentlyUsed />
        <DailySpecial />
        <Explore />
        <InfiniteScroll />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
