const React = require('react');
const Layout = require('../Layout');
const Trail = require('../components/Trail');

module.exports = function AllTrail({login, trails}) {
    return (
        <>
    <Layout login={login} >
    <script defer src="js/allTrails.js"/>
    <main role="main">
    <div className="posts" >
        {trails.map((trail) => <Trail key={trail.id} trail={trail} login={login}/>)}
      </div>
  </main>
      </Layout>
    </>
  );
};
