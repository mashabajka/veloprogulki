const React = require('react');
const Layout = require('../Layout');
const TrailDetails = require('../components/TrailDetails.jsx');

module.exports = function NewTrail({ login, plainNewTrail }) {
  console.log(plainNewTrail);
  return (
    <Layout login={login}>
      <div className="add-container">
        <div className="info-container">
          <h3 className="add-title">Информация о новом маршруте</h3>
          <TrailDetails trail={plainNewTrail} />
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
