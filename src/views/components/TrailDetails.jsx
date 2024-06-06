function getColor(rating) {
  // Красный соответствует оценке 0-4, оранжевый - 4-7, зеленый - 7-10
  if (rating >= 0 && rating < 4) {
    return 'red';
  } if (rating >= 4 && rating < 7) {
    return 'orange';
  }
  return 'green';
}

const React = require('react');

module.exports = function TrailDetails({ trail }) {
  const averageRating = trail.average_rating ? trail.average_rating : '0';
  const ratingColor = getColor(trail.average_rating);

  return (
    <div className="card" style={{ width: '300px', position: 'relative', marginBottom: '10px' }}>
      <div className='rating' style={{ backgroundColor: ratingColor }}>
        {averageRating}★
      </div>
      <img src={trail.image_link} className="card-img-top" alt="карта" style={{ width: '300px', height: '180px' }} />
      <div className="card-body">
        <h5 className="card-title">{trail.title}</h5>
        <p className="card-text">{trail.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Город: {trail.location}</li>
        <li className="list-group-item">Длина маршрута: {trail.distance}</li>
        <li className="list-group-item">Автор маршрута: {trail.User.login}</li>
      </ul>
      
    </div>
  );
};
