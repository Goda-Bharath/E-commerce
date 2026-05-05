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

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <img
        src={selectedColor.image}
        alt={selectedColor.name}
        onError={(e) =>
          (e.currentTarget.src =
            "https://via.placeholder.com/250?text=Image+Not+Available")
        }
        className="w-64 h-64 object-cover rounded-xl shadow-md"
      />

      {/* Selected Color */}
      <p className="text-lg font-medium text-gray-800">
        {selectedColor.name}
      </p>

      {/* Color Options */}
      <div className="flex gap-3">
        {product.colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color)}
            aria-label={color.name}
            className={`w-10 h-10 rounded-full border-2 overflow-hidden transition ${
              selectedColor.name === color.name
                ? "border-cyan-500 scale-110"
                : "border-gray-300 hover:border-cyan-400"
            }`}
          >
            <img
              src={color.image}
              alt={color.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;