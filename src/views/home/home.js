import React from 'react';
import { Button } from 'reactstrap';
import './home.css';

class Home extends React.Component {

  render() {
    return (
      <main role="main" className="inner cover">
        <h1 className="cover-heading">Cover your page.</h1>
        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p className="lead">
          <Button href="#" size="lg" color="secondary">Learn more</Button>
        </p>
      </main>
    );
  }
}

export default Home;