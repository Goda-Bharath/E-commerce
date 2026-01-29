import { Link } from "react-router-dom";
function Bueaty() {
  const Bueatyitems = [
    {
      id: 29,
      name: 'DORALL COLLECTION.',
      href: 'Lancy Eau De Toilette | 100.0 ml',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230925/srUt/6511496dddf7791519f81ac8/-473Wx593H-4938592790-multi-MODEL.jpg',
      imageAlt: "Kid's",
      price: 219,
      Discount: '$70',
      color: 'Black',
    },
    {
      id: 30,
      name: 'GARNIER.',
      href: "GARNIER Power White Anti-Pollution Double Action Facewash-100 gm | 100.0 gm",
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20220111/H3Of/61dd9e4cf997dd66231b4f8c/-473Wx593H-4912100120-multi-MODEL4.jpg',
      imageAlt: "Kid's",
      price: 919,
      Discount: '$70',
      color: 'Black',
    },
    {
      id: 31,
      name: 'NIVEA.',
      href: "Acne Oil Control Face Wash | 50.0 gm",
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230118/TBBe/63c7d1aeaeb269c651e99851/-473Wx593H-4919462160-multi-MODEL.jpg',
      imageAlt: "Kid's",
      price: 919,
      Discount: '$40',
      color: 'Baroon',
    },
    {
      id: 22,
      name: 'HELLCAT.',
      href: 'Lancy Eau De Toilette | 100.0 ml',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230925/NhyO/6511476eafa4cf41f501a03d/-473Wx593H-4938592790-multi-MODEL4.jpg',
      imageAlt: "Kid's",
      price: 519,
      Discount: '$70',
      color: 'pink',
    },
    {
      id: 23,
      name: 'BEARDO.',
      href: 'Origin Eau De Parfum | 100.0 ml',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230427/jQR3/644a6088d55b7d0c63837e1f/-473Wx593H-4919389120-multi-MODEL.jpg',
      imageAlt: "Kid's",
      price: 519,
      Discount: '$70',
      color: 'Yellow',
    },
    {
      id: 24,
      name: 'PLUM.',
      href: "BodyLovin' Smokin' Vanilla Eau De Parfum | 50.0 ml",
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240911/2Qqz/66e140e96f60443f316d9fe0/-473Wx593H-4942396790-multi-MODEL.jpg',
      imageAlt: "Kid's",
      price: 519,
      Discount: '$70',
      color: 'orange',
    },
    {
      id: 25,
      name: 'JAGUAR.',
      href: 'Classic Black Eau de Toilette | 100.0 ml',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20201125/YcNH/5fbd5d75f997dd8c83a6b90e/-473Wx593H-4908240150-multi-MODEL.jpg',
      imageAlt: "Kid's",
      price: 219,
      Discount: '$70',
      color: 'Mulit flex black',
    },
    {
      id: 26,
      name: 'BOMBAY SHAVING COMPANY.',
      href: 'Tokyo Premium Eau De Parfum for Men | 100.0 ml',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20241028/4SMU/671f8ce0f9b8ef490beb15b4/-473Wx593H-4943917000-multi-MODEL.jpg',
      imageAlt: "Kid's",
      price: 219,
      Discount: '$20',
      color: 'Blue',
    },
    {
      id: 27,
      name: 'GUESS.',
      href: 'Seductive Homme Blue Eau de Toilette -100 ml | 100.0 ml',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20201125/498m/5fbd5e1eaeb269d5631979b1/-473Wx593H-4913276080-multi-MODEL.jpg',
      imageAlt: "Kid's",
      price: 519,
      Discount: '$20',
      color: 'Barry floure',
      category: "Bueaty products",

    },

  ]
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Bueaty Shoping Products
          </h2>
          {/* Search */}
        
        </div>

        {/* Filters & Sorting */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            className="border rounded px-4 py-2"

          >
            <option value="All">All Categories</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Beauty">Beauty</option>
            <option value="Accessories">Accessories</option>
          </select>

          <select
            className="border rounded px-4 py-2"

          >
            <option value="default">Sort by</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Bueatyitems.map((product) => (
            <div
              key={product.id}
              className="group relative border rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <Link
                to={`/product-details?id=${product.id}`}
                state={{ product }}
                className="block"
              >
                {/* Product Image */}
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-90 lg:h-64"
                />

                {/* Info */}
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
                    <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{product.Discount}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Add to Bag Button */}
              <button
                onClick={() => console.log("Added to Bag:", product.name)}
                className="mt-4 w-full bg-yellow-400 transition-all duration-300 animate-pulse rounded hover:bg-yellow-500 rounded-lg py-2 font-medium"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Bueaty;