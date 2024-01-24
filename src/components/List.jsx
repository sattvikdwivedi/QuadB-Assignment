// src/components/ShowList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './List.css';

const List = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching show data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="show-list-container">
      <h1>Show List</h1>
      <ul className="show-list">
        {shows.map((show) => (
          <li key={show.show.id} className="show-item">
            <Link to={`/details/${show.show.id}`}>
              <img
                src={show.show.image?.medium || 'placeholder-image.jpg'}
                alt={show.show.name}
                className="show-image"
              />
              <div className="show-details">
                <p className="show-name">{show.show.name}</p>
                <p className="show-type">{show.show.type}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
