import React from 'react'
import LOGO from "../Images/LOGO.png"

export const Sidebar = () => {

    function isActive(path) {
        if (window.location.pathname === path) {
            return "active";
        } else {
            return "";
        }
    }

    return (
        <>
            <div className="sideBar m-4 p-2 py-4 d-flex flex-column justify-content-between">
                <div className="logo mb-5">
                    <img src={LOGO} alt="My Logo" width={80} />
                    <h4 className='fw-bold text-center'>LOGO</h4>
                </div>
                <div className="menu">
                    <ul>
                        <li className={isActive('/home')}><a href="/home">HOME</a></li>
                        <li className={isActive('/posts')}><a href="/posts">POSTS</a></li>
                        <li className={isActive('/media')}><a href="/media">MEDIA</a></li>
                        <li className={isActive('/pages')}><a href="/pages">PAGES</a></li>
                        <li className={isActive('/add-products')}><a href="/add-products">ADD PRODUCTS</a></li>
                        <li className={isActive('/settings')}><a href="/settings">SETTINGS</a></li>
                    </ul>
                </div>
                <div className="logout">
                    <button className="btn btn-outline-danger">LOGOUT</button>
                </div>
            </div>


        </>
    )
}
