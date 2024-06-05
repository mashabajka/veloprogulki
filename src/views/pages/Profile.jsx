const React = require('react');
const Layout = require('../Layout');

module.exports = function Profile({ login }) {
  return (
    <Layout login={login}>
      <h1>Добавить новый маршрут</h1>

      <form method="post" action="/">
        <label htmlFor="addTrailName">Title:</label>
        <input name="title" type="text" id="addTrailName" className="trail-title" />

        <div>
          <h3>Координаты старта</h3>
          <label htmlFor="addTrailStartLat">Широта:</label>
          <input name="start_lat" type="text" id="addTrailStartLat" className="trail-start-lat" />

          <label htmlFor="addTrailStartLon">Долгота:</label>
          <input name="start_lon" type="text" id="addTrailStartLon" className="trail-start-lon" />
        </div>

        <div>
          <h3>Координаты финиша</h3>
          <label htmlFor="addTrailFinishLat">Широта:</label>
          <input name="finish_lat" type="text" id="addTrailFinishLat" className="trail-finish-lat" />

          <label htmlFor="addTrailFinishLon">Долгота:</label>
          <input name="finish_lon" type="text" id="addTrailFinishLon" className="trail-finish-lon" />
        </div>

        <input
          type="submit"
          value="Добавить"
          className="trail-submit"
        />
      </form>
    </Layout>
  );
};
