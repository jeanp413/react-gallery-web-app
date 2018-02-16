import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../home/home';
import Gallery from '../gallery/gallery';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends React.Component {
  initHtmlStyle = null;
  initBodyStyle = null;

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.setGlobalStyles();
  }

  componentWillUnmount() {
    // document.body.className = null;
  }

  componentDidUpdate() {
    this.setGlobalStyles();
  }

  handleLogIn() {
    this.setState({ isLoggedIn: true });
  }

  handleLogOut() {
    this.setState({ isLoggedIn: false });
  }

  setGlobalStyles() {
    this.initHtmlStyle = this.initHtmlStyle || document.documentElement.className;
    this.initBodyStyle = this.initBodyStyle || document.body.className;

    document.documentElement.className = this.initHtmlStyle;
    document.body.className = this.initBodyStyle;

    if (!this.state.isLoggedIn) {
      document.documentElement.className += "home-html-body";
      document.body.className += "home-html-body home-body text-center";
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <Switch>
        <Route exact path="/" render={() => (<Redirect to={isLoggedIn ? "/gallery" : "/home"} />)} />
        <Route exact path="/home" render={props => (<Home {...props} onLogIn={this.handleLogIn} />)} />
        <Route exact path="/gallery" render={props => (<Gallery {...props} onLogOut={this.handleLogOut} />)} />
      </Switch>
    );
  }
}

export default App;
