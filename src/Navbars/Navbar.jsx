import React from 'react'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav className="bg-fuchsia-950 p-4">
            <div className="container mx-0 flex justify-between items-center">
                {/* Brand Name */}
                <a href="https://oliver-gi.github.io" className="text-white text-lg font-semibold">Oliver
                </a>
            </div>
        </nav>
    );
};

export default Navbar;