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
  name: "Men Stripes Regular Fit Shirt",
  colors: [
    {
      name: "White",
      image:
        "https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-blue-MODEL.jpg",
    },
    {
      name: "Black",
      image:
        "https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-black-MODEL.jpg",
    },
    {
      name: "Maroon",
      image:
        "https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-maroon-MODEL.jpg",
    },
    {
      name: "Navy Blue",
      image:
        "https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-navy-MODEL.jpg",
    },
    {
      name: "Brown",
      image:
        "https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-brown-MODEL.jpg",
    },
  ],
};

const ColorSelector: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product.colors[0]
  );

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Product Image */}
      <img
        src={selectedColor.image}
        alt={selectedColor.name}
        className="w-64 h-64 object-cover rounded-xl shadow-md"
      />

      {/* Selected Color Name */}
      <p className="text-lg font-medium text-gray-800">{selectedColor.name}</p>

      {/* Color Options */}
      <div className="flex gap-3">
        {product.colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className={`relative w-10 h-10 rounded-full border-2 overflow-hidden transition-all ${
              selectedColor.name === color.name
                ? "border-cyan-500 scale-110"
                : "border-gray-300 hover:border-cyan-400"
            }`}
          >
            <img
              src={color.image}
              alt={color.name}
              className="w-full h-full object-cover rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
