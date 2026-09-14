import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Technology {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
}

const TechnologySection = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/technologies.json")
            .then((res) => res.json())
            .then((data) => {
                setTechnologies(data);
                setLoading(false);
            });
    }, []);

    const handleAddToStack = (technology: Technology) => {
        const alreadyAdded = selectedTechnologies.find(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.warning("This technology is already in your stack!");
            return;
        }

        setSelectedTechnologies([...selectedTechnologies, technology]);

        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemove = (id: string) => {
        setSelectedTechnologies(
            selectedTechnologies.filter((technology) => technology.id !== id)
        );

        toast.success("Technology removed from your stack!");
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.success("All technologies removed!");
    };

    if (loading) {
        return (
            <p className="text-center py-20">
                Loading technologies...
            </p>
        );
    }

    return (
        <section id="technologies" className="bg-white">
            <div className="max-w-7xl mx-auto px-5 py-16">

                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Explore the{" "}
                        <span className="text-pink-500">Technologies</span>
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Technology Cards */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {technologies.map((technology) => {
                            const isAdded = selectedTechnologies.some(
                                (item) => item.id === technology.id
                            );

                            return (
                                <div
                                    key={technology.id}
                                    className="border border-gray-200 rounded-xl p-5"
                                >
                                    {technology.badge && (
                                        <span className="float-right px-3 py-1 text-xs rounded-full bg-pink-50 text-pink-500">
                                            {technology.badge}
                                        </span>
                                    )}

                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="w-10 h-10 mb-5"
                                    />

                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {technology.name}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-2 min-h-20">
                                        {technology.description}
                                    </p>

                                    <div className="border-t border-gray-100 mt-5 pt-3 flex items-center justify-between text-xs">
                                        <span className="bg-gray-100 px-2 py-1 rounded">
                                            {technology.category}
                                        </span>

                                        <span className="text-gray-500">
                                            {technology.difficulty}
                                        </span>

                                        <span className="text-gray-700">
                                            ⭐ {technology.rating}
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => handleAddToStack(technology)}
                                        disabled={isAdded}
                                        className={`w-full mt-4 py-3 rounded-lg text-sm ${isAdded
                                            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                            : "bg-gray-900 text-white"
                                            }`}
                                    >
                                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Your Stack */}
                    <div className="border border-gray-200 rounded-xl p-5 h-fit lg:sticky lg:top-24">

                        <h2 className="text-xl font-bold text-gray-900">
                            Your Stack
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            {selectedTechnologies.length} Technology Selected
                        </p>

                        {selectedTechnologies.length === 0 ? (
                            <div className="mt-5 border border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <p className="text-sm text-gray-500">
                                    Your stack is empty.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="mt-5 space-y-3">
                                    {selectedTechnologies.map((technology) => (
                                        <div
                                            key={technology.id}
                                            className="flex items-center gap-3 border border-gray-200 rounded-lg p-3"
                                        >
                                            <img
                                                src={technology.icon}
                                                alt={technology.name}
                                                className="w-9 h-9"
                                            />

                                            <div className="flex-1">
                                                <h3 className="text-sm font-semibold">
                                                    {technology.name}
                                                </h3>

                                                <p className="text-xs text-gray-500">
                                                    {technology.category}
                                                </p>
                                            </div>

                                            <button
                                                onClick={() => handleRemove(technology.id)}
                                                className="text-gray-400 hover:text-red-500"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={handleRemoveAll}
                                    className="w-full mt-5 py-2 rounded-lg border border-red-300 text-red-500 text-sm bg-white hover:bg-red-50"
                                >
                                    Remove All
                                </button>
                            </>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default TechnologySection;