import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-yellow-400 text-gray-900 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    <Link to="/">🎬 K-Noir Movies</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-yellow-700">홈</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;