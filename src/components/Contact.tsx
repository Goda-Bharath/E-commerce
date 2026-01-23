import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cenjq6g",      // ✔ your service ID
        "template_tra2de8",     // ✔ your template ID
        form.current!,        // ✔ FORM ELEMENT
        "P8t_wz_TASMEHDUr8"   // ✔ public key
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Error sending message: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen  flex justify-center items-center px-6 py-20" style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/blue-purple-cloth-with-pattern-dots-it_675204-3378.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
          overflow:"hidden",
        minHeight: "100vh",
      }}
    >
      <div className="w-full max-w-7xl p-[2px] rounded-3xl">
        <div className="rounded-3xl p-10 md:p-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl font-bold text-blue-500 mb-2 text-center ">
                  Contact Me
                </h2>
                <h1 className="text-6xl md:text-7xl font-black leading-none">
                  Get in
                </h1>
                <h1 className="text-6xl md:text-7xl italic font-light -mt-4">
                  Touch
                </h1>
              </div>

              <div className="space-y-6 text-sm">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=godabharath2004@gmail.com&su=Support&body=Hello"
                  className="block cursor-pointer"
                >
                  <div className="space-y-1">
                    <p className="font-semibold opacity-70">Email Support</p>
                    <p className="text-blue-500 hover:underline">
                      godabharath2004@gmail.com
                    </p>
                  </div>
                </a>
                <div>
                  <p className="font-semibold opacity-70">Live Chat</p>
                  <p>
                    Available 24/7 <br /> via in-app chat
                  </p>
                </div>

                <div>
                  <p className="font-semibold opacity-70">Phone Support</p>
                  <p>
                    9346352287 <br />(Mon–Fri)
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
     bottom-90 left-23 z-[1000]
    hover:scale-110 transition-all duration-300
    active:scale-95
  "
                    aria-label="Visit GitHub Profile"
                  >
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.102.823 2.222v3.293c0 .321.192.694.801.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>


                  <a
                    href="https://www.linkedin.com/in/bharathgoda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" bottom-90 left-29 z-[1000]
    hover:scale-110 transition-all duration-300
    active:scale-95"
                    aria-label="Visit LinkedIn Profile"
                  >
                    <svg className="w-8 h-11" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  <a
                    href="https://x.com/Bharath__Goda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    bottom-90 left-29 z-[1000]
    hover:scale-110 transition-all duration-300
    active:scale-95
  "
                    aria-label="Visit Twitter Profile"
                  >
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.65l-5.213-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.82l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm opacity-80">Full Name</label>
                  <div className="flex items-center mt-2 border border-white/20 rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm">
                    <span className="mr-3 text-gray-300">👤</span>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="John David"
                      className="w-full bg-transparent outline-none placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm opacity-80">Email</label>
                  <div className="flex items-center mt-2 border border-white/20 rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm">
                    <span className="mr-3 text-gray-300">✉️</span>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="example@gmail.com"
                      className="w-full bg-transparent outline-none placeholder-gray-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm opacity-80">Subject</label>
                <div className="flex items-center mt-2 border border-white/20 rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Technical issue"
                    className="w-full bg-transparent outline-none placeholder-gray-400"
                    required
                  />
                  <span className="text-gray-300 text-lg">▾</span>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm opacity-80">Message</label>
                <div className="relative mt-2">
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full border border-white/20 rounded-2xl p-4 pr-10 bg-white/10 backdrop-blur-sm outline-none placeholder-gray-400"
                    required
                  ></textarea>
                  <span className="absolute right-4 bottom-4 text-gray-300">
                    ✎
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 font-semibold rounded-full py-3 mt-4 shadow-lg transition-all hover:bg-blue-700"
              >
                Submit ↗
              </button>
            </form>

          </div>
        </div>
        <div className="mt-20  pt-8 text-center text-sm ">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#about" className="  relative text-gray-400 hover:text-white transition
    after:absolute after:left-0 after:bottom-[-4px]
    after:h-[2px] after:w-0
    after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  ">
              About
            </a>
            <a href="#projects" className="  relative text-gray-400 hover:text-white transition
    after:absolute after:left-0 after:bottom-[-4px]
    after:h-[2px] after:w-0
    after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  ">
              Projects
            </a>
            <a href="#contact" className="  relative text-gray-400 hover:text-white transition
    after:absolute after:left-0 after:bottom-[-4px]
    after:h-[2px] after:w-0
    after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  ">
              Contact
            </a>
            <a href="#" className="  relative text-gray-400 hover:text-white transition
    after:absolute after:left-0 after:bottom-[-4px]
    after:h-[2px] after:w-0
    after:bg-white
    after:transition-all after:duration-300
    hover:after:w-full
  ">
              Privacy & Terms
            </a>
          </div>

          <p className=" opacity-200 text-white">
            © 2026 Bharath Goda. All rights reserved.
          </p>
        </div>
      </div>
      
    </section>
  );
}

export default Footer;
