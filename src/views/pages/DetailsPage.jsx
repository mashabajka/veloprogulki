const React = require('react');
const Layout = require('../Layout.jsx');
// const Trail = require('../components/Trail.jsx');
const TrailDetails = require('../components/TrailDetails.jsx');

function DetailsPage({ login, trail, comments, userRating }) {
  // console.log('***************', userRating);
  return (
    <>
      <Layout login={login}>
        <div className="mainDetailsContainer">
          <div className='mainDivTrail'>
            <div className="trail-container">
              <TrailDetails trail={trail} />
            </div>

            {/* Показывать ratingPart и addCommentPart только при наличии логина */}
            {login && (
            <div className="ratingCommentContainer">
              <div className="ratingPart">
                <h3>Оценить маршрут</h3>
                <div className="ratingContainer">
                  <div className="starsContainer" data-total-value={userRating} data-trail-id={trail.id}>
                    <div className="ratingInput" data-input-value="10">★</div>
                    <div className="ratingInput" data-input-value="9">★</div>
                    <div className="ratingInput" data-input-value="8">★</div>
                    <div className="ratingInput" data-input-value="7">★</div>
                    <div className="ratingInput" data-input-value="6">★</div>
                    <div className="ratingInput" data-input-value="5">★</div>
                    <div className="ratingInput" data-input-value="4">★</div>
                    <div className="ratingInput" data-input-value="3">★</div>
                    <div className="ratingInput" data-input-value="2">★</div>
                    <div className="ratingInput" data-input-value="1">★</div>
                  </div>
                  <div className="existingRatingMessage"></div>
                </div>
              </div>

              <div className="oldComments">
                <h3>Комментарии к маршруту</h3>
                {comments.length ? comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <p>{comment.User.login}: {comment.text}</p>
                    <p>Дата: {new Date(comment.createdAt).toLocaleString()}</p>
                  </div>
                ))
                  : <p>Комментариев пока нет</p>
                }
              </div>

              <div className="addCommentPart">
                <h3>Оставить комментарий</h3>
                <form action="/comment" method="POST" className="commentForm" id={trail.id} >
                  <textarea name="text" style={{ width: '400px', marginBottom: '10px' }} type="text" className="commentInput form-control shadow rounded" id="name" required/>

                  <button type="submit" className="detail-trail-submit">Опубликовать</button>
                </form>
              </div>

            </div>
            )}

            <script defer src='/js/rating.js' />
          </div>
          <div className="map-container">
            <div id="map" className="map"></div>
          </div>
        </div>
        <script defer src="https://api-maps.yandex.ru/v3/?apikey=3a098667-d8d9-4dec-a107-b8a3dca12725&lang=ru_RU"></script>
        <script defer src="/js/showTrail.js"></script>
      </Layout>
    </>
  );
}

module.exports = DetailsPage;
