import React, { useState } from "react";
import { useQuery } from "react-query";
import useToken from "./useToken";

function useFetchMe() {
  const [token, setToken] = useToken();
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: "getUser",
    queryFn: async () => {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        
      });
      const data = await response.json();

      console.log(data);
      

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      return data;
    },
  });

  return { data, error, isLoading, refetch };
}

export default useFetchMe;
