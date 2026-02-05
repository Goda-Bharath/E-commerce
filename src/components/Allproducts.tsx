import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./coursel";

export const products = [
  // Men's Products
  {
    id: 'm1',
    name: 'EYEBOGLER',
    href: 'Men Stripes Regular Fit Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-blue-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 349,
    Discount: '$35',
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
    Discount: '$35',
    color: 'Aspen White',
  },
  {
    id: 'm3',
    name: 'NETPLAY',
    href: 'Front of mens Basic Tee in dark gray',
    imageSrc: 'https://assets.sheinindia.in/medias/shein_sys_master/root/20250510/r5S9/681f223a7a6cd4182f250724/-473Wx593H-443327677-black-MODEL.jpg',
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: 349,
    Discount: '$35',
    color: 'Black',
  },
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
  {
    id: 10,
    name: 'NYRIKA.',
    href: 'Women Saree with Contrast Border',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250630/d705/68625c2fb13fc54edddd9b8a/-473Wx593H-701310582-cream-MODEL3.jpg',
    imageAlt: "women's",
    price: 419,
    Discount: '$10',
    color: 'Limely pink',
  },
  {
    id: 11,
    name: 'SATRANI.',
    href: 'Women Traditional Saree with Unstitched Blouse',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250527/KhR5/6835b6c47a6cd4182f594dc7/-473Wx593H-701631549-black-MODEL.jpg',
    imageAlt: "women's",
    price: 619,
    Discount: '$10',
    color: 'Maronly black',
  },
  {
    id: 12,
    name: 'PANZORA.',
    href: "Women's Kashmiri Pashmina Silk Saree",
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250107/7wnK/677d15b9663dbe1c5fc2828a/-473Wx593H-701024393-purple-MODEL.jpg',
    imageAlt: 'women',
    price: 919,
    Discount: '$10',
    color: 'lavender',
  },
  {
    id: 13,
    name: 'SUTA.',
    href: 'Women Zari Woven Border Saree with Tassels',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root1/20250729/Hg8e/6888ab083d468c61ab2dbc0a/-473Wx593H-702036820-yellow-MODEL.jpg',
    imageAlt: "women's",
    price: 1419,
    Discount: '$30',
    color: 'Limely Yellow',
  },
  {
    id: 14,
    name: 'INDIE PICKS.',
    href: 'Pure Kanjeevaram Silk Saree With Blouse Piece..',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250627/xxJI/685e8ccd0f920c69cc5e505d/-473Wx593H-701830283-maroon-MODEL.jpg',
    imageAlt: "women's.",
    price: 3319,
    Discount: '$60',
    color: 'Maroon',
  },
  {
    id: 15,
    name: 'STYLEELITE.',
    href: 'Men Self-design T-shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250514/cW5A/6824386755340d4b4f33737b/-473Wx593H-700187158-beige-MODEL.jpg',
    imageAlt: "women's",
    price: 319,
    Discount: '$10',
    color: 'Beige',
  },
  {
    id: 16,
    name: 'CODEZ.',
    href: 'Boys Graphic Print Regular Fit Round-Neck T-Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20241007/gKiL/67033714260f9c41e85d59f9/-473Wx593H-700536687-white-MODEL.jpg',
    imageAlt: "Kid's",
    price: 119,
    Discount: '$10',
    color: 'Mulit',
  },
  {
    id: 17,
    name: 'WEAR YOUR MIND.',
    href: 'Boys T-Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240319/EtvL/65f9be5e16fd2c6e6a6f41c5/-473Wx593H-467184917-multi-MODEL.jpg',
    imageAlt: "Kid's",
    price: 119,
    Discount: '$10',
    color: 'Mulit',
  },
  {
    id: 18,
    name: 'INF FRENDZ.',
    href: 'Print Crew-Neck T-Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20241113/ASOP/6734bbe8f9b8ef490b21dc83/-473Wx593H-443055603-assorted-MODEL.jpg',
    imageAlt: "Kid's",
    price: 119,
    Discount: '$10',
    color: 'assorted',
  },
  {
    id: 19,
    name: 'CODEZ.',
    href: 'Boy Regular Fit Polo T-Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240524/k3nq/6650968116fd2c6e6a23c62d/-473Wx593H-700009521-white-MODEL.jpg',
    imageAlt: "Kid's",
    price: 319,
    Discount: '$50',
    color: 'White',
  },
  {
    id: 20,
    name: 'WEAR YOUR MIND.',
    href: ' Round-Neck T-Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240728/UdxN/66a5a9226f60443f31cdef01/-473Wx593H-464279737-black-MODEL.jpg',
    imageAlt: "Kid's",
    price: 219,
    Discount: '$30',
    color: 'Black printed',
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
    href: 'Tokyo Premium Eau De Parfum for Men | 100.0 ml with smel',
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
  },
  {
    id: 28,
    name: 'DAVIDOFF.',
    href: 'Cool Water Sea Rose Eau De Toilette Spray | 100.0 ml',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230216/1CCm/63ee4ba3aeb26924e3752999/-473Wx593H-4913274720-multicolor-MODEL.jpg',
    imageAlt: "Kid's",
    price: 519,
    Discount: '$20',
    color: 'Pink',
  },
  {
    id: 29,
    name: 'DORALL COLLECTION.',
    href: 'Lancy Eau De Toilette | 100.0 ml with smell perfomance',
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
    href: "Acne Oil Control Face Wash | 50.0 gm freshly effectively",
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230118/TBBe/63c7d1aeaeb269c651e99851/-473Wx593H-4919462160-multi-MODEL.jpg',
    imageAlt: "Kid's",
    price: 919,
    Discount: '$40',
    color: 'Baroon',
    category: "All",
  },
]

function Allproducts() {
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
  };


  const handleSortChange = (e: any) => {
    setSortOrder(e.target.value);
  };


   let filteredProducts =
    category === "All"
      ? [...products]
      : products.filter((p) => p.category === category);


  if (sortOrder === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }


const [quarter,setQuarter] = useState('All')

  return (

    <div className="bg-white min-h-screen ">
      <Carousel />
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            All Shoping Products
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">

         
          <select
            className="border rounded px-4 py-2"
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
            className="border rounded px-4 py-2"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >

            <option value="default">Sort by</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div

              key={product.id}
              className="group relative border rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <Link
                to={`/product-details?id=${product.id}`}
                className="block"
              >

                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md object-cover group-hover:opacity-90 lg:h-64"
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
                    <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
                    <p className="text-sm text-gray-500 line-through">
                      ₹{product.Discount}
                    </p>
                  </div>
                </div>
              </Link>
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

  );
}


export default Allproducts;