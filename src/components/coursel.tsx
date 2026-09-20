import { useEffect, useState } from "react";

const images = [
  {
    src: "https://images.meesho.com/images/marketing/1767796583251.webp",
    alt: "Women's fashion collection",
  },
  {
    src: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/JanUBS26/TopHero/PC/Unrec/Womens_Clothing_1500x460._SX1500_QL85_FMpng_.png",
    alt: "Women's clothing collection",
  },
  {
    src: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/JanUBS26/TopHero/PC/Unrec/SPB_1500x460._SX1500_QL85_FMpng_.png",
    alt: "Fashion collection",
  },
  {
    src: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/JanUBS26/TopHero/PC/Unrec/Mens_Clothing_1500x460._SX1500_QL85_FMpng_.png",
    alt: "Men's clothing collection",
  },
  {
    src: "https://m.media-amazon.com/images/G/31/IMG25/Fashion/JanUBS26/TopHero/PC/Unrec/V1/Kids_Clothing_1500x460._SX1500_QL85_FMpng_.png",
    alt: "Kids clothing collection",
  },
];

const BACKGROUND_IMAGE =
  "https://m.media-amazon.com/images/G/31/img21/janart26/A/_JanART_25Hidden-Slot_Stripe_ACQ_pc_1.jpg";

const AUTO_SLIDE_TIME = 3000;

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrent((previous) => (previous + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrent(
      (previous) => (previous - 1 + totalSlides) % totalSlides
    );
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((previous) => (previous + 1) % totalSlides);
    }, AUTO_SLIDE_TIME);

    return () => {
      window.clearInterval(interval);
    };
  }, [totalSlides]);

  return (
    <section
      aria-label="Featured products"
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url("${BACKGROUND_IMAGE}")`,
      }}
    >
      <div className="relative h-40 overflow-hidden sm:h-56 md:h-72 lg:h-80">
        {images.map((image, index) => {
          const isActive = index === current;

          return (
            <div
              key={image.src}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                isActive
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          );
        })}

        {/* Previous button */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white backdrop-blur-sm transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
        >
          ‹
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white backdrop-blur-sm transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;