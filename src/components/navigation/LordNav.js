import React from 'react';
// import { Nav } from 'reactstrap';

function LordNav() {
  return (
    <>
      <div className='title-container'>
        <h1 className="lord">Lord of the Rings</h1>
      </div>
      <nav className='navbar-collapse collapse show d-flex justify-content-center'>
        <div id='lord-nav' >
          <ul className='navbar-nav mr-auto d-flex flex-wrap'>
            <li className='nav-item active'>
              <a className='nav-link' href='#' id='characters-link'>Characters<span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' id='movies-link'>Movies</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#' id='books-link'>Books</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default LordNav;
