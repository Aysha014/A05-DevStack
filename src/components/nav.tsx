import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl text-gray-600 md:hidden"
                >
                    ☰
                </button>

                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={Logo}
                        alt="Dev Stack"
                        className="h-8 w-auto"
                    />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-8 md:flex">
                    <li>
                        <a
                            href="#"
                            className="text-sm font-medium text-pink-500"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm text-slate-600 transition hover:text-pink-500"
                        >
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm text-slate-600 transition hover:text-pink-500"
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm text-slate-600 transition hover:text-pink-500"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="text-sm text-slate-600 transition hover:text-pink-500"
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Login buttons */}
                <div className="flex items-center gap-4">
                    <button className="text-xs text-slate-700 sm:text-sm transition hover:text-[#D91B7E]">
                        Sign In
                    </button>

                    <button className="rounded-full bg-[#D91B7E] px-4 py-2 text-xs font-medium text-white transition hover:bg-pink-700 sm:px-5 sm:text-sm">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-pink-500">
                            Home
                        </a>
                        <a href="#">Technologies</a>
                        <a href="#">Projects</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;