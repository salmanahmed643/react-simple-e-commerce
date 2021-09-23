import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="header_img" src={logo} alt="" />
            </div>
            <div>
                <nav className="menu">
                    <a href="/shop"> Shop </a>
                    <a href="/order"> Order Review </a>
                    <a href="/inventory"> Manage Inventory here </a>
                </nav>
            </div>
        </div>
    );
};

export default Header;