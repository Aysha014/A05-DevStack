import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="container mx-auto flex w-full items-center justify-between px-4 py-3">
                {/* Left - Logo */}
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Dev Stack Logo" />
                </div>

                {/* Center - Navigation Links */}
                <ul className="hidden md:flex items-center gap-14 text-[18px] font-normal text-slate-600">
                    <li>
                        <a href="#" className="text-pink-500">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#technologies" className="hover:text-pink-500">
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-pink-500">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="hover:text-pink-500">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-pink-500">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Right - Sign In / Sign Up */}
                <div className="flex items-center gap-4">
                    <button className="text-sm text-gray-700 hover:text-pink-500">
                        Sign In
                    </button>

                    <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-medium text-white">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;