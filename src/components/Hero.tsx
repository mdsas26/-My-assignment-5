import heroImage from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-5 py-16 md:py-24">

                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Hero Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Build Your Ideal
                            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                            <button className="px-6 py-3 rounded-lg text-white font-medium bg-linear-to-r from-orange-500 via-pink-500 to-violet-600">
                                Explore Technologies
                            </button>

                            <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium">
                                Learn More
                            </button>

                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={heroImage}
                            alt="Development Stack"
                            className="w-72 md:w-96 lg:w-112.5"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;