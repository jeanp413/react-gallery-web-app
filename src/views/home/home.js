import React from 'react';
import { Button } from 'reactstrap';
import { HomeHeader } from '../../components/header/header';
import { HomeFooter } from '../../components/footer/footer';
import './home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogInClick = this.handleLogInClick.bind(this);
  }

  handleLogInClick() {
    this.props.onLogIn();
  }

  render() {
    return (
      <div className="home-container d-flex h-100 p-3 mx-auto flex-column">
        <HomeHeader />
        <main role="main" className="inner cover">
          <h1 className="cover-heading">Cover your page.</h1>
          <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <Button size="lg" color="secondary" onClick={this.handleLogInClick}>Log In</Button>
          </p>
        </main>
        <HomeFooter />
      </div>
    );
  }
}

export default Home;