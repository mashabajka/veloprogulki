const React = require('react');
const Layout = require('../Layout')

module.exports = function Home({login}) {
    return (
        <>
        <script defer src='/js/home.js'/>
    <Layout login={login} >
  {/* <Navbar/> */}
      </Layout>
      </>
    )
   
}