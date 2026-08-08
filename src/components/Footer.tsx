function Footer() {
  return (
    // Main footer section
    <div
      id="contact"
      className="relative z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-700/80 py-24 shadow-lg sm:py-32"
    >
      {/* Footer container */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Footer heading */}
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Trusted by the world’s most innovative brands
        </h2>

        {/* Brand logos grid */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">

          {/* Transistor logo */}
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
            alt="Transistor"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          {/* Reform logo */}
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
            alt="Reform"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          {/* Tuple logo */}
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
            alt="Tuple"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />

          {/* SavvyCal logo */}
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
            alt="SavvyCal"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          {/* Statamic logo */}
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
            alt="Statamic"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;