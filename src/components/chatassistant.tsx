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
        },
        {
            id: 2,
            name: "Black Shirt",
            category: "men",
            price: 899,
        },
        {
            id: 3,
            name: "Red Dress",
            category: "women",
            price: 1299,
        },
        {
            id: 4,
            name: "White Shoes",
            category: "shoes",
            price: 1999,
        },
    ];

    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "👋 Hi! Ask me about products.",
        },
    ]);

    const handleSend = () => {
        if (!message.trim()) return;

        const userMessage = {
            sender: "user",
            text: message,
        };

        let botReply = "No matching products found.";

        const searchText = message.toLowerCase();

        const results = products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchText) ||
                product.category.toLowerCase().includes(searchText)
        );

        if (results.length > 0) {
            botReply =
                "Products Found:\n" +
                results
                    .map(
                        (product) =>
                            `${product.name} - ₹${product.price}`
                    )
                    .join("\n");
        }

        setMessages([
            ...messages,
            userMessage,
            {
                sender: "bot",
                text: botReply,
            },
        ]);

        setMessage("");
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-5 right-5 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg text-2xl hover:bg-green-600"
            >
                <i class="fa-brands fa-bots"></i>
            </button>
            {isOpen && (
                <div className="fixed bottom-24 right-5 w-80 bg-white rounded-lg shadow-2xl border overflow-hidden">
                    <div className="bg-green-500 text-white p-4 font-bold">
                        Shopping Assistant
                    </div>
                    <div className="h-80 overflow-y-auto p-3 bg-gray-50">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-3 ${msg.sender === "user"
                                        ? "text-right"
                                        : "text-left"
                                    }`}
                            >
                                <span
                                    className={`inline-block px-3 py-2 rounded-lg ${msg.sender === "user"
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                        }`}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex border-t">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
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