import logo from "../assets/logo-text.png";
import hamBg from "../assets/hamburger.png"

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-5 py-3">

                {/* Desktop Navbar */}
                <div className="hidden md:flex items-center justify-between">

                    {/* Logo */}
                    <div>
                        <img src={logo} alt="Dev Stack Logo" className="w-36" />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-7 text-sm text-gray-600">
                        <a href="#">Home</a>
                        <a href="#technologies">Technologies</a>
                        <a href="#projects">Projects</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <button className="px-3 py-2 text-sm text-gray-700">
                            Sign In
                        </button>

                        <button className="px-5 py-2 rounded-full text-sm text-white bg-pink-600">
                            Sign Up
                        </button>
                    </div>

                </div>


                {/* Mobile Navbar */}
                <div className="flex md:hidden items-center justify-between">

                    {/* Hamburger */}
                    <button>
                        <img src={hamBg} alt="Menu" className="w-7 h-7" />
                    </button>
                    {/* Logo */}
                    <div>
                        <img src={logo} alt="Dev Stack Logo" className="w-28" />
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-2">
                        <button className="text-xs text-gray-700">
                            Sign In
                        </button>

                        <button className="px-3 py-2 rounded-full text-xs text-white bg-pink-600">
                            Sign Up
                        </button>
                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;