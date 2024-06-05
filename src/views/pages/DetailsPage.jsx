const React = require('react');
const Layout = require('../Layout');
const Trail = require('../components/Trail');

function DetailsPage({ login, trail }) {
  return (
    <>
      <Layout login={login}>
        <Trail trail={trail} />
        <h3>Оцените маршрут</h3>
        <div className="averageRatingContainer">
          <div className="averageRatingItems">
            <input id='averageRating10' type="radio" value="10" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating10" className='averageRatingLabel'></label>

            <input id='averageRating9' type="radio" value="9" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating9" className='averageRatingLabel'></label>

            <input id='averageRating8' type="radio" value="8" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating8" className='averageRatingLabel'></label>

            <input id='averageRating7' type="radio" value="7" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating7" className='averageRatingLabel'></label>

            <input id='averageRating6' type="radio" value="6" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating6" className='averageRatingLabel'></label>

            <input id='averageRating5' type="radio" value="5" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="id='averageRating5'" className='averageRatingLabel'></label>

            <input id='averageRating4' type="radio" value="4" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating4" className='averageRatingLabel'></label>

            <input id='averageRating3' type="radio" value="3" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating3" className='averageRatingLabel'></label>

            <input id='averageRating2' type="radio" value="2" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating2" className='averageRatingLabel'></label>

            <input id='averageRating1' type="radio" value="1" className='averageRatingInput' name='averageRating'/>
            <label htmlFor="averageRating1" className='averageRatingLabel'></label>
          </div>
        </div>

        <div className="ratingContainer ratingSet">
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

          <div className="ratingValue">
            7.5
          </div>

        </div>
        <script defer src='/js/stars.js' />
      </Layout>
    </>
  );
}

module.exports = DetailsPage;
