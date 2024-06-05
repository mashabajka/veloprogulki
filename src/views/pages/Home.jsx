const React = require('react');
const Layout = require('../Layout');
const Trail = require('../components/Trail');

function Home({ entries }) {
  return (
    <>
      <Layout>
      <h1>Добро пожаловать на сайт маршрутов для велопрогулок!</h1>
          <div className='entriesContainer'>
            {entries?.map((entry) => (
              <Trail key={entry.id} entry={entry} />
            ))}
          </div>
      </Layout>
    </>
  );
}

module.exports = Home;