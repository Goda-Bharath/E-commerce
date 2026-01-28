import { useState, useEffect } from "react";

const WhatsAppChat = () => {
    const [open, setOpen] = useState(false);
    const phoneNumber = "919346352287";
    const openWhatsApp = () => {
        window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hi! How can I help you?"
            )}`,
            "_blank"
        );
        setOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-3 z-[100] h-12 w-12   hover:scale-110 transition-all duration-300  flex items-center justify-center active:scale-95 cursor-pointer"
                aria-label="Open WhatsApp Chat"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    strokeWidth={1.9}
                    stroke="currentColor"
                    className="w-19 h-19"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 10h8m-8 3h5m8-1c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.2-.95L3 20l1.2-3.6A7.74 7.74 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
                    />
                </svg>
            </button>
            {open && (
                <div className="fixed bottom-35 right-6 w-120 bg-white rounded-2xl shadow-2xl z-[1001] border border-gray-200 animate-in slide-in-from-bottom-2 duration-300 max-h-[500px] cursor-pointer">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                            GB
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900 text-sm">Coustermer Care</p>
                            <p className="text-xs text-green-500 font-medium">online Shopping website</p>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="ml-auto p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200 flex items-center justify-center w-8 h-8"
                            aria-label="Close chat"
                        >
                            ×
                        </button>
                    </div>

                    {/* Message */}
                    <div className="p-5 pb-2">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mt-1">
                                GB
                            </div>
                            <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-[85%]">
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    Hii 👋<br />How can I help you?
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="p-4 border-t border-gray-200">
                        <button
                            onClick={openWhatsApp}
                            className="w-full bg-[#25D366] text-white py-3.5 px-4 rounded-xl font-semibold text-sm hover:bg-[#20ba56] active:scale-[0.98] transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149..." />
                            </svg>
                            <span className="cursor-pointer">Chat with us</span>
                        </button>
                        <p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921..." />
                            </svg>
                            Powered by WhatsApp
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default WhatsAppChat;
