import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./layout.css";

const Layout: React.FC = () => {
    return (
    <div className="Container">
        <header className="Flex-row">
            <div className="Flex-row">
                <Link to="/" className="Heading-bold">Artsysearcher</Link>
                <div className="Ellipse" />
            </div>
            <nav>
               <Link to="/">Home</Link>
            </nav>
        </header>
        <div className="Main-content">
            <div className="Max-width">
                <Outlet />
            </div>
        </div>
    </div>
    );
}

export default Layout;