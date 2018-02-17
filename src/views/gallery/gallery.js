import React from 'react';
import { GalleryHeader } from '../../components/header/header';
import { GalleryFooter } from '../../components/footer/footer';
import CardImageGroup from '../../components/card-image-group/card-image-group';
import cardImage from './IMG_0128.JPG'

class Gallery extends React.Component {

  render() {
    const handleLogOutClick = this.props.onLogOut;

    return (
      <div>
        <GalleryHeader onLogOut={handleLogOutClick} />
        <main role="main">

          {/* <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Album example</h1>
            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
              <a href="#" class="btn btn-primary my-2">Main call to action</a>
              <a href="#" class="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </section> */}

          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row">
                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>
                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>
                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>

                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>
                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>
                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>

                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>
                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>
                <div className="col-md-4">
                  <CardImageGroup image={cardImage} />
                </div>
              </div>

            </div>
          </div>

        </main>
        <GalleryFooter />
      </div>
    );
  }
}

export default Gallery;