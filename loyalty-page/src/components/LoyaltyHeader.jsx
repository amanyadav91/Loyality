import React from 'react';

function LoyaltyHeader() {
    return (
        <header className="loyalty-header">
        <h1>Loyalty Program</h1>
        <nav>
            <ul>
                {/* <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li> */}
            </ul>
        </nav>
        <div className="search-cart">
            <input type="text" placeholder="Search..." />
            <div className="cart-icon">
                <i className="fa fa-shopping-cart"></i>
                <span className="cart-count">5</span>
            </div>
        </div>
    </header>
    );
}

export default LoyaltyHeader;
