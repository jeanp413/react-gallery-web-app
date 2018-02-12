import React from 'react';
import './card-image-group.css';

const CardImageGroup = ({ image }) => {
  return (
    <div className="card mb-4 card-box-shadow">
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        {/* <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
          </div>
          <small class="text-muted">9 mins</small>
        </div> */}
      </div>
    </div>
  );
};

export default CardImageGroup;