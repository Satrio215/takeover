import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src="/asset/myLogo.png" alt="Logo" className="h-12 w-auto" />
                </div>
                {/* Navigation Menu */}
                <ul className="hidden md:flex gap-8">
                    <li className="hover:text-gray-300 cursor-pointer transition">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer transition">Body Kits</li>
                    <li className="hover:text-gray-300 cursor-pointer transition">About</li>
                    <li className="hover:text-gray-300 cursor-pointer transition">Contact</li>
                </ul>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => alert('Menu opened')}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
