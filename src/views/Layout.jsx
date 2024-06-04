const React = require('react');

function Layout({ children, username }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Velo Trail</title>
      </head>
      <body>
        <header role="banner" className="header mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
          <div className="max-w-700 center wrap-float">
            <nav className="navbar clearfix mar-b-1">
              <ul className="no-bullets no-margin no-padding right">
                {login ? (
                  <>
                    <li className="pipe-separate t-light-green left"><a href="/">{username}</a></li>
                    <li className="pipe-separate t-light-green left"><a href="/new">organize a trip</a></li>
                    <li className="pipe-separate t-light-green left"><a href="/logout">logout</a></li>
                  </>
                ) : (
                  <>
                    <li className="pipe-separate t-light-green left"><a href="/">home</a></li>
                    <li className="pipe-separate t-light-green left"><a href="/login">login</a></li>
                    <li className="pipe-separate t-light-green left"><a href="/register">register</a></li>
                  </>
                )}
              </ul>
            </nav>

            <div className="title-container">
              <h1 className="title-text">Velo Trail</h1>
            </div>
          </div>
        </header>
        <div className="mountain-title">
          <img className="image" src="/assets/img/mountains-1.png" alt="mountain-image"/>
        </div>
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>
        <script defer src="/js/entry.js" />
      </body>
    </html>
  );
}

module.exports = Layout;
