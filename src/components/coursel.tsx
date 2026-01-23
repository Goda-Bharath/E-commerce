import { useState, useEffect } from "react";

const images = [
  "https://images.meesho.com/images/marketing/1767796583251.webp",
  "https://m.media-amazon.com/images/G/31/IMG25/Fashion/JanUBS26/TopHero/PC/Unrec/Womens_Clothing_1500x460._SX1500_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/IMG25/Fashion/JanUBS26/TopHero/PC/Unrec/SPB_1500x460._SX1500_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/IMG25/Fashion/JanUBS26/TopHero/PC/Unrec/Mens_Clothing_1500x460._SX1500_QL85_FMpng_.png",
  "https://m.media-amazon.com/images/G/31/IMG25/Fashion/JanUBS26/TopHero/PC/Unrec/V1/Kids_Clothing_1500x460._SX1500_QL85_FMpng_.png",
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // AUTOPLAY: move to next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1600);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [current]); // depends on current
  return (
    <div
      className="relative w-full bg-cover object-cover bg-center"
      style={{
        backgroundImage:
          "url('https://m.media-amazon.com/images/G/31/img21/janart26/A/_JanART_25Hidden-Slot_Stripe_ACQ_pc_1.jpg')",
      }}
    >
      {/* Carousel wrapper */}
      <div className="relative h-40 overflow-hidden md:h-80 ">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${index === current ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-99 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
