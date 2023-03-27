import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-nav-container'>
            <div>
                <img src="/public/images/Logo.svg" alt="" />
            </div>
            <nav className='nav-container'>
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </nav>

        </div>
    );
};

export default Header;