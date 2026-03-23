import { useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  discountPrice: number;
  color: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "U.S. Polo Assn.",
    description: "Men Solid Casual Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    price: 1499,
    discountPrice: 999,
    color: "Blue",
    category: "Casual",
  },
  {
    id: 2,
    name: "Levi's",
    description: "Slim Fit Denim Shirt",
    image: "https://images.unsplash.com/photo-1583001809873-a128495da465",
    price: 1999,
    discountPrice: 1299,
    color: "Dark Blue",
    category: "Denim",
  },
  {
    id: 3,
    name: "H&M",
    description: "Regular Fit Cotton Shirt",
    image: "https://images.unsplash.com/photo-1520975922284-9e0b9c8f7b95",
    price: 999,
    discountPrice: 699,
    color: "White",
    category: "Formal",
  },
  {
    id: 4,
    name: "Zara",
    description: "Printed Casual Shirt",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
    price: 1799,
    discountPrice: 1199,
    color: "Black",
    category: "Printed",
  },
  {
    id: 5,
    name: "Roadster",
    description: "Checked Casual Shirt",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401f0",
    price: 1299,
    discountPrice: 899,
    color: "Red",
    category: "Checked",
  },
  {
    id: 6,
    name: "Allen Solly",
    description: "Formal Slim Fit Shirt",
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
    price: 1899,
    discountPrice: 1399,
    color: "Light Blue",
    category: "Formal",
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
                src={product.image}
                alt={product.name}
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