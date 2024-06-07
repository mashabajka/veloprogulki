const React = require('react');
const Layout = require('../Layout');

module.exports = function Profile({ login }) {
  return (
    <Layout login={login}>
      <div className="add-container">
        <div className="info-container">
          <h3 className="add-title">Добавить новый маршрут</h3>

          <form method="post" action="/" className="add-new-form">
            <label className="mar-left-right-10" htmlFor="addTrailName">Название маршрута:</label>
            <input name="title" type="text" id="addTrailName" className="trail-title" />

            <input hidden name="coordinates" id="coordinates" type="text" />

            <label className="mar-left-right-10" htmlFor="addLocation">Город:</label>
            <input name="location" type="text" id="addLocation" className="trail-location" />

            <label className="mar-left-right-10" htmlFor="editEntryDescription">Описание:</label>
            <textarea name="description" id="editEntryDescription" className="trail-text"></textarea>

            <div className="gallery"></div>

            <label htmlFor="imageUpload" className="image-upload">
              Загрузить фотографии
            </label>
            <input
              id="imageUpload"
              name="images"
              type="file"
              multiple
              // accept="image/*"
              style={{ display: 'none' }}
              />

            <button type="submit" className="trail-submit" >Добавить маршрут</button>

          </form>
        </div>

        <div className="map-container">
          <div id="map" className="map"></div>
        </div>

      </div>
      <script defer src="https://api-maps.yandex.ru/v3/?apikey=3a098667-d8d9-4dec-a107-b8a3dca12725&lang=ru_RU"></script>
      <script defer src="/js/addTrail.js"></script>
      {/* <script defer src="/js/showTrail.js"></script> */}
      <script defer src="/js/uploadSuccess.js" />
    </Layout>
  );
};
