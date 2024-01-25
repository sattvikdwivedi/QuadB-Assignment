import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShowDetails(data));
  }, [id]);

  return (
    <div className="show-details-container">
      <h1>Show Details</h1>
      {showDetails && (
        <>
          <img
            src={showDetails.image?.medium || 'placeholder-image.jpg'}
            alt={showDetails.name}
            className="show-details-image"
          />
          <div className="show-details-info">
            <p className="show-name">{showDetails.name}</p>
            <p className="show-type">{showDetails.type}</p>
            <p className="show-summary" dangerouslySetInnerHTML={{ __html: showDetails.summary }}></p>
            <button className="book-ticket-btn" onClick={handleBookTicket}>
              Book Ticket
            </button>
          </div>
        </> 
      )}
      <Link to="/" className="back-link">
        Back to Show List
      </Link>
    </div>
  );
};

export default Details;
