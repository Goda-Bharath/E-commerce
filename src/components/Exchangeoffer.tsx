import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FormData {
  address: string;
  date: string;
  phone: string;
  quantity: number;
}

const initialFormData: FormData = {
  address: "",
  date: "",
  phone: "",
  quantity: 1,
};

function ExchangeOffer() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));

    setMessage("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (formData.quantity < 1) {
      setMessage("Quantity must be at least 1.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      console.log("Exchange Request:", formData);

      await new Promise((resolve) => setTimeout(resolve, 800));

      setMessage(
        "✅ Exchange request submitted successfully! Your request is under review."
      );

      setFormData(initialFormData);
    } catch {
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950 px-4 py-10 flex items-center justify-center">

      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-xl">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8">

          <div className="text-center mb-8">

            <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl shadow-lg">
              ♻️
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Smart Exchange
            </h1>

            <p className="text-gray-300 mt-2">
              Exchange your old clothes and save on your next purchase.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                📍 Pickup Address
              </label>

              <textarea
                id="address"
                name="address"
                rows={3}
                placeholder="Enter your complete pickup address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>


            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                👕 Number of Dresses
              </label>

              <input
                id="quantity"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min={1}
                max={50}
                required
                className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                📅 Preferred Pickup Date
              </label>

              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                required
                className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                📱 Contact Number
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter 10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                className="w-full rounded-xl bg-black/30 border border-white/20 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {message && (
              <div
                className={`rounded-xl px-4 py-3 text-sm text-center ${
                  message.startsWith("✅")
                    ? "bg-green-500/10 text-green-300 border border-green-500/20"
                    : "bg-red-500/10 text-red-300 border border-red-500/20"
                }`}
              >
                {message}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-white font-semibold shadow-lg transition hover:scale-[1.02] hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting Request..." : "Submit Exchange Request"}
            </button>
          </form>
          <div className="mt-6 rounded-xl bg-cyan-500/10 border border-cyan-400/20 p-4">
            <p className="text-sm text-cyan-100 text-center">
              🎁 After verification, your ₹500 discount coupon will be added
              to your wallet.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ExchangeOffer;