import { useEffect, useState } from "react";

function OtpLogin() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval:any;

    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [step, timer]);

  const sendOtp = async () => {
    setError("");

    if (!mobile) {
      setError("Please enter your mobile number.");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mobile,
        }),
      });

      if (!res.ok) {
        throw new Error();
      }

      alert("OTP Sent Successfully");

      setStep(2);
      setTimer(30);
    } catch {
      setError("Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setError("");

    if (!otp) {
      setError("Please enter OTP.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mobile,
          otp,
        }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        alert("Login Successful");

        // Navigate here if needed
        // navigate("/dashboard");
      } else {
        setError("Invalid OTP");
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = () => {
    sendOtp();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          OTP Login
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Secure Login using One Time Password
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 rounded-lg p-3 mb-4 text-sm">
            {error}
          </div>
        )}

        {step === 1 && (
          <>
            <label className="block text-sm font-medium mb-2">
              Mobile Number
            </label>

            <input
              type="text"
              maxLength="10"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className={`mt-6 w-full rounded-xl py-3 font-semibold text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label className="block text-sm font-medium mb-2">
              Enter OTP
            </label>

            <input
              type="text"
              maxLength="6"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-green-500 outline-none"
            />

            <button
              onClick={verifyOtp}
              disabled={loading}
              className={`mt-6 w-full rounded-xl py-3 font-semibold text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <div className="mt-6 text-center">

              {timer > 0 ? (
                <p className="text-gray-500">
                  Resend OTP in <span className="font-bold">{timer}s</span>
                </p>
              ) : (
                <button
                  onClick={resendOtp}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Resend OTP
                </button>
              )}

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default OtpLogin;