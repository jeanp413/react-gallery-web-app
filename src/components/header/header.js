import React from 'react';
import { Nav, NavLink, Navbar, NavbarBrand, Button } from 'reactstrap';
import './header.css';

export const HomeHeader = (props) => {
  return (
    <header className="home-header mb-auto">
      <div className="inner">
        <h3 className="home-header-brand">Cover</h3>
        <Nav className="home-header-nav justify-content-center">
          <NavLink active href="#">Contact</NavLink>
        </Nav>
      </div>
    </header>
  );
};

export const GalleryHeader = (props) => {

  const handleLogOutClick = props.onLogOut;

  return (
    <header>
      {/* <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Contact</h4>
              <ul class="list-unstyled">
                <li><a href="#" class="text-white">Follow on Twitter</a></li>
                <li><a href="#" class="text-white">Like on Facebook</a></li>
                <li><a href="#" class="text-white">Email me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <Navbar tag="div" dark color="dark" className="gallery-header-box-shadow">
        <div className="container d-flex justify-content-between">
          <NavbarBrand tag="span" className="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <strong>Album</strong>
          </NavbarBrand>
          <Button color="link" onClick={handleLogOutClick} className="no-underline font-weight-bold text-white border-0 px-0">Log out</Button>
        </div>
      </Navbar>
    </header>
  );
};