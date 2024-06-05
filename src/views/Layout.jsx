const React = require('react');
const Navbar = require('./components/Navbar');

function Layout({ children, login}) {
  return (
    <html lang='en'>

      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossOrigin="anonymous"
        />
              <script defer src='/js/application.js' />

      </head>
      <body>
        <header> 
          <Navbar login={login}/>
        </header>

        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center">
            {children}
          </div>
        </div>
      </body>

    </html>
  );
}

module.exports = Layout;
