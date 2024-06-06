function getColor(rating) {
  // Красный соответствует оценке 0-4, оранжевый - 4-7, зеленый - 7-10
  if (rating >= 0 && rating < 4) {
    return 'red';
  } else if (rating >= 4 && rating < 7) {
    return 'orange';
  } else {
    return 'green';
  }
}

const React = require('react');

module.exports = function Trail({ trail }) {
  const averageRating = trail.average_rating ? trail.average_rating : '0';
  const ratingColor = getColor(trail.average_rating);

  return (
    <div className="card" style={{ width: '18rem', position: 'relative' }}>
      <div className='rating' style={{ backgroundColor: ratingColor }}>
        {averageRating}★
      </div>
      <img src={trail.image_link} className="card-img-top" alt="карта" style={{ width: '100%', height: '30%' }} />
      <div className="card-body">
        <h5 className="card-title">{trail.title}</h5>
        <p className="card-text">Маршрут длиной {trail.distance} км от пользователя {trail.User.login}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Город: {trail.location}</li>
        <li className="list-group-item">Координаты старта: {trail.start_lat}, {trail.start_lon}</li>
        <li className="list-group-item">Координаты финиша: {trail.finish_lat}, {trail.finish_lon}</li>
      </ul>
      <div className="card-body">
        <a href={`/details/${trail.id}`} className="card-link">Подробнее о маршруте</a>
      </div>
    </div>
  );
};
