import React from 'react';
import './footer.css';

export const HomeFooter = (props) => {
  return (
    <footer className="home-footer mt-auto">
      <div className="inner">
        <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
      </div>
    </footer>
  );
}

export const GalleryFooter = (props) => {
  return (
    <footer className="gallery-footer text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="#">Visit the homepage</a> or read our getting started guide.</p>
      </div>
    </footer>
  );
}