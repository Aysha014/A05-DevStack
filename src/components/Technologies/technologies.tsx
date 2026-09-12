import { useEffect, useState } from "react";
import SelectedItems from "./SelectedItems";

export type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert("This technology is already added.");
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemove = (id: string) => {
    setStack(
      stack.filter((item) => item.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "Popular":
        return "bg-[#EAF7FF] text-[#0099E5] border-[#CDEEFF]";

      case "Versatile":
        return "bg-[#E9FBF3] text-[#00A86B] border-[#C6F3DD]";

      case "Fast":
        return "bg-[#FFF5E9] text-[#FF6B00] border-[#FFE1BE]";

      case "SSR / Edge":
        return "bg-[#F5E9FF] text-[#9333EA] border-[#EAD3FF]";

      case "Standard":
        return "bg-[#E9FBF3] text-[#00A86B] border-[#C6F3DD]";

      case "Top SQL":
        return "bg-[#EAF3FF] text-[#2563EB] border-[#D4E5FF]";

      case "Cache":
        return "bg-[#FFF0F0] text-[#EF4444] border-[#FFD6D6]";

      case "Ubiquitous":
        return "bg-[#FFF8E7] text-[#F59E0B] border-[#FFE7AD]";

      case "Essential":
        return "bg-[#EAF7FF] text-[#0284C7] border-[#CDEEFF]";

      case "Robust":
        return "bg-[#EAF7FF] text-[#0284C7] border-[#CDEEFF]";

      case "Modern":
        return "bg-[#E8FBFC] text-[#0891B2] border-[#C6F3F5]";

      case "Containers":
        return "bg-[#EAF7FF] text-[#0284C7] border-[#CDEEFF]";

      default:
        return "bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]";
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Explore the{" "}
            <span className="text-[#E747A3]">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_260px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className="rounded-xl border border-[#E2E8F0] bg-white p-4"
                >
                  
                  <div className="flex items-start justify-between">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-7 w-7 object-contain"
                    />

                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] font-medium ${getBadgeStyle(
                        technology.badge
                      )}`}
                    >
                      {technology.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mt-4 text-lg font-bold text-[#0F172A]">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-5 text-[#64748B]">
                    {technology.description}
                  </p>

                  {/* Divider */}
                  <div className="mt-4 border-t border-[#F1F5F9]" />

                  {/* Info */}
                  <div className="mt-3 flex items-center justify-between gap-2 text-[10px] text-[#64748B]">
                    <span className="rounded bg-[#F1F5F9] px-2 py-1">
                      {technology.category}
                    </span>

                    <span>
                      {technology.difficulty}
                    </span>

                    <span className="whitespace-nowrap">
                      <span className="text-[#F59E0B]">
                        ★
                      </span>{" "}
                      {technology.rating}
                    </span>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleAdd(technology)}
                    className={`mt-4 w-full rounded-md py-2 text-xs text-white transition ${
                      isAdded
                        ? "bg-green-600"
                        : "bg-[#0F172A] hover:bg-[#1E293B]"
                    }`}
                  >
                    {isAdded
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Selected Items */}
          <SelectedItems
            stack={stack}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;