const React = require('react');

function Trail({ entry }) {
  return (
      <>
      <a href={`/details/${entry.id}`}>
        <h3>{entry.title}</h3>
      </a>
      <p>{entry.average_rating}</p>
      <img className='image' src={`${entry.image_link}`} alt="Картинка" />
      <p>{entry.location}</p>
      <p>{entry.distance}</p>
      <p>{entry.start_lat}</p>
      <p>{entry.start_lon}</p>
      <p>{entry.custom_points}</p>
      <p>{entry.finish_lat}</p>
      <p>{entry.finish_lon}</p>
      </>
  );
}

module.exports = Trail;