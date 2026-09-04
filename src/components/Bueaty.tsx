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
    <div className="min-h-screen bg-white">
  <div className="mx-auto max-w-7xl px-3 py-8 sm:px-4 sm:py-12 md:px-6">

    <div className="mb-8 flex flex-col items-center justify-between gap-5 md:flex-row">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Beauty Shopping Products
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Discover products for your beauty and lifestyle needs.
        </p>
      </div>

      <div className="w-full md:w-80">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition duration-300 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>
    </div>

    <div className="mb-8 flex flex-wrap items-center gap-4">
      <select
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none transition duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      >
        <option value="All">All Categories</option>
        <option value="Men">Men</option>
        <option value="Women">Women</option>
        <option value="Kids">Kids</option>
        <option value="Beauty">Beauty</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select
        className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 outline-none transition duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      >
        <option value="default">Sort by</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
      </select>
    </div>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Bueatyitems.map((product) => (
        <div
          key={product.id}
          className="group overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <Link
            to={`/product-details?id=${product.id}`}
            state={{ product }}
            className="block"
          >
            <div className="overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.imageSrc}
                alt={product.imageAlt || product.name}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {product.color}
                  </p>

                  <p className="mt-2 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                    {product.category}
                  </p>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-xl font-bold text-gray-900">
                    ₹{product.price}
                  </p>

                  <p className="mt-1 text-sm text-gray-400 line-through">
                    ₹{product.Discount}
                  </p>
                </div>
              </div>

              <p className="mt-3 truncate text-sm text-gray-500">
                {product.href}
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => console.log("Added to Bag:", product.name)}
            className="mt-5 w-full rounded-xl bg-yellow-400 py-3 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-yellow-500 hover:shadow-md active:scale-[0.98]"
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