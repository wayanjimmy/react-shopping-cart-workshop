import React from 'react';

const Navbar = () => (
  <nav className="navbar" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          alt="Bulma: a modern CSS framework based on Flexbox"
          width={112}
          height={28}
        />
      </a>
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div className="navbar-end">
      <a className="navbar-item">Home</a>
    </div>
  </nav>
);

export default Navbar;
