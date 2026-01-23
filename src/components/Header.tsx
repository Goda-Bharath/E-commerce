import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-lg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-cyan-400/40 p-2">
            <nav className="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
                <div className="relative flex h-19 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
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
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="relative rounded-full p-1 text-cyan-300 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                            <span className="absolute -inset-1.5"></span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
                                <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a3 3 0 1 1-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="relative ml-3">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                                alt=""
                                className="h-8 w-8 rounded-full bg-cyan-800 outline outline-1 outline-cyan-400/40"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
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