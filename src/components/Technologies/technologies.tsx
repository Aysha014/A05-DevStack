import { useEffect, useState } from "react";

type Technology = {
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
    setStack(stack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-8">
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

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_260px]">

          {/* Technology Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className="flex flex-col rounded-xl border border-[#E2E8F0] bg-white p-5"
                >
                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />

                    <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-[10px] text-[#64748B]">
                      {technology.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 min-h-60 text-xs leading-5 text-[#64748B]">
                    {technology.description}
                  </p>

                  {/* Divider */}
                  <div className="mt-4 border-t border-[#F1F5F9]" />

                  {/* Information */}
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

          {/* Your Stack */}
          <aside className="h-fit rounded-xl border border-[#E2E8F0] bg-white p-5">
            <h3 className="font-semibold text-[#0F172A]">
              Your Stack
            </h3>

            <p className="mt-1 text-xs text-[#94A3B8]">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} ${
                    stack.length === 1
                      ? "Technology"
                      : "Technologies"
                  } Selected`}
            </p>

            {/* Empty State */}
            {stack.length === 0 && (
              <div className="mt-5 rounded-lg border border-dashed border-[#CBD5E1] px-3 py-10 text-center text-xs text-[#94A3B8]">
                Your stack is empty.
              </div>
            )}

            {/* Selected Technologies */}
            {stack.length > 0 && (
              <div className="mt-4 space-y-2">
                {stack.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-md border border-[#E2E8F0] p-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="h-6 w-6 object-contain"
                      />

                      <div>
                        <p className="text-xs font-semibold text-[#0F172A]">
                          {item.name}
                        </p>

                        <p className="text-[9px] text-[#94A3B8]">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-lg text-[#94A3B8] hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Remove All */}
            {stack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="mt-5 w-full rounded-md border border-red-300 py-2 text-xs text-red-500 hover:bg-red-50"
              >
                Remove All
              </button>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Technologies;