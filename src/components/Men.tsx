import { useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 'm1',
    name: 'EYEBOGLER',
    href: 'Men Stripes Regular Fit Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-blue-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 349,
    discountPrice: 314,
    color: 'Maron',
    category: 'men',
  },
  {
    id: 'm2',
    name: 'SHEIN',
    href: 'Shein Cuban Textured Relaxed Fit Shirt',
    imageSrc: 'https://assets.sheinindia.in/medias/shein_sys_master/root/20250312/nKZG/67d1721f59f8353980323e28/shein_beige_shein_cuban_collar_short_sleeves_textured_shirt.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: 449,
    discountPrice: 414,
    color: 'Aspen White',
  },
  {
    id: 'm3',
    name: 'NETPLAY',
    href: 'Front of mens Basic Tee in dark gray',
    imageSrc: 'https://assets.sheinindia.in/medias/shein_sys_master/root/20250510/r5S9/681f223a7a6cd4182f250724/-473Wx593H-443327677-black-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: 349,
    discountPrice: 314,
    color: 'Black',
  },
  {
    id: 4,
    name: 'BOMBAY BEGUM',
    href: 'Men Pop Print Medium  Corn Full Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230623/XI65/649541b6d55b7d0c63b6e691/-473Wx593H-464879851-blue-MODEL.jpg',
    imageAlt: "Front of men's forming an isometric cube.",
    price: 649,
    discountPrice: 614,
    color: 'Iso Dots',
  },
  {
    id: 5,
    name: 'JOHN PLAYERS JEANS',
    href: 'Men Checked Slim Fit Shacket',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240719/edRZ/669a5fb31d763220fa087966/-473Wx593H-443037161-black-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 479,
    discountPrice: 444,
    color: 'Pure Black',
  },
  {
    id: 6,
    name: 'U.S. POLO ASSN.',
    href: 'Shein Cuban Collar Overlay  Fit Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230512/nLEs/645e55f842f9e729d77cb386/-473Wx593H-469477464-white-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: 449,
    discountPrice: 414,
    color: 'pure White',
  },
  {
    id: 7,
    name: 'THE INDIAN GARAGE CO',
    href: 'Striped Shirt with Patch Pocket with printed fromal checks ',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230215/H62m/63ecef58aeb26924e373ad94/-473Wx593H-469448036-blue-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: 849,
    discountPrice: 814,
    color: 'culumba',
  },
  {
    id: 8,
    name: 'ALPHA TRIBE',
    href: 'Men Pop Print Medium  Corn Full Shirt with printed cotton',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250704/T0uN/6867b69bb13fc54eddf7477d/-473Wx593H-701870527-mustard-MODEL3.jpg',
    imageAlt: "Men Regular Fit Shirt with Full Sleeves",
    price: 749,
    discountPrice: 714,
    color: 'ISO Yellow',
  },
  {
    id: 9,
    name: 'CAMPUS SUTRA.',
    href: 'Men Floral Print Regular Fit Shirt with Spread Collar',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240409/NYAJ/6614441116fd2c6e6aa5b65f/-473Wx593H-467236683-multi-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: 1449,
    discountPrice: 1374,
    color: 'dev colors',
  },
];

function ProductListed() {
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

  return (
    <div className="p-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="all">All Categories</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Denim">Denim</option>
          <option value="Printed">Printed</option>
          <option value="Checked">Checked</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="default">Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <Link to={`/product-details/${product.id}`}>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-64 object-cover rounded-md"
              />

              <h3 className="mt-3 text-lg font-semibold">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">
                {product.description}
              </p>

              <p className="text-sm text-gray-500">
                {product.color} | {product.category}
              </p>

              <div className="flex justify-between mt-2">
                <span className="font-bold">
                  ₹{product.discountPrice}
                </span>
                <span className="line-through text-gray-400">
                  ₹{product.price}
                </span>
              </div>
            </Link>

            <button className="mt-3 w-full bg-yellow-400 py-2 rounded">
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListed;