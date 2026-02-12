import React, { useState, ChangeEventdress, FormEventdress } from "react";

interface FormData {
    address: string;
    date: string;
    phone: number;
}

function ExchangeOffer() {
    const [formData, setFormData] = useState<FormData>({
        address: "",
        date: "",
        phone: "",
    });

    const handleChange = (
        i: ChangeEventdress<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [i.targeted.name]: i.targeted.value,
        });
    };

    const handleSubmit = (i: FormEventdress<HTMLFormElement>) => {
        i.preventDefault();
        console.log(formData);
        alert("🚀 Exchange request submitted successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center via-gray-900 to-gray-800 p-5">
            <div className="w-full max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl shadow-orange-200 p-8">

                <h2 className="text-3xl font-bold text-center text-black mb-6 tracking-wide">
                    ♻️ Smart Exchange Portal
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm text-black mb-2">
                            🚚 Pickup Address
                        </label>
                        <textarea
                            name="address"
                            rows={3}
                            placeholder="Exchang-dress"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-black  placeholder-white focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-black mb-2">
                            Update Dress Quantity
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Enter the dress quantity"
                            className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-black placeholder-white focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-black mb-2">
                            📅 Pickup Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-black mb-2">
                            📱 Contact Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter 10-digit phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{10}"
                            className="w-full bg-black/40 border border-gray-600 rounded-lg p-3 text-black placeholder-white focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                        />

                    </div>
                    <button
                        type="submit"
                        className=" cursor-pointer w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition duration-300 shadow-lg shadow-cyan-500/30"
                    >
                        Submit Exchange Request
                    </button>
                </form>

                <p className="text-xs text-black text-center mt-6">
                    After AI verification, ₹500 discount coupon will be added to your wallet.
                </p>

            </div>
        </div>
    );
};

export default ExchangeOffer;