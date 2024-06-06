const React = require('react');
const Layout = require('../Layout');
const Trail = require('../components/Trail');

function DetailsPage({ login, trail }) {
  return (
    <>
      <Layout login={login}>
        <Trail trail={trail} />
        <div className="ratingPart">
        <h3>Оцените маршрут</h3>

        <div className="ratingContainer" data-total-value="0" data-trail-id={trail.id}>
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
        </div>

        <div className="addCommentPart">
          <h3>Оставьте комментарий об этом маршруте:</h3>
          <form action="/comment" method="POST" id="commentForm">
            <input name="name" type="text" className="commentInput form-control shadow rounded" id="name" required/>

            <button type="submit" className="commentBtn">Опубликовать отзыв</button>
          </form>
        </div>

        <div className="oldComments">
          <h3>Комментарии к маршруту:</h3>
          {/* {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>{comment.User.login}: {comment.comment}</p>
              <p>Дата: {new Date(comment.createdAt).toLocaleString()}</p>
            </div>
          ))} */}
        </div>
        <script defer src='/js/rating.js' />
      </Layout>
    </>
  );
}

module.exports = DetailsPage;