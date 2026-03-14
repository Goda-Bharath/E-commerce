import { Select } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [opencart, setOpencart] = useState(false);
    const [closeuser, setCloseuser] = useState(false);
    const [selectedlocation, setselectedlocation] = useState(false);
    const [opensearch, setOpensearch] = useState(false);

    const [search, setSearch] = useState("");

    const products = [
        { id: 1, name: "Men Jeans Pants", category: "Men" },
        { id: 2, name: "Men Short Pants", category: "Men" },
        { id: 3, name: "Women Jeans Pants", category: "Women" },
        { id: 4, name: "Women Short Pants", category: "Women" },
        { id: 5, name: "Kids Cotton Shirt", category: "Kids" },
        { id: 6, name: "Kids Shorts", category: "Kids" },
        { id: 7, name: "Beauty Face Cream", category: "Beauty" },
        { id: 8, name: "Beauty Skin Care", category: "Beauty" },
    ];

    const words = [
        "Search pants...",
        "Search jeans...",
        "Search beauty...",
        "Search kids clothes..."
    ];

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <header className="sticky relative top-0 z-50 bg-white shadow-lg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-cyan-400/40 p-2">
            <nav className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
                <div className="relative flex h-19 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            aria-controls="mobile-menu "
                            aria-expanded={mobileOpen}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-cyan-300 hover:bg-cyan-700/30 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            {!mobileOpen ? (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
                                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link to="/">
                                <h3 className="bg-black text-white hover:text-yellow-500 rounded w-66px">Refrom</h3>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-6">
                                <Link to="/" className="px-3 py-2 text-base font-medium text-black hover:bg-cyan-900/90 hover:text-white rounded-md">
                                    ALL PRODUCTS
                                </Link>
                                <Link to="men-dress" className="px-3 py-2 text-base font-medium text-black hover:bg-cyan-900/90 hover:text-white rounded-md">
                                    Men
                                </Link>
                                <Link to="women-saress-dress" className="px-3 py-2 text-base font-medium text-black hover:bg-cyan-900/90 hover:text-white rounded-md">
                                    Women
                                </Link>
                                <Link to="kids-dress" className="px-3 py-2 text-base font-medium text-black hover:bg-cyan-900/90 hover:text-white rounded-md">
                                    Kids
                                </Link>
                                <Link to="bueaty-products" className="px-3 py-2 text-base font-medium text-black hover:bg-cyan-900/90 hover:text-white rounded-md">
                                    Beauty
                                </Link>
                                <Link to="customer-care" className="px-3 py-2 text-base font-medium text-black hover:bg-cyan-900/90 hover:text-white rounded-md">
                                    Customer Care
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-md font-extralight text-gray-400">
                            <div className="relative w-full md:w-72">
                            </div>
                            <style>
                                {`
          @keyframes searchItems {
            0% { opacity: 0; transform: translateY(10px); }
            5% { opacity: 1; transform: translateY(0px); }
            20% { opacity: 1; transform: translateY(0px); }
            25% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 0; }
          }
          .animate-search-items {
            animation-name: searchItems;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `}
                            </style>
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => setOpensearch(!opensearch)}
                                className="text-2xl text-black cursor-pointer absolute top-4 right-70"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>

                            {opensearch && (
                                <div
                                    className="
          absolute right-107 top-21
          w-80 p-4
          bg-white/80 backdrop-blur-lg
          border border-orange-200
          rounded-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          transition-all duration-300
        "
                                >
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="
              w-full
              border border-orange-400
              rounded-lg
              px-4 py-2
              text-black
              outline-none
              focus:ring-2 focus:ring-orange-400
            "
                                        />
                                        {!search && (
                                            <ul className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-6 overflow-hidden">
                                                {words.map((word, index) => (
                                                    <li
                                                        key={index}
                                                        className="absolute left-0 animate-search-items text-gray-500"
                                                        style={{
                                                            animationDelay: `${index * 2}s`,
                                                            animationDuration: `${words.length * 2}s`,
                                                        }}
                                                    >
                                                        {word}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </div>
                                    {search && (
                                        <div className="mt-3 bg-white rounded-lg shadow-lg max-h-40 overflow-y-auto">

                                            {filteredProducts.length > 0 ? (
                                                filteredProducts.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="px-3 py-2 hover:bg-orange-100 cursor-pointer"
                                                    >
                                                        {item.name}
                                                        <span className="text-gray-400 text-sm ml-2">
                                                            ({item.category})
                                                        </span>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="p-2 text-gray-500">No products found</p>
                                            )}

                                        </div>
                                    )}

                                </div>
                            )}
                        </div>
                        <button onClick={() => setselectedlocation(!selectedlocation)} className=" m-5 cursor-pointer">
                            <option className="hover:text-blue-600">Select Location ▼ </option>
                            {selectedlocation && (<div className="
            absolute top-24 fixed right-79 
            w-130 bg-white rounded-2xl shadow-2xl border
            transition-transform duration-300
            origin-bottom-right
          ">
                                <div className="flex flex-col gap-4 p-4 h-[400px]">
                                    <div className="flex justify-between items-center">
                                        <h3>Select the Location</h3>

                                        <button
                                            onClick={() => setselectedlocation(false)}
                                            className="text-gray-400 hover:text-gray-600 cursor-pointer"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    <iframe
                                        src="https://www.google.com/maps?q=India&output=embed"
                                        width="100%"
                                        height="500"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>

                            </div>)}
                        </button>

                        <button onClick={() => setOpencart(!opencart)}
                            className="relative rounded-full p-3 m-2 text-black border cursor-pointer rounded border-orange-600 ">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                        </button>
                        {opencart && (
                            <div className="
            absolute top-24 fixed right-79 
            origin-bottom-right
          ">
                                <div className="flex items-center justify-between p-4 h-44">
                                    <button
                                        onClick={() => setOpencart(false)}
                                    >
                                    </button>
                                    {opencart && (
                                        <div
                                            className="fixed inset-0 bg-gray-500/75 z-40"
                                            onClick={() => setOpencart(false)}
                                        />
                                    )}
                                    <div
                                        className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-xl transform transition-transform duration-300
                                        ${opencart ? "translate-x-0" : "translate-x-full"}`}
                                    >
                                        <div className="flex items-center justify-between p-4 border-b">
                                            <h2 className="text-lg font-semibold">Shopping Cart</h2>
                                            <button
                                                onClick={() => setOpencart(false)}
                                                className="text-gray-400 hover:text-gray-600 text-xl"
                                            >
                                                ×
                                            </button>
                                        </div>
                                        <div className="p-4 space-y-6 overflow-y-auto h-full">
                                            <div className="flex gap-4">
                                                <img
                                                    src="https://tailwindcss.com/plus-assets/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                                    className="w-20 h-20 rounded border object-cover"
                                                    alt=""
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-medium">Throwback Hip Bag</h3>
                                                    <p className="text-sm text-gray-500">Qty 1</p>
                                                    <p className="font-semibold">$90.00</p>
                                                </div>
                                            </div>

                                            <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
                                                Checkout
                                            </button>

                                            <button
                                                onClick={() => setOpencart(false)}
                                                className="w-full text-indigo-600 font-medium"
                                            >
                                                Continue Shopping →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => setCloseuser(!closeuser)}
                            className="relative rounded-full p-3 m-2 text-black border cursor-pointer rounded border-orange-600 "
                        >
                            <i className="fa-solid fa-user text-lg"></i>
                        </button>
                        {closeuser && (

                            <div
                                className="
            absolute top-24 fixed right-79 
            w-130 bg-white rounded-2xl shadow-2xl border
            transition-transform duration-300
            origin-bottom-right
          ">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <h3 className="font-semibold text-lg">Login / Sign Up</h3>
                                    <button
                                        onClick={() => setCloseuser(false)}
                                        className="text-gray-400 hover:text-gray-600 text-xl  cursor-pointer"
                                    >
                                        ×
                                    </button>
                                </div>

                                <div className="p-4 space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Mobile number or Email"
                                        className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-500 outline-none"
                                    />

                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full border rounded-lg px-4 py-2 focus:ring-1 focus:ring-orange-500 outline-none"
                                    />

                                    <button className="w-full bg-orange-500  cursor-pointer hover:bg-orange-600 text-white py-2 rounded-lg font-medium">
                                        Continue
                                    </button>

                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <div className="flex-1 h-px bg-gray-200"></div>
                                        OR
                                        <div className="flex-1 h-px bg-gray-200"></div>
                                    </div>

                                    <button className="w-full border border-orange-500  cursor-pointer text-orange-500 py-2 rounded-lg hover:bg-orange-50">
                                        Login with OTP
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        By continuing, you agree to our{" "}
                                        <span className="text-orange-600 hover:text-black cursor-pointer">
                                            Terms & Conditions
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {mobileOpen && (
                    <div className="sm:hidden mt-2 space-y-2">
                        <Link to="/" className="block rounded-md px-3 py-2 text-base font-medium text-cyan-700 hover:bg-cyan-600/40 hover:text-white">
                            ALL PRODUCTS
                        </Link>
                        <Link to="men" className="block rounded-md px-3 py-2 text-base font-medium text-cyan-700 hover:bg-cyan-600/40 hover:text-white">
                            MEN
                        </Link>
                        <Link to="women" className="block rounded-md px-3 py-2 text-base font-medium text-cyan-700 hover:bg-cyan-600/40 hover:text-white">
                            WOMEN
                        </Link>
                        <Link to="kids" className="block rounded-md px-3 py-2 text-base font-medium text-cyan-700 hover:bg-cyan-600/40 hover:text-white">
                            KIDS
                        </Link>
                        <Link to="beauty" className="block rounded-md px-3 py-2 text-base font-medium text-cyan-700 hover:bg-cyan-600/40 hover:text-white">
                            BEAUTY
                        </Link>
                    </div>
                )}
            </nav>
        </header>

    );
}
export default Header;