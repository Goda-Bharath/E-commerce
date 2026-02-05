import { Link } from "react-router-dom";
    const Mendata = [
        {
            id: 1,
            name: 'ALPHA TRIBE',
            href: 'Men Pop Print Medium  Corn Full Shirt  with printed cotton',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250704/T0uN/6867b69bb13fc54eddf7477d/-473Wx593H-701870527-mustard-MODEL3.jpg',
            imageAlt: "Men Regular Fit Shirt with Full Sleeves",
            price: 749,
            Discount: '$35',
            color: 'ISO Yellow',
        },
        {
            id: 2,
            name: 'CAMPUS SUTRA.',
            href: 'Men Floral Print Regular Fit Shirt with Spread Collar',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240409/NYAJ/6614441116fd2c6e6aa5b65f/-473Wx593H-467236683-multi-MODEL.jpg',
            imageAlt: "Front of men's Basic Tee in white.",
            price: 1449,
            Discount: '$75',
            color: 'dev colors',
        },
        {
            id: 3,
            name: 'U.S. POLO ASSN.',
            href: 'Shein Cuban Collar Overlay  Fit Shirt',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230512/nLEs/645e55f842f9e729d77cb386/-473Wx593H-469477464-white-MODEL.jpg',
            imageAlt: "Front of men's Basic Tee in white.",
            price: 449,
            Discount: '$35',
            color: 'pure White',
        },
        {
            id: 4,
            name: 'EYEBOGLER',
            href: 'Men Stripes Regular Fit Shirt',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-blue-MODEL.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 349,
            Discount: '$35',
            color: 'Maron',
        },
        {
            id: 5,
            name: 'SHEIN',
            href: 'Shein Cuban Textured Relaxed Fit Shirt',
            imageSrc: 'https://assets.sheinindia.in/medias/shein_sys_master/root/20250312/nKZG/67d1721f59f8353980323e28/shein_beige_shein_cuban_collar_short_sleeves_textured_shirt.jpg',
            imageAlt: "Front of men's Basic Tee in white.",
            price: 449,
            Discount: '$35',
            color: 'Aspen White',
        },
        {
            id: 6,
            name: 'NETPLAY',
            href: 'Front of mens Basic Tee in dark gray',
            imageSrc: 'https://assets.sheinindia.in/medias/shein_sys_master/root/20250510/r5S9/681f223a7a6cd4182f250724/-473Wx593H-443327677-black-MODEL.jpg',
            imageAlt: "Front of men's Basic Tee in dark gray.",
            price: 349,
            Discount: '$35',
            color: 'Black',
        },
        {
            id: 7,
            name: 'JOHN PLAYERS shirt',
            href: 'Men Checked Slim Fit Shacket',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240719/edRZ/669a5fb31d763220fa087966/-473Wx593H-443037161-black-MODEL.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: 479,
            Discount: '$35',
            color: 'Pure Black',
        },
        {
            id: 8,
            name: 'U.S. POLO ASSN.',
            href: 'Shein Cuban Collar Overlay  Fit Shirt',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230512/nLEs/645e55f842f9e729d77cb386/-473Wx593H-469477464-white-MODEL.jpg',
            imageAlt: "Front of men's Basic Tee in white.",
            price: 449,
            Discount: '$35',
            color: 'pure White',
        },
        {
            id: 9,
            name: 'BOMBAY BEGUM',
            href: 'Men Pop Print Medium  Corn Full Shirt',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230623/XI65/649541b6d55b7d0c63b6e691/-473Wx593H-464879851-blue-MODEL.jpg',
            imageAlt: "Front of men's forming an isometric cube.",
            price: 649,
            Discount: '$35',
            color: 'Iso Dots',
            category:"men products",
        },
    ]


function Men(){
    return (
           <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Men Shoping Products
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
          {Mendata.map((Mendata) => (
            <div
              key={Mendata.id}
              className="group relative border rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              {/* Wrap only image + details in Link */}
              <Link
                to={`/product-details?id=${Mendata.id}`}
                state={{ product: Mendata }}
                className="block"
              >
                {/* Product Image */}
                <img
                  alt={Mendata.imageAlt}
                  src={Mendata.imageSrc}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-90 lg:h-64"
                />

                {/* Info */}
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {Mendata.name}
                    </h3>
                    <p className="text-sm text-gray-500">{Mendata.href}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      {Mendata.color} | {Mendata.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">₹{Mendata.price}</p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{Mendata.Discount}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Add to Bag Button */}
              <button
                onClick={() => console.log("Added to Bag:", Mendata.name)}
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
export default Men;