const React = require('react');
const Layout = require('../Layout');

module.exports = function Profile({ login }) {
  return (
    <Layout login={login}>
      <h1 className="add-title">Добавить новый маршрут</h1>
      <div className="add-container">

        <form method="post" action="/" className="add-new-map-form">
          <label className="mar-left-right-10" htmlFor="addTrailName">Название маршрута:</label>
          <input name="title" type="text" id="addTrailName" className="trail-title" />

          <input
            type="submit"
            value="Добавить"
            className="trail-submit"
          />
        </form>

        <div className="map-container">
          <div id="map" className="map"></div>
        </div>

      </div>
      <script defer src="https://api-maps.yandex.ru/v3/?apikey=3a098667-d8d9-4dec-a107-b8a3dca12725&lang=ru_RU"></script>
      <script defer src="/js/addTrail.js"></script>
      <script defer src="/js/showTrail.js"></script>
    </Layout>
  );
};
