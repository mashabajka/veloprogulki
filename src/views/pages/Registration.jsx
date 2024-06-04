const React = require('react');
const Layout = require('../Layout')

module.exports = function Registration({login}) {
    return (
    <Layout login={login}>
              <script defer src="/js/reg.js" />
<div style={{display:'flex', justifyContent:'center'}}>
     <form className='regForm' action="registration" method="POST" style={{}}>
      <h4 className='errMsg' />
     <div className="mb-3" >
    <label htmlFor="exampleInputLogin" className="form-label" >Придумайте логин</label>
    <input name="login" type="text" style={{width:'300px'}} className="form-control" id="exampleInputLogin1"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ваш email</label>
    <input name="email" type="email" style={{width:'300px'}} className="form-control" id="exampleInputEmailReg"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Придумайте пароль</label>
    <input name="password" type="password" style={{width:'300px'}} className="form-control" id="exampleInputPasswordReg" />
    <div id="passwordHelp" className="form-text">Мы никому не передадим ваш пароль и сами не увидим</div>
  </div>
  <div className="mb-3  form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Согласен на обработку данных</label>
  </div>
  <button type="submit" className="btn btn-primary">Отправить</button>
</form>
</div>
      </Layout>
    )
   
}