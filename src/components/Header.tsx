import { Select } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const words = ["MEN WEAR", "WOMEN WEAR", "KIDS WEAR", "BUEATY",];


    return (
        <header className="sticky relative top-0 z-50 bg-white shadow-lg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-cyan-400/40 p-2">
            <nav className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
                <div className="relative flex h-19 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            aria-controls="mobile-menu"
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
                                 <Link to="coustermer-care" className="px-3 py-2 text-base font-medium text-black hover:bg-cyan-900/90 hover:text-white rounded-md">
                                    Coustermer Care
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-md font-extralight text-gray-400">




                            <div className="relative w-full md:w-72">
                                {/* Input */}
                                <input
                                    placeholder="Search for.........."
                                    className="border border-orange-600 rounded px-4 py-1 h-6 text-black w-full"
                                />

                                {/* Animated words inside input */}
                                <div className="absolut left-60">     <ul className="pointer-events-none absolute left-30 top-5 -translate-y-1/2 h-9 w-32  ">
                                    {words.map((word, index) => (
                                        <li
                                            key={index}
                                            className="absolute left-0 top-0 animate-search-items text-gray-500"
                                            style={{
                                                animationDelay: `${index * 2}s`,
                                                animationDuration: `${words.length * 2}s`,
                                            }}
                                        >
                                            {word}
                                        </li>
                                    ))}
                                </ul></div>

                            </div>
                            {/* Tailwind custom animation inside same file */}
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
                        <select className="border rounded border-orange-600 m-5 cursor-pointer">
                            <option>Telugu 🏳‍🌈</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Franchies</option>
                        </select>
                        <button className="relative rounded-full m-2 p-3 text-black cursor-pointer  border rounded border-orange-600">
                            <i className="fa-solid fa-user"></i>
                        </button>
                        <button className="relative rounded-full p-3 m-2 text-black border cursor-pointer rounded border-orange-600 ">
                            <i className="fa-solid fa-cart-arrow-down"></i>
                        </button>
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