import React, { useState } from "react";

interface ColorVariant {
  name: string;
  image: string;
}

interface Product {
  name: string;
  colors: ColorVariant[];
}

const product: Product = {
  name: "Women's Stripes Regular Fit Shirt",

  colors: [
    {
      name: "White",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230624/white-shirt.jpg",
    },
    {
      name: "Black",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230624/black-shirt.jpg",
    },
    {
      name: "Maroon",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230624/maroon-shirt.jpg",
    },
    {
      name: "Navy Blue",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230624/navy-shirt.jpg",
    },
    {
      name: "Brown",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20230624/brown-shirt.jpg",
    },
  ],
};

const ColorSelector: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product.colors[0]
  );

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement>
  ) => {
    event.currentTarget.src =
      "https://via.placeholder.com/250?text=Image+Not+Available";
  };

  return (
    <div className="flex flex-col items-center gap-5 p-6">
      {/* Product Name */}
      <h2 className="text-2xl font-bold text-gray-800">
        {product.name}
      </h2>

      {/* Selected Product Image */}
      <img
        src={selectedColor.image}
        alt={selectedColor.name}
        onError={handleImageError}
        className="h-64 w-64 rounded-xl object-cover shadow-md"
      />

      {/* Selected Color */}
      <p className="text-lg font-medium text-gray-800">
        Selected Color: {selectedColor.name}
      </p>

      {/* Color Options */}
      <div className="flex gap-3">
        {product.colors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => setSelectedColor(color)}
            aria-label={`Select ${color.name}`}
            className={`h-10 w-10 overflow-hidden rounded-full border-2 transition ${
              selectedColor.name === color.name
                ? "scale-110 border-cyan-500"
                : "border-gray-300 hover:border-cyan-400"
            }`}
          >
            <img
              src={color.image}
              alt={color.name}
              onError={handleImageError}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;