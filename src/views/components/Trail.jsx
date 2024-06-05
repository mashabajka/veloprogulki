const React = require('react');

module.exports = function Trail({login, trail}){
  const color = ['red', 'red','red','red','red','orange','orange','orange','green', 'green','green',];
  trail.average_rating = trail.average_rating ? trail.average_rating : 0

    return(
        <>
        <div className="card" style={{width: "18rem", position:'relative', marginTop:'20px'}}>
          <div  className='rating' style={{backgroundColor: `${color[Math.round(trail.average_rating)]}`}}>
            {trail.average_rating}★
            </div>
  <img src={trail.image_link} className="card-img-top" alt="карта" style={{width: '100%', height:'30%'}}/>
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
        </>
    )
}