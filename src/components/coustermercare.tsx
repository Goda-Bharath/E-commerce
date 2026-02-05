import { Link } from "react-router-dom";


function Coustmercare() {

  return (

    <div className="p-7 grid grid-cols-2 gap-8 mx-auto max-w-7xl px-4 py-12">
      <Link
        to="/customer-care"
      >
        <div className=" contact-container  text-black font-semibold shadow-md h-100 w-150 p-5 border  rounded hover:bg-orange-500 bg-orange-400  "><div className=" shadow-md border h-90 bg-white">

          <div className="max-w-4xl mx-auto px-4 py-10 font-sans">

  {/* Header */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-2">
      Contact Us
    </h2>
    <p className="text-gray-500">
      We’d love to hear from you.
    </p>
  </div>

  {/* Contact Details */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full  ">

    <div className="bg-gray-50 p-5 rounded-lg shadow-sm w-43 ">
      <h4 className="text-lg font-semibold text-gray-800 mb-1">
        Email
      </h4>
      <p className="text-gray-600 text-sm hover:text-blue-500"><Link to={`/emailcontact`}>support@example.com</Link></p>
    </div>

    <div className="bg-gray-50 p-5 rounded-lg shadow-sm text-center w-43">
      <h4 className="text-lg font-semibold text-gray-800 mb-1">
        Phone
      </h4>
      <p className="text-gray-600 w-40 text-sm hover:text-blue-500">+91 98765 43210</p>
    </div>

    <div className="bg-gray-50 p-5 w-40 rounded-lg shadow-sm text-center w-40">
      <h4 className="text-lg font-semibold text-gray-800 mb-1">
        Location
      </h4>
      <p className="text-gray-600 text-sm hover:text-blue-500">Hyderabad, India</p>
    </div>
  </div>
</div>
        </div></div>

      </Link>
      <div>
        <div className="block text-black font-semibold shadow-md h-100 w-150 p-5 border  hover:bg-orange-500 rounded bg-orange-400 ">
          <img src="https://www.kapture.cx/blog/wp-content/uploads/2022/05/positive-language-in-customer-service.jpg" className="h-90" />
        </div>
      </div>
    </div>

  );
}

export default Coustmercare;
