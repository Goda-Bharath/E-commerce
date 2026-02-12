import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Navpage() {
  const [productData, setProductData] = useState<any>({});
  const params = useParams() as { productName?: string };
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    console.log("Product name from URL:", params.productName);
  }, [params.productName]);

  return (
    <div>
      <h3>Nav Page</h3>
      <p>Product Name: {params.productName || "No product name found in URL"}</p>
    </div>
  );
}

export default Navpage;
