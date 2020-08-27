import React from 'react';
import logo from '../../images/logo2.png';
import logo2 from '../../images/display1.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="container navbar navbar-expand-md navbar-light text-dark py-3">
                <a className="navbar-brand" href="\">
                    <img className="w-50 h-50 rounded-circle" src={logo} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <a className="nav-link active" href="/">Home</a>
                    <a className="nav-link" href="\">Teachers</a>
                    <a className="nav-link" href="\">Courses</a>
                    <a className="nav-link" href="\">About</a>
                    </div>
                </div>
            </nav>
            <div className="container pb-3">
                <div className="row align-items-center">
                    <div className="col-md-7 align-items center">
                        <h5 className="text-success">Are You Ready to Explore?</h5>
                        <h1 className="display-4">Learn With</h1>
                        <h1 className="display-4 text-primary">Professor Panda</h1>
                    </div>
                    <div className="col-md-5">
                        <img className="w-100" src={logo2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;