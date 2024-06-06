const React = require('react');
const Layout = require('../Layout');

module.exports = function NewTrail({ login, plainNewTrail }) {
  console.log(plainNewTrail);
  return (
    <Layout login={login}>
      <h1 className="trail-title">Информация о новом маршруте</h1>
      <div className="trail-container">
        <h2>{plainNewTrail.title}</h2>
        <p><strong>Описание:</strong> {plainNewTrail.description}</p>
        <p><strong>Город:</strong> {plainNewTrail.location}</p>
        <div className="image-gallery">
          <img src={plainNewTrail.image_link} alt="image" className="trail-image" />
        </div>
        <div className="map-container">
          <div id="map" className="map"></div>
        </div>
      </div>
      <script defer src="https://api-maps.yandex.ru/v3/?apikey=3a098667-d8d9-4dec-a107-b8a3dca12725&lang=ru_RU"></script>
      <script defer src="/js/showTrail.js"></script>
    </Layout>
  );
};
