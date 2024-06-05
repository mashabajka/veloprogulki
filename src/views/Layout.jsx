const React = require('react');
const Navbar = require('./components/Navbar');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/favicon.ico?" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Velo Trail</title>
      </head>
      <body>
        <Navbar />
        {children}
        {/* <script defer src='/js/checkAnswer.js' />     */}
      </body>
    </html>
  );
};
