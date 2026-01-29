import { Link } from "react-router-dom";
function Kids() {
  const Kidsdata = [
    {
      id: 1,
      name: 'CODEZ.',
      href: 'Boys Graphic Print Regular Fit Round-Neck T-Shirt',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20241007/gKiL/67033714260f9c41e85d59f9/-473Wx593H-700536687-white-MODEL.jpg',
      imageAlt: "Kid's",
      price: 119,
      Discount: '$10',
      color: 'Mulit',
    },
    {
      id: 2,
      name: 'WEAR YOUR MIND.',
      href: 'Boys T-Shirt',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240319/EtvL/65f9be5e16fd2c6e6a6f41c5/-473Wx593H-467184917-multi-MODEL.jpg',
      imageAlt: "Kid's",
      price: 119,
      Discount: '$10',
      color: 'Mulit',
    },
    {
      id: 3,
      name: 'INF FRENDZ.',
      href: 'Print Crew-Neck T-Shirt',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20241113/ASOP/6734bbe8f9b8ef490b21dc83/-473Wx593H-443055603-assorted-MODEL.jpg',
      imageAlt: "Kid's",
      price: 119,
      Discount: '$10',
      color: 'assorted',
    },
    {
      id: 4,
      name: 'CODEZ.',
      href: 'Boy Regular Fit Polo T-Shirt',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240524/k3nq/6650968116fd2c6e6a23c62d/-473Wx593H-700009521-white-MODEL.jpg',
      imageAlt: "Kid's",
      price: 319,
      Discount: '$50',
      color: 'White',
    },
    {
      id: 5,
      name: 'WEAR YOUR MIND.',
      href: ' Round-Neck T-Shirt',
      imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240728/UdxN/66a5a9226f60443f31cdef01/-473Wx593H-464279737-black-MODEL.jpg',
      imageAlt: "Kid's",
      price: 219,
      Discount: '$30',
      color: 'Black printed',
    },
    {
      id: 6,
      name: 'WEAR YOUR MIND.',
      href: 'Boys T-Shirt',
      imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT0_8t0wfEhCQ5PWFyCGPk7fIiARUIuTm0bMzdz_SlFw8xyUihzjywNTdzsD8dbXKGoF_Xv17QmVwR6qvYCsAGOau9df3QzbGFgl0EzOkDlphZpNthTc3e-Sw9uYSF43jt6ZZdBnIkq7Q&usqp=CAc',
      imageAlt: "Kid's",
      price: 119,
      Discount: '$10',
      color: 'Mulit',
      category: "kids products",
    },


  ]
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Kids Shoping Products
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
          {Kidsdata.map((dataset) => (
            <div
              key={dataset.id}
              className="group relative border rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <Link
                to={`/product-details?id=${dataset.id}`}
                state={{ product: dataset }}
                className="block"
              >
                {/* Product Image */}
                <img
                  alt={dataset.imageAlt}
                  src={dataset.imageSrc}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-90 lg:h-64"
                />

                {/* Info */}
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {dataset.name}
                    </h3>
                    <p className="text-sm text-gray-500">{dataset.href}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {dataset.color} | {dataset.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">₹{dataset.price}</p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{dataset.Discount}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Add to Bag Button */}
              <button
                onClick={() => console.log("Added to Bag:", dataset.name)}
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
export default Kids;