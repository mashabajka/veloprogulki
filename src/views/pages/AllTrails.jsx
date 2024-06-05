const React = require('react');
const Layout = require('../Layout');
const Card = require('../components/Card');

module.exports = function Home({login, trails}) {
    return (
        <>
    <Layout login={login} >
    <script defer src="js/allTrails.js"/>
    <main role="main">
    <div className="posts" style={{ display:'ms-flexbox', alignItems:'center'}}>
        {trails.map((trail) => <Card trail={trail} login={login}/>)}
      </div>
  </main>
      </Layout>
      </>
    )
   
}