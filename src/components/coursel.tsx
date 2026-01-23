import { useState, useEffect } from "react";

const images = [
  "https://images.meesho.com/images/marketing/1767796583251.webp",
  "https://as1.ftcdn.net/v2/jpg/17/39/34/40/1000_F_1739344024_RLj6zCV9GcNfcTZm7rdCXed4QIaUFDQV.jpg",
  "https://as2.ftcdn.net/v2/jpg/11/25/68/35/1000_F_1125683569_EHXzhCwNlJjhqCJ7VrmJpcfoXQIcZQqD.jpg",
  "https://as2.ftcdn.net/v2/jpg/16/18/26/21/1000_F_1618262163_QzchrqRGZMC6FYjSpPZRVqdeXCTXXnlu.jpg",
  "https://as2.ftcdn.net/v2/jpg/17/19/82/83/1000_F_1719828356_CEie7j5KjAr5bHdQhz9hxtm2ESwKGAOi.jpg",
  "https://as1.ftcdn.net/v2/jpg/06/81/26/94/1000_F_681269412_u1DyC2f5gaVGzdfyXaWdRfq0OQN5O8ip.jpg",
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
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.euroschoolindia.com/blogs/wp-content/uploads/2025/10/What-Is-Coding-and-Why-Is-It-Important.jpg')",
      }}
    >
      {/* Carousel wrapper */}
      <div className="relative h-40 overflow-hidden md:h-55">
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
