const React = require('react');
const Layout = require('../Layout')

module.exports = function Home({login}) {
    return (
        <>
    <Layout login={login} >
<div > 
    <a className="btn btn-success me-2 p-2" type="button" href='/alltrails' style={{position:'absolute', zIndex:'2', float:'left', top:'20%', left:'30%', right:'30%', backgroundColor:'lightgreen', color:'black', border:'0px'}}>Посмотреть маршруты</a>
 <div style={{position:'relative'}}>
      <img src="/assets/carousel3.jpg" className="d-block w-100 h-100" alt="лес" />
    </div>
</div>
      </Layout>
      </>
    )
   
}