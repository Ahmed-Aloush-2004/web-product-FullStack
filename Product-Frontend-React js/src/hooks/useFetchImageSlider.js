import React from "react";
import { useQuery } from "react-query";

function useFetchImageSlider() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: "ImageSlider",
    queryFn: async () => {
      try {
        const response = await fetch("http://localhost:5000/api/imageSlider");
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

export default useFetchImageSlider;
