import React from 'react';
import { Button } from 'reactstrap';
import { HomeHeader } from '../../components/header/header';
import { HomeFooter } from '../../components/footer/footer';
import Slideshow from '../../components/slideshow/slideshow';
import './home.css';
import slide01 from './slide01.JPG';
import slide02 from './slide02.JPG';
import slide03 from './slide03.JPG';

class Home extends React.Component {

  render() {
    const handleLogInClick = this.props.onLogIn;
    const imageArr = [slide01, slide02, slide03];

    return (
      <div className="home-container d-flex h-100 p-3 mx-auto">
        <div className="d-flex flex-column" style={{ zIndex: 0 }}>
          <HomeHeader />
          <main role="main" className="inner cover">
            <h1 className="cover-heading">Cover your page.</h1>
            <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p className="lead">
              <Button size="lg" color="secondary" onClick={handleLogInClick}>Log In</Button>
            </p>
          </main>
          <HomeFooter />
          <div className="bg-pattern" />
          <Slideshow images={imageArr} fadeInTime={2000} fadeInterval={3000} />
        </div>
      </div>
    );
  }
}

export default Home;