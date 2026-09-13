import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-10 md:flex-row md:justify-between md:px-8 md:py-16">

        {/* Left Side */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-[#0F172A] md:text-5xl">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-[#FF5A1F] via-[#F72585] to-[#9333EA] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-540 text-sm leading-6 text-[#64748B] md:mx-0 md:text-base">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 flex justify-center gap-3 md:justify-start">
            <button className="rounded-lg bg-linear-to-r from-[#FF6B1A] to-[#F72585] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-[#E2E8F0] px-7 py-3 text-sm text-[#475569] transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2">
          <img
            src={BannerImage}
            alt="Development Stack"
            className="w-280 object-contain sm:w-330 md:w-380 lg:w-400"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;