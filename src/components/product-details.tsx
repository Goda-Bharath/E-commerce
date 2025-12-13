import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "./Allproducts";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");

  // If the link passed the full product via location.state, prefer that
  const state = (location.state as any) || null;
  const product = state && state.product ? state.product : products.find((p) => String(p.id) === productId);

  const [mainImage, setMainImage] = useState<string | undefined>(
    product?.imageSrc
  );
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Product Not Found ❌
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      ...product,
      quantity,
      selectedSize,
    });
  };

  const handleBuyNow = () => {
    console.log("Proceeding to checkout:", {
      ...product,
      quantity,
      selectedSize,
    });
  };

  // Calculate discount percentage safely
  const originalPrice = parseFloat(product.Discount.replace(/[^\d]/g, ""));
  const discountPercent = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  return (
       <div className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-8">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-gray-900"
              >
                Home
              </button>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={mainImage}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.imageSrc, product.imageSrc, product.imageSrc, product.imageSrc].map(
                (image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(image)}
                    className={`relative aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
                      mainImage === image ? "ring-2 ring-yellow-400" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${idx + 1}`}
                      className="w-full h-full object-center object-cover"
                    />
                  </button>
                )
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600">{product.href}</p>
            </div>

            {/* Price */}
            <div className="flex items-baseline space-x-4">
              <p className="text-3xl font-bold text-blue-600">
                ₹{product.price}
              </p>
              <p className="text-xl text-gray-400 line-through">
                {product.Discount}
              </p>
              <span className="text-green-600 font-medium">
                {discountPercent}% OFF
              </span>
            </div>

            {/* Color & Size */}
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="grid grid-cols-4 gap-4 mt-2">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`border rounded-md py-2 text-sm font-medium ${
                        selectedSize === size
                          ? "border-yellow-400 bg-yellow-50 text-yellow-600"
                          : "border-gray-200 text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center mt-2 space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-orange-500 text-white px-3 py-2 rounded"
                  >
                    -
                  </button>
                  <span className="text-gray-900 px-4 py-2 border rounded-md min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-orange-500 text-white px-3 py-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Add to Bag
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Description & Delivery */}
            <div className="border-t pt-6 mt-6">
              <h3 className="text-lg font-medium text-gray-900">
                Product Description
              </h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <p>{product.href}</p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li>Brand: {product.name}</li>
                  <li>Color: {product.color}</li>
                  <li>Regular Price: {product.Discount}</li>
                  <li>Deal Price: ₹{product.price}</li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900">
                Delivery & Returns
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500">✓</span>
                  <p className="text-sm text-gray-500">
                    Free standard delivery on orders above ₹499
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500">✓</span>
                  <p className="text-sm text-gray-500">
                    Easy 30 days return & exchange available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
