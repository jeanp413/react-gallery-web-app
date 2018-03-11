import React from 'react';
import assert from 'assert';
import Animate from 'react-move/Animate';
import preloadImages from '../../utils/preload-image';
import './slideshow.css';

class Slideshow extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currIdx: null,
      prevIdx: null,
      isFadingIn: false
    }
    this.loadedImages = [];
    this.pendingUpdate = false;

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
  }

  componentDidMount() {
    const firstImage = this.props.images.slice(0, 1);
    const restImages = this.props.images.slice(1);
    preloadImages(firstImage)
      .then((oneImageArr) => {
        assert(this.loadedImages.length === 0, 'Slideshow::componentDidMount this.loadedImages is not empty');

        this.loadedImages = this.loadedImages.concat(oneImageArr);

        this.showNextImage();

        return restImages.length > 0 ? preloadImages(restImages) : Promise.resolve([]);
      })
      .then((images) => {
        if (images.length === 0) {
          return;
        }

        this.loadedImages = this.loadedImages.concat(images);

        if (this.pendingUpdate) {
          this.showNextImage();
        }
      });
  }

  handleTransitionEnd() {
    this.setState({
      isFadingIn: false
    });

    if (this.props.images.length === 1) {
      return;
    }

    setTimeout(() => {
      this.showNextImage();
    }, this.props.fadeInterval);
  }

  showNextImage() {
    if (this.state.currIdx !== null &&
      this.loadedImages.length !== this.props.images.length) {
      this.pendingUpdate = true;
      return;
    }

    this.setState((prevState, props) => ({
      currIdx: (prevState.currIdx !== null ? (prevState.currIdx + 1) % this.loadedImages.length : 0),
      prevIdx: prevState.currIdx,
      isFadingIn: true
    }));
  }

  render() {
    const { currIdx, prevIdx, isFadingIn } = this.state;
    const { fadeInTime } = this.props;
    const images = this.loadedImages;

    return (
      <div className="slideshow-container">
        {((!isFadingIn && currIdx !== null) || (isFadingIn && prevIdx !== null)) && <img src={images[isFadingIn ? prevIdx : currIdx]} className="slide" alt="" />}
        {
          <Animate show={isFadingIn && currIdx !== null} start={{ opacity: 0 }} enter={{ opacity: [1], timing: { duration: fadeInTime }, events: { end: this.handleTransitionEnd } }}>
            {({ opacity }) => {
              return (<img src={images[currIdx]} className="slide" style={{ opacity }} alt="" />);
            }}
          </Animate>
        }
      </div>
    )
  }
}

export default Slideshow;