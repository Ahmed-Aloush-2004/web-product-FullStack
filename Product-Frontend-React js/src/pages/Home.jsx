import React, { useState } from "react";
import SideBar from "../components-1/SideBar";

import NavBar from "../components-1/NavBar";
import { Box, Heading } from "@chakra-ui/react";
import HomeProductItem from "../components-1/HomeProductItem";
import HomeProductCarousel from "../components-1/HomeProductCarousel";
import ImageSlider from "../components-1/ImageSlider";
import BrandItem from "../components-1/BrandItem";
import BrandSection from "../components-1/BrandSection";
import Footer from "../components-1/Footer";
import { useQuery } from "react-query";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleNavbar() {
    setIsOpen(!isOpen);
  }

  const { data, isLoading, error } = useQuery({
    queryKey: "ImageSlider",
    queryFn: async () => {
      try {
        const response = await fetch("http://localhost:5000/api/imageSlider");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },
    // staleTime: 1000 * 60 * 5, // 5 minutes
    // refetchOnWindowFocus: false,
    // refetchInterval: 1000 * 60 * 15 // 15 minutes
  });

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"50px"}
      background={"teal.50"}
    >
      <NavBar handleToggleNavbar={handleToggleNavbar} />
      <Box
        width="85%"
        mx={"auto"}
        display={"flex"}
        flexDirection={"column"}
        gap={"50px"}
        flexWrap={"wrap"}
      >
        <Heading
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          textAlign={"center"}
        >
          {"“Spend less, Smile more.”"}
        </Heading>
        {console.log(data)
        }
        <ImageSlider images={data} isLoading={isLoading} error={error} />
        <HomeProductCarousel
          title={"New Brand"}
          products={[...Array(5).map((_, index) => <BrandItem key={index} />)]}
          isDiscount={false}
        />
        <HomeProductCarousel
          title={"Offers for you"}
          products={[]}
          isDiscount={true}
        />
        <HomeProductCarousel
          title={"The Most Selling Products"}
          products={[]}
        />
        <BrandSection />
      </Box>
      <Footer />

      <SideBar isOpen={isOpen} handleToggleNavbar={handleToggleNavbar} />
    </Box>
  );
}

export default Home;
