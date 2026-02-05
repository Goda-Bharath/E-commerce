import { Link } from "react-router-dom";

function Women() {
  const Womendata = [
    {
      id: 1,
      name: "SUTA.",
      href: "Women Zari Woven Border Saree with Tassels",
      imageSrc:
        "https://assets.ajio.com/medias/sys_master/root1/20250729/Hg8e/6888ab083d468c61ab2dbc0a/-473Wx593H-702036820-yellow-MODEL.jpg",
      imageAlt: "women's",
      price: 1419,
      Discount: "$30",
      color: "Limely Yellow",
      category: "women products",
    },
    {
      id: 2,
      name: "INDIE PICKS.",
      href: "Pure Kanjeevaram Silk Saree With Blouse Piece..",
      imageSrc:
        "https://assets.ajio.com/medias/sys_master/root/20250627/xxJI/685e8ccd0f920c69cc5e505d/-473Wx593H-701830283-maroon-MODEL.jpg",
      imageAlt: "women's.",
      price: 3319,
      Discount: "$60",
      color: "Maroon",
      category: "women products",
    },
    {
      id: 3,
      name: "NYRIKA.",
      href: "Women Saree with Contrast Border",
      imageSrc:
        "https://assets.ajio.com/medias/sys_master/root/20250630/d705/68625c2fb13fc54edddd9b8a/-473Wx593H-701310582-cream-MODEL3.jpg",
      imageAlt: "women's",
      price: 419,
      Discount: "$10",
      color: "Limely pink",
      category: "women products",
    },
    {
      id: 4,
      name: "SATRANI.",
      href: "Women Traditional Saree with Unstitched Blouse",
      imageSrc:
        "https://assets.ajio.com/medias/sys_master/root/20250527/KhR5/6835b6c47a6cd4182f594dc7/-473Wx593H-701631549-black-MODEL.jpg",
      imageAlt: "women's",
      price: 619,
      Discount: "$10",
      color: "Maronly black",
      category: "women products",
    },
    {
      id: 5,
      name: "PANZORA.",
      href: "Women's Kashmiri Pashmina Silk Saree",
      imageSrc:
        "https://assets.ajio.com/medias/sys_master/root/20250107/7wnK/677d15b9663dbe1c5fc2828a/-473Wx593H-701024393-purple-MODEL.jpg",
      imageAlt: "women",
      price: 919,
      Discount: "$10",
      color: "lavender",
      category: "women products",
    },
    {
      id: 15,
      name: "STYLEELITE.",
      href: "Men Self-design T-shirt",
      imageSrc:
        "https://assets.ajio.com/medias/sys_master/root/20250514/cW5A/6824386755340d4b4f33737b/-473Wx593H-700187158-beige-MODEL.jpg",
      imageAlt: "women's",
      price: 319,
      Discount: "$10",
      color: "Beige",
      category: "women products",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Women Shoping Products
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <select className="border rounded px-4 py-2">
            <option value="All">All Categories</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Beauty">Beauty</option>
            <option value="Accessories">Accessories</option>
          </select>

          <select className="border rounded px-4 py-2">
            <option value="default">Sort by</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Womendata.map((item) => (
            <div
              key={item.id}
              className="group relative border rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <Link
                to={`/product-details?id=${item.id}`}
                state={{ product: item }}
                className="block"
              >
                <img
                  alt={item.imageAlt}
                  src={item.imageSrc}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-90 lg:h-64"
                />

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.href}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.color} | {item.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ₹{item.price}
                    </p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{item.Discount}
                    </p>
                  </div>
                </div>
              </Link>

              <button
                onClick={() => console.log("Added to Bag:", item.name)}
                className="mt-4 w-full bg-yellow-400 transition-all duration-300 animate-pulse hover:bg-yellow-500 rounded-lg py-2 font-medium"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Women;
