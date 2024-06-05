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

        <div data-ajax="true" className="ratingContainer ratingSet">
          <div className="ratingBody">
            <div className="ratingActive">
              <div className="ratingItems">
                <input type="radio" className='ratingInput' value="1" name='rating' />
                <input type="radio" className='ratingInput' value="2" name='rating' />
                <input type="radio" className='ratingInput' value="3" name='rating' />
                <input type="radio" className='ratingInput' value="4" name='rating' />
                <input type="radio" className='ratingInput' value="5" name='rating' />
                <input type="radio" className='ratingInput' value="6" name='rating' />
                <input type="radio" className='ratingInput' value="7" name='rating' />
                <input type="radio" className='ratingInput' value="8" name='rating' />
                <input type="radio" className='ratingInput' value="9" name='rating' />
                <input type="radio" className='ratingInput' value="10" name='rating' />
              </div>
            </div>
          </div>

          <div className="ratingValue">7</div>

        </div>
        </div>

        <div className="addcommentPart">
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
        <script defer src='/js/stars.js' />
      </Layout>
    </>
  );
}

module.exports = DetailsPage;
