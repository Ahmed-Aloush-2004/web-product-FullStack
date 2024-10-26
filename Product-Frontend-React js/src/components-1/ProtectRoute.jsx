import React, { useEffect } from "react";
import useFetchMe from "../hooks/useFetchMe";
import { useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";

function ProtectRoute({ children }) {
  const { data: user, isLoading, error } = useFetchMe();
  const [token] = useToken(); // Token from custom hook
  const navigate = useNavigate();

    // If there's no token or the user is not found (and it's not loading), redirect
    if (!token) {
      navigate("/signup");
    }

  // Optionally, show a loading spinner while fetching user data
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle any fetch errors
  if (error) {
    return <p>Error fetching user data. Please try again.</p>;
  }

  // Render the child components if everything is fine
  return <>{children}</>;
}

export default ProtectRoute;
