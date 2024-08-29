import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  console.log(searchParams.get("keyword"), searchParams.get("instock"));
  console.log(location);
  return <div>ProductList</div>;
};
