import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../../components/private-route/private-route';
import Home from '../home/home';
import Gallery from '../gallery/gallery';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends React.Component {
  initHtmlStyle = null;
  initBodyStyle = null;
  mounted = false;

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };

    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.setGlobalStyles();
    this.mounted = true;
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
    if (!this.mounted) {
      this.initHtmlStyle = document.documentElement.className;
      this.initBodyStyle = document.body.className;
    }

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
        <Route exact path="/"
          render={() => (<Redirect to={isLoggedIn ? "/gallery" : "/home"} />)}
        />
        <Route exact path="/home"
          render={props => (
            isLoggedIn ?
              <Redirect to="/gallery" /> :
              <Home {...props} onLogIn={this.handleLogIn} />
          )}
        />
        <PrivateRoute exact path="/gallery"
          render={props => (
            !isLoggedIn ?
              <Redirect to="/home" /> :
              <Gallery {...props}
                onLogOut={this.handleLogOut} />
          )}
          isAuthenticated={isLoggedIn}
          redirectTo="/home"
        />
      </Switch>
    );
  }
}

export default App;
