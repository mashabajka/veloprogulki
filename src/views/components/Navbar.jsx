const React = require('react');

module.exports = function Navbar({ login }) {
  return (
    <>

      {login ? (
        <nav className="navbar bg-body-tertiary p-0" >
          <div className="container-fluid" style={{ backgroundColor: 'lightgreen' }}>
            <a className="navbar-brand me-auto p-2" href="/">
              <img src="/assets/icon_navbar.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-center" style={{ marginRight: '10px' }}/>
              Привет, {login}! Это твой Velo Trail ❤️
            </a>

            <a className="btn btn-outline-dark me-2 p-2" type="button" href='/profile'>Profile</a>
            <a className="btn btn-outline-dark me-2 p-2" type="button" href='/logout'>Logout</a>
            <a className="btn btn-outline-dark me-2 p-2" type="button" href='/favorites'>{login}</a>

          </div>
        </nav>
      ) : (<nav className="navbar bg-body-tertiary p-0">
        <div className="container-fluid" style={{ backgroundColor: 'lightgreen' }}>
          <a className="navbar-brand me-auto p-2" href="/">
            <img src="/assets/icon_navbar1.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-center" style={{ marginRight: '10px' }}/>
            Velo Trail
          </a>

          <dialog style={{ padding: '0', borderRadius: '10px' }}>
            <div id="modal-box" style={{ padding: '1rem' }}>
              <form className='logForm'>
                <button id="close-modal-btn" className="btn-close" aria-label="Закрыть" style={{ float: 'right', border: '0px' }}></button>
                <h6 className='logErrMsg' />

                <div className="mb-30">
                <label htmlFor="exampleInputEmail1" className="form-label">Ваш email</label>
                <input name="email" type="email" style={{ width: '300px' }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
                <div className="mb-30">
                <label htmlFor="exampleInputPassword1" className="form-label">Ваш пароль</label>
                <input name="password" type="password" style={{ width: '300px' }} className="form-control" id="exampleInputPassword1" />
                <div id="passwordHelp" className="form-text">Забыли пароль? Свяжитесь с администратором сайта.</div>
              </div>
                <div className="mb-30  form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheckReg" />
                <label className="form-check-label" htmlFor="exampleCheck1">Согласен на обработку данных</label>
              </div>
                <button type="submit" className="btn btn-primary">Отправить</button>
              </form>
            </div>
          </dialog>
          <button className="btn btn-outline-dark me-2 p-2" id="show-modal-btn">Login</button>

          <a className="btn btn-outline-dark me-2 p-2" type="button" href='/registration'>Registration</a>

        </div>
      </nav>
      )}
    </>
  );
};
