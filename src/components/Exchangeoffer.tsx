import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  address: string;
  date: string;
  phone: string;
  quantity: number;
}

function ExchangeOffer() {
  const [formData, setFormData] = useState<FormData>({
    address: "",
    date: "",
    phone: "",
    quantity: 0,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("🚀 Exchange request submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-gray-900">
      <div className="w-full max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          ♻️ Smart Exchange Portal
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Address */}
          <div>
            <label className="block text-sm text-white mb-2">
              🚚 Pickup Address
            </label>
            <textarea
              name="address"
              rows={3}
              placeholder="Enter pickup address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm text-white mb-2">
              👕 Dress Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min={1}
              required
              className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm text-white mb-2">
              📅 Pickup Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-white mb-2">
              📱 Contact Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter 10-digit number"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg"
          >
            Submit Exchange Request
          </button>
        </form>

        <p className="text-xs text-gray-300 text-center mt-6">
          After AI verification, ₹500 discount coupon will be added to your wallet.
        </p>
      </div>
    </div>
  );
}

export default ExchangeOffer;