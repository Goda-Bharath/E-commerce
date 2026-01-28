import { Link } from "react-router-dom";

function Coustmercare() {
  return (
    <div>
      <Link
        to="/customer-care"
        className="block text-black font-semibold"
      >
        Customer Care
      </Link>

      <h3>one call for support</h3>
    </div>
  );
}

export default Coustmercare;
