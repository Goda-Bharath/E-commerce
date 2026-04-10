interface Product {
  id: string;
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  discountPrice?: number;
  color: string;
  category: 'men' | 'women' | 'kids' | 'beauty';
  description?: string;
  variants?: Variant[];
}

interface Variant {
  color: string;
  image: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 'm1',
    name: 'EYEBOGLER',
    title: 'Men Stripes Regular Fit Shirt',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-blue-MODEL.jpg',
    imageAlt: "Men's Shirt",
    price: 349,
    discountPrice: 299,
    color: 'Maroon',
    category: 'men',
  },
  {
    id: 'm2',
    name: 'SHEIN',
    title: 'Shein Cuban Textured Relaxed Fit Shirt',
    imageSrc: 'https://assets.sheinindia.in/medias/shein_sys_master/root/20250312/nKZG/67d1721f59f8353980323e28/shein_beige_shein_cuban_collar_short_sleeves_textured_shirt.jpg',
    imageAlt: "Men's Shirt",
    price: 449,
    discountPrice: 399,
    color: 'Aspen White',
    category: 'men',
  },
  {
    id: 'w1',
    name: 'SUTA',
    title: 'Women Zari Woven Border Saree with Tassels',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root1/20250729/Hg8e/6888ab083d468c61ab2dbc0a/-473Wx593H-702036820-yellow-MODEL.jpg',
    imageAlt: "Women's Saree",
    price: 1419,
    discountPrice: 1299,
    color: 'Lime Yellow',
    category: 'women',
  },
  {
    id: 'b1',
    name: 'LAKME',
    title: 'Lakme 9 to 5 Primer + Matte Foundation',
    imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20230306/8wYI/64060b4ef997dd031c8a4bc8/-473Wx593H-465861650-nude-MODEL.jpg',
    imageAlt: 'Foundation',
    price: 299,
    discountPrice: 249,
    color: 'Nude',
    category: 'beauty',
    variants: [
      {
        color: "Nude",
        image: "/images/foundation-nude.jpg",
        sizes: [],
      }
    ]
  }
];