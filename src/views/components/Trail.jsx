const React = require('react');

function Trail({ login, trail }) {
  return (
      <>
      <a href={`/details/${trail.id}`}>
        <h3>{trail.title}</h3>
      </a>
      <p>{trail.average_rating}</p>
      <img className='image' src={`${trail.image_link}`} alt="Картинка" />
      <p>{trail.location}</p>
      <p>{trail.distance}</p>
      <p>{trail.start_lat}</p>
      <p>{trail.start_lon}</p>
      <p>{trail.custom_points}</p>
      <p>{trail.finish_lat}</p>
      <p>{trail.finish_lon}</p>
      </>
  );
}

module.exports = Trail;