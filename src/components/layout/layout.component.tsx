import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.component.css";

const Layout: React.FC = () => {
    return (
    <div>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/nothing-here">Nothing</Link></li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </div>
    );
}

export default Layout;