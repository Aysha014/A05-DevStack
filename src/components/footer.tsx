import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">

          {/* Top */}
          <div className="grid grid-cols-[1.7fr_0.8fr_0.8fr_0.8fr] gap-12">

            {/* Brand */}
            <div>
              <img
                src={Logo}
                alt="Dev Stack"
                className="h-7 w-auto"
              />

              <p className="mt-4 max-w-300 text-[11px] leading-5 text-[#64748B]">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              <div className="mt-5 flex gap-5 text-[11px] text-[#334155]">
                <a href="#" className="hover:text-[#E747A3]">
                  GitHub
                </a>

                <a href="#" className="hover:text-[#E747A3]">
                  Twitter
                </a>

                <a href="#" className="hover:text-[#E747A3]">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-[10px] font-semibold text-[#0F172A]">
                PRODUCT
              </h4>

              <div className="mt-4 flex flex-col gap-2 text-[11px] text-[#64748B]">
                <a href="#" className="hover:text-[#E747A3]">
                  Home
                </a>

                <a href="#" className="hover:text-[#E747A3]">
                  Technologies
                </a>

                <a href="#" className="hover:text-[#E747A3]">
                  Projects
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[10px] font-semibold text-[#0F172A]">
                COMPANY
              </h4>

              <div className="mt-4 flex flex-col gap-2 text-[11px] text-[#64748B]">
                <a href="#" className="hover:text-[#E747A3]">
                  About
                </a>

                <a href="#" className="hover:text-[#E747A3]">
                  Contact
                </a>

                <a href="#" className="hover:text-[#E747A3]">
                  Careers
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[10px] font-semibold text-[#0F172A]">
                LEGAL
              </h4>

              <div className="mt-4 flex flex-col gap-2 text-[11px] text-[#64748B]">
                <a href="#" className="hover:text-[#E747A3]">
                  Privacy Policy
                </a>

                <a href="#" className="hover:text-[#E747A3]">
                  Terms of Service
                </a>
              </div>
            </div>

          </div>

          {/* Desktop Divider */}
          <div className="my-8 border-t border-[#E2E8F0]" />

          {/* Desktop Bottom */}
          <div className="flex items-center justify-between text-[10px] text-[#94A3B8]">
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-[#E747A3]">
                Privacy
              </a>

              <a href="#" className="hover:text-[#E747A3]">
                Terms
              </a>
            </div>
          </div>

        </div>


        {/* ================= MOBILE ================= */}
        <div className="md:hidden">

          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-7 w-auto"
            />

            <p className="mt-4 max-w-300 text-[11px] leading-5 text-[#64748B]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-4 text-[11px] text-[#334155]">
              <a href="#" className="hover:text-[#E747A3]">
                GitHub
              </a>

              <span className="text-[#CBD5E1]">•</span>

              <a href="#" className="hover:text-[#E747A3]">
                Twitter
              </a>

              <span className="text-[#CBD5E1]">•</span>

              <a href="#" className="hover:text-[#E747A3]">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Mobile Divider */}
          <div className="my-7 border-t border-[#E2E8F0]" />

          {/* Mobile Bottom */}
          <div className="flex items-center justify-between text-[9px] text-[#94A3B8]">
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a href="#" className="hover:text-[#E747A3]">
                Privacy
              </a>

              <a href="#" className="hover:text-[#E747A3]">
                Terms
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;