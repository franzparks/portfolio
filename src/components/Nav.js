import React from 'react';
// import { Link } from 'react-router';

const Nav = () => (
  <div>
    <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div className="container topnav">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
                <button  className="navbar-toggle" data-toggle="collapse" 
                	data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand topnav" href="" target="_blank">Francis Phiri</a>
            </div>
           {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        {/* <Link to="/about">About</Link> */}
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                   <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
    </nav>

  </div>
);

export default Nav;

