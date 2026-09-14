import logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-5 py-12">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <img src={logo} alt="Dev Stack Logo" className="w-36" />

                        <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>

                        <div className="flex gap-5 mt-6 text-sm text-gray-600">
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">
                            PRODUCT
                        </h3>

                        <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                            <a href="#">Home</a>
                            <a href="#technologies">Technologies</a>
                            <a href="#projects">Projects</a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">
                            COMPANY
                        </h3>

                        <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">
                            LEGAL
                        </h3>

                        <div className="flex flex-col gap-3 mt-5 text-sm text-gray-500">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;