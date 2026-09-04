function Footer() {
  const companies = [
    {
      name: "Transistor",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg",
    },
    {
      name: "Reform",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg",
    },
    {
      name: "Tuple",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg",
    },
    {
      name: "SavvyCal",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg",
    },
    {
      name: "Statamic",
      logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-700 py-20 shadow-lg sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold leading-8 text-white">
            Trusted by the world's most innovative brands
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-indigo-100">
            Building better travel experiences with reliable technology
            and seamless booking solutions.
          </p>
        </div>

        <div
          className="
            mx-auto mt-12
            grid max-w-lg
            grid-cols-2
            items-center
            gap-x-8
            gap-y-10
            sm:max-w-xl
            sm:grid-cols-3
            sm:gap-x-10
            lg:max-w-none
            lg:grid-cols-5
          "
        >
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                width="158"
                height="48"
                loading="lazy"
                className="
                  max-h-12
                  w-full
                  max-w-[158px]
                  object-contain
                  opacity-80
                  transition
                  duration-300
                  hover:opacity-100
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
        <div className="my-14 border-t border-white/20"></div>

        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-indigo-100">
            © {new Date().getFullYear()} TripPilot. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a
              href="#about"
              className="text-indigo-100 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#services"
              className="text-indigo-100 transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-indigo-100 transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="#"
              className="text-indigo-100 transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-indigo-100 transition hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;