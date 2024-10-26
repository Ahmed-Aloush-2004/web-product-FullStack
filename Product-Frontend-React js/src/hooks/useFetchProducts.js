import React from "react";
import { useQuery } from "react-query";

function useFetchProducts(filters = {}) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['products', filters],
    queryFn: async () => {
      try {
        // Convert filters object to query string
        const queryParams = new URLSearchParams(filters).toString();
        const queryFilter = queryParams ? `?${queryParams}` : "";
        
        const response = await fetch(
          `http://localhost:5000/api/products${queryFilter}`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        
        return await response.json();
      } catch (error) {
        console.log("Error fetching products:", error);
        throw new Error(error.message);
      }
    },
  });

  return { data, isLoading, error, refetch };
}

export default useFetchProducts;
