import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div>
   
    {/* Header */}
    <a name="home"></a>
    <div className="intro-header">
      <div className="bg-overlay">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>Franz Web Development Studio</h1>
                        <h3>Where Awesomeness Is Brought To Life.</h3>
                        <hr className="intro-divider"></hr>
                        <ul className="list-inline intro-social-buttons">
                            <li>
                                <a href="https://twitter.com/franzparks" target="_blank" 
                                className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> 
                                <span className="network-name">Twitter</span></a>
                            </li>
                            <li>
                                <a href="https://github.com/franzparks" target="_blank" 
                                className="btn btn-default btn-lg "><i className="fa fa-github fa-fw"></i> 
                                <span className="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/franzparks" target="_blank" 
                                className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> 
                                <span className="network-name">Linkedin</span></a>
                            </li>
                          <li>
                                <a href="https://profiles.udacity.com/u/francisphiri" target="_blank" 
                                className="btn btn-default btn-lg"><i className="fa fa-udacity fa-fw"></i> 
                                <span className="network-name">Udacity</span></a>
                            </li>
                            <li>
                                <a href="http://www.freecodecamp.com/franzparks" target="_blank"
                                 className="btn btn-default btn-lg"><i className="fa fa-fire fa-fw"></i> 
                                 <span className="network-name">freeCodeCamp</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        {/* /.container */}
      </div>
    </div>
    {/* /.intro-header */}
  </div>
);

export default Header;

