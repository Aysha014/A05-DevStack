import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col items-center px-4 py-12 md:flex-row md:justify-between md:py-24">

        {/* Banner Text */}
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-bold leading-tight text-[#0F172A] md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-[#FF5A1F] via-[#F72585] to-[#9333EA] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-520 text-base leading-7 text-[#64748B] md:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <button className="rounded-lg bg-linear-to-r from-[#FF6B1A] to-[#F72585] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
              Explore Technologies
            </button>

            <button className="rounded-lg border border-[#E2E8F0] px-8 py-3 text-sm text-[#475569] transition hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="mt-12 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
          <img
            src={BannerImage}
            alt="Development Stack"
            className="w-[320px] object-contain md:w-400 lg:w-450"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;