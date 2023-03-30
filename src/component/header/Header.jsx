import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h3>Knowledge Cafe</h3>
            <div className='nav-right'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                
                <img src="/src/assets/ProfilePic.jpeg" alt="" />
            
            </div>
        </nav>
    );
};

export default Header;