const React = require('react');

function Navbar() {
  return (
    <>
      <button>
        <a href='/'>Главная</a>
      </button>
      <button>
        <a href='#'>User</a>
      </button>
    </>
  );
}

module.exports = Navbar;