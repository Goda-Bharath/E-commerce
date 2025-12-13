// This file contains all product data for the application
interface Product {
  id: string;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  Discount: string;
  color: string;
  category: 'men' | 'women' | 'kids' | 'beauty';
  description?: string;
}

export const products: Product[] = [
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
    category: 'men',
  },

  // Women's Products
  {
    id: 'w1',
    name: 'SUTA',
    href: 'Women Zari Woven Border Saree with Tassels',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root1/20250729/Hg8e/6888ab083d468c61ab2dbc0a/-473Wx593H-702036820-yellow-MODEL.jpg',
    imageAlt: "Women's Saree",
    price: 1419,
    Discount: '$30',
    color: 'Limely Yellow',
    category: 'women',
  },
  {
    id: 'w2',
    name: 'INDIE PICKS',
    href: 'Pure Kanjeevaram Silk Saree With Blouse Piece',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20250627/xxJI/685e8ccd0f920c69cc5e505d/-473Wx593H-701830283-maroon-MODEL.jpg',
    imageAlt: "Women's Saree",
    price: 3319,
    Discount: '$60',
    color: 'Maroon',
    category: 'women',
  },

  // Kids' Products
  {
    id: 'k1',
    name: 'CODEZ',
    href: 'Boys Graphic Print Regular Fit Round-Neck T-Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20241007/gKiL/67033714260f9c41e85d59f9/-473Wx593H-700536687-white-MODEL.jpg',
    imageAlt: "Kid's T-shirt",
    price: 119,
    Discount: '$10',
    color: 'Multi',
    category: 'kids',
  },
  {
    id: 'k2',
    name: 'WEAR YOUR MIND',
    href: 'Boys T-Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20240319/EtvL/65f9be5e16fd2c6e6a6f41c5/-473Wx593H-467184917-multi-MODEL.jpg',
    imageAlt: "Kid's T-shirt",
    price: 119,
    Discount: '$10',
    color: 'Multi',
    category: 'kids',
  },

  // Beauty Products
  {
    id: 'b1',
    name: 'LAKME',
    href: 'Lakme 9 to 5 Primer + Matte Perfect Cover Foundation',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230306/8wYI/64060b4ef997dd031c8a4bc8/-473Wx593H-465861650-nude-MODEL.jpg',
    imageAlt: 'Foundation',
    price: 299,
    Discount: '$15',
    color: 'Nude',
    category: 'beauty',
  }
];


export const productsd = [
  {
    id: "m2",
    name: "Classic Cotton T-Shirt",
    price: 599,
    image: "/images/tshirt.jpg",
    description: "Soft cotton T-shirt with modern fit.",
    variants: [
      {
        color: "Red",
        image: "/images/tshirt-red.jpg",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        color: "Blue",
        image: "/images/tshirt-blue.jpg",
        sizes: ["S", "M", "L"],
      },
      {
        color: "Green",
        image: "/images/tshirt-green.jpg",
        sizes: ["M", "L", "XL"],
      },
    ],
  },
  // ...other products
];
