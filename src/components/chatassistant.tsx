import { useState } from "react";


function ShoppingChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const products = [
        {
            id: 1,
            name: "Blue Shirt",
            category: "men",
            price: 799,
            image:
                "https://assets.ajio.com/medias/sys_master/root1/20250808/exCj/6895dade3d468c61ab592144/-473Wx593H-702089591-blue-MODEL.jpg",
        },
        {
            id: 2,
            name: "Black Shirt",
            category: "men",
            price: 899,
            image:
                "https://assets.ajio.com/medias/sys_master/root/20230624/lCmy/6496f4e0a9b42d15c9d3d1db/-1117Wx1400H-465205113-black-MODEL.jpg",
        },
        {
            id: 3,
            name: "Red Dress",
            category: "women",
            price: 1299,
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230706/Rtaj/64a6e596a9b42d15c942138a/-473Wx593H-441200713-red-MODEL.jpg",
        },
        {
            id: 4,
            name: "White Shoes",
            category: "shoes",
            price: 1999,
            image:
                "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250701/ZDQz/6863c6b0b13fc54edde840ca/-473Wx593H-701850277-white-MODEL.jpg",
        },
    ];

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Hi! Search products like 'shirt', 'men', 'dress', or 'shoes'.",
        },
    ]);

    const [foundProducts, setFoundProducts] = useState<any[]>([]);

    const handleSend = () => {
        if (!message.trim()) return;

        const searchText = message.toLowerCase();

        const results = products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchText) ||
                product.category.toLowerCase().includes(searchText)
        );

        let botReply = "No matching products found.";

        if (results.length > 0) {
            botReply = `Found ${results.length} product(s).`;
        }

        setMessages([
            ...messages,
            {
                sender: "user",
                text: message,
            },
            {
                sender: "bot",
                text: botReply,
            },
        ]);

        setFoundProducts(results);
        setMessage("");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-48 right-2 bg-green-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl hover:bg-green-600"
            >
                <i class="fa-brands fa-bots"></i>
            </button>
            {isOpen && (
                <div className="fixed bottom-24 right-5 w-80 bg-white rounded-xl shadow-2xl border overflow-hidden">

                    {/* Header */}
                    <div className="bg-green-500 text-white p-4 flex items-center gap-3">
                        <button onClick={() => setIsOpen(false)}>
                            <i class="fa-solid fa-circle-xmark"></i>
                        </button>

                        <h2 className="font-bold">
                            Shopping Assistant
                        </h2>
                    </div>
                    <div className="h-64 overflow-y-auto p-3 bg-gray-100">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-3 ${
                                    msg.sender === "user"
                                        ? "text-right"
                                        : "text-left"
                                }`}
                            >
                                <span
                                    className={`inline-block px-3 py-2 rounded-lg ${
                                        msg.sender === "user"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-300 text-black"
                                    }`}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                        {foundProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white p-3 rounded-lg shadow mb-3"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded"
                                />

                                <h3 className="font-bold mt-2">
                                    {product.name}
                                </h3>

                                <p className="text-gray-500">
                                    {product.category}
                                </p>

                                <p className="text-green-600 font-semibold">
                                    ₹{product.price}
                                </p>

                                <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                                    View Product
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex border-t">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="flex-1 p-3 outline-none"
                        />

                        <button
                            onClick={handleSend}
                            className="bg-green-500 text-white px-4"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ShoppingChatbot;