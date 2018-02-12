import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Home from '../home/home';
import Gallery from '../gallery/gallery';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends React.Component {
  initHtmlStyle = '';
  initBodyStyle = '';
  isLoggedIn = true;

  componentDidMount() {
    if (this.isLoggedIn) {
      return;
    }

    this.initHtmlStyle = document.documentElement.className;
    document.documentElement.className = this.initHtmlStyle + "home-html-body";

    this.initBodyStyle = document.body.className;
    document.body.className = this.initBodyStyle + "home-html-body home-body text-center";
  }

  componentWillUnmount() {
    // document.body.className = null;
  }

  render() {
    const containerStyle = this.isLoggedIn ? "" : "home-container d-flex h-100 p-3 mx-auto flex-column";
    const appBody = this.isLoggedIn ? <Gallery /> : <Home />;

    return (
      <div className={containerStyle}>
        <Header isLoggedIn={this.isLoggedIn} />
        {appBody}
        <Footer isLoggedIn={this.isLoggedIn} />
      </div>
    );
  }
}

export default App;
