import { useState,} from "react";
import { Link } from "react-router-dom";
export const products = [
  {
    id: 4,
    name: 'BOMBAY BEGUM',
    href: 'Men Pop Print Medium  Corn Full Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230623/XI65/649541b6d55b7d0c63b6e691/-473Wx593H-464879851-blue-MODEL.jpg',
    imageAlt: "Front of men's forming an isometric cube.",
    price: 649,
    Discount: '$35',
    color: 'Iso Dots',
  },
  {
    id: 5,
    name: 'JOHN PLAYERS JEANS',
    href: 'Men Checked Slim Fit Shacket',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240719/edRZ/669a5fb31d763220fa087966/-473Wx593H-443037161-black-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 479,
    Discount: '$35',
    color: 'Pure Black',
  },
  {
    id: 6,
    name: 'U.S. POLO ASSN.',
    href: 'Shein Cuban Collar Overlay  Fit Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230512/nLEs/645e55f842f9e729d77cb386/-473Wx593H-469477464-white-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: 449,
    Discount: '$35',
    color: 'pure White',
  },
  {
    id: 7,
    name: 'THE INDIAN GARAGE CO',
    href: 'Striped Shirt with Patch Pocket with printed fromal checks ',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230215/H62m/63ecef58aeb26924e373ad94/-473Wx593H-469448036-blue-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: 849,
    Discount: '$35',
    color: 'culumba',
  },
  {
    id: 8,
    name: 'ALPHA TRIBE',
    href: 'Men Pop Print Medium  Corn Full Shirt with printed cotton',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250704/T0uN/6867b69bb13fc54eddf7477d/-473Wx593H-701870527-mustard-MODEL3.jpg',
    imageAlt: "Men Regular Fit Shirt with Full Sleeves",
    price: 749,
    Discount: '$35',
    color: 'ISO Yellow',
  },
  {
    id: 9,
    name: 'CAMPUS SUTRA.',
    href: 'Men Floral Print Regular Fit Shirt with Spread Collar',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240409/NYAJ/6614441116fd2c6e6aa5b65f/-473Wx593H-467236683-multi-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: 1449,
    Discount: '$75',
    color: 'dev colors',
  },
]
function ProductListed({ product }) {
  const [quarter, setQuarter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [, setProducts] = useState<any[]>([]);



  const filteredProducts =
    quarter === "all"
      ? products
      : products.filter((products) => products.quarter === quarter);
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") {
      return Number(a.price) - Number(b.price);
    }
    if (sortOrder === "high-low") {
      return Number(b.price) - Number(a.price);
    }
    return 0;
  });
  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={quarter}
          onChange={(e) => setQuarter(e.target.value)}
        >
          <option value="all">All Quarters</option>
          <option value="Q1">Q1</option>
          <option value="Q2">Q2</option>
          <option value="Q3">Q3</option>
          <option value="Q4">Q4</option>
        </select>

        <select
          className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="group relative border rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 bg-white"
          >
            <Link to={`/product-details?id=${product.id}`} className="block">

              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md object-cover group-hover:scale-105 transition duration-300 lg:h-64"
              />

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.href}</p>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.color} | {product.category}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    ₹{product.price}
                  </p>
                  <p className="text-sm text-gray-500 line-through">
                    ₹{product.discount}
                  </p>
                </div>
              </div>
            </Link>

            <button
              onClick={() => console.log("Added to Bag:", product.name)}
              className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 rounded-lg py-2 font-medium shadow-md hover:shadow-lg"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListed;
