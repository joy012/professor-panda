import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        
        <div className="subscribe d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center align-items-center pt-5">
                <div className="text-white">
                    <h3 className="text-center">Get Updates About New Courses</h3>
                    <form action="" className="form-inline justify-content-center text-center">
                        <input className="form-control mx-4 mx-sm-0" type="email" placeholder="Enter your email"/>
                        <button className="btn btn-success mt-2 mt-sm-0">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="icons py-5">
                <h5 className="text-center text-white">Follow Us On:</h5>
                <ul>
                    <li><a href="https://www.facebook.com/" target="_blank"></a></li>
                    <li><a href="https://dribbble.com/" target="_blank"></a></li>
                    <li><a href="https://www.pinterest.com/" target="_blank"></a></li>
                    <li><a href="https://www.skype.com/" target="_blank"></a></li>
                </ul>
            </div>
            <h6 className="text-center">&copy; All right reserved. Panda Tech - 2020</h6>
        </div>
    );
};

export default Footer;