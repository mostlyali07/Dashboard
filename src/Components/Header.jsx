import React from 'react';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* Navbar brand/logo */}
                <a className="navbar-brand" href="#">My Ecommerce App</a>

                {/* Navbar toggle button (for small screens) */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar menu items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Account</a>
                        </li>
                    </ul>


                    {/* Account icon */}
                    <div className="d-flex align-items-center">
                        <img src="https://dummyimage.com/50x50/000/fff" alt="account" className="rounded-circle" />
                    </div>
                </div>
            </div>
        </nav>
    );
}


