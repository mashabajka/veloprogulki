const React = require('react');
const Layout = require('../Layout');
const Trail = require('../components/Trail');

function DetailsPage({ entry }) {
  return (
    <>
      <Layout>
      <Trail entry={entry} />
      <h3>Оцените маршрут</h3>
      <div className="averageRating">
        <div className="averageRatingItems">
          <input type="radio" value="10"/>
        </div>
      </div>
      </Layout>
    </>
  );
}

module.exports = DetailsPage;