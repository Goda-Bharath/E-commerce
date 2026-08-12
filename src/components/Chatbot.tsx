import { useState } from "react";
import { Link } from "react-router-dom";

const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "919346352287";

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I need help with my order. Can you please assist me?"
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );

    setOpen(false);
  };

  const callNow = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 right-4 z-[100] flex flex-col items-end gap-3">
        {/* Call Button */}
        <div className="group relative">
          <button
            type="button"
            onClick={callNow}
            aria-label="Call customer care"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
          >
            📞
          </button>

          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            Call Customer Care
          </span>
        </div>

        {/* Exchange Dress Button */}
        <div className="group relative">
          <Link
            to="/exchange-dress"
            aria-label="Exchange your old dress"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-2xl text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            ♻️
          </Link>

          <div className="pointer-events-none absolute right-16 top-1/2 w-48 -translate-y-1/2 rounded-lg bg-gray-900 px-3 py-2 text-center text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            Give old dress & Save ₹500
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="group relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
            aria-expanded={open}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-green-600"
          >
            {open ? "✕" : "💬"}
          </button>

          {!open && (
            <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
              Chat with us on WhatsApp
            </span>
          )}
        </div>
      </div>

      {/* WhatsApp Chat Popup */}
      {open && (
        <div className="fixed bottom-6 right-20 z-[1001] w-[320px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:right-24">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-green-600 shadow">
              GB
            </div>

            <div>
              <p className="font-semibold">Customer Care</p>
              <p className="text-xs text-green-100">
                Usually replies instantly
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="ml-auto rounded-full p-1 text-xl transition hover:bg-white/20"
            >
              ✕
            </button>
          </div>

          {/* Chat Content */}
          <div className="bg-gray-50 p-4">
            <div className="max-w-[85%] rounded-xl rounded-tl-none bg-white p-3 text-sm text-gray-700 shadow-sm">
              <p>👋 Hi! How can I help you?</p>

              <p className="mt-2 text-xs text-gray-400">
                Customer Care • Now
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-gray-100 bg-white p-4">
            <button
              type="button"
              onClick={openWhatsApp}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-600 hover:shadow-md"
            >
              <span className="text-lg">💬</span>
              Chat on WhatsApp
            </button>

            <button
              type="button"
              onClick={callNow}
              className="mt-2 w-full rounded-xl border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              📞 Call Customer Care
            </button>

            <p className="mt-3 text-center text-[11px] text-gray-400">
              You will be redirected to WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;