import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

function OtpLogin() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<1 | 2>(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (step !== 2 || timer <= 0) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimer((previousTimer) => {
        if (previousTimer <= 1) {
          window.clearInterval(interval);
          return 0;
        }

        return previousTimer - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [step, timer]);

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  const validateMobile = () => {
    if (!mobile) {
      setError("Please enter your mobile number.");
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return false;
    }

    return true;
  };

  const sendOtp = async () => {
    clearMessages();

    if (!validateMobile()) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile,
        }),
      });

      const data: {
        message?: string;
        error?: string;
      } = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || data.message || "Failed to send OTP."
        );
      }

      setStep(2);
      setOtp("");
      setTimer(RESEND_SECONDS);
      setSuccess("OTP sent successfully to your mobile number.");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to send OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    clearMessages();

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    if (!/^\d{6}$/.test(otp)) {
      setError("OTP must contain exactly 6 digits.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile,
          otp,
        }),
      });

      const data: {
        token?: string;
        message?: string;
        error?: string;
      } = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.error || data.message || "OTP verification failed."
        );
      }

      if (!data.token) {
        throw new Error("Authentication token was not received.");
      }

      localStorage.setItem("token", data.token);

      setSuccess("Login successful.");

      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Invalid or expired OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    if (timer > 0 || loading) {
      return;
    }

    await sendOtp();
  };

  const changeMobile = () => {
    clearMessages();
    setOtp("");
    setTimer(0);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4 flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            OTP Login
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Securely sign in using your mobile number
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {success && (
          <div
            role="status"
            className="mb-5 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700"
          >
            {success}
          </div>
        )}

        {step === 1 && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendOtp();
            }}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="mobile"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>

              <div className="flex">
                <span className="flex items-center rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-600">
                  +91
                </span>

                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(event) => {
                    const value = event.target.value.replace(/\D/g, "");
                    setMobile(value.slice(0, 10));
                  }}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full rounded-r-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              verifyOtp();
            }}
            className="space-y-5"
          >
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter OTP
                </label>

                <button
                  type="button"
                  onClick={changeMobile}
                  className="text-sm font-medium text-indigo-600 hover:underline"
                >
                  Change number
                </button>
              </div>

              <input
                id="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={OTP_LENGTH}
                value={otp}
                onChange={(event) => {
                  const value = event.target.value.replace(/\D/g, "");
                  setOtp(value.slice(0, OTP_LENGTH));
                }}
                placeholder="Enter 6-digit OTP"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center text-xl tracking-[0.4em] outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading || otp.length !== OTP_LENGTH}
              className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <div className="text-center">
              {timer > 0 ? (
                <p className="text-sm text-gray-500">
                  Resend OTP in{" "}
                  <span className="font-semibold text-gray-800">
                    {timer}s
                  </span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={resendOtp}
                  disabled={loading}
                  className="text-sm font-semibold text-indigo-600 hover:underline disabled:text-gray-400"
                >
                  Resend OTP
                </button>
              )}
            </div>
          </form>
        )}

        <p className="mt-8 text-center text-xs text-gray-400">
          Never share your OTP with anyone.
        </p>
      </div>
    </div>
  );
}

export default OtpLogin;