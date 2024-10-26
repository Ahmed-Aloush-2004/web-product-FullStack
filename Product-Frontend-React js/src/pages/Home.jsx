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
import useToken from "../hooks/useToken";
import useFetchBrands from "../hooks/useFetchBrands";
import useFetchProducts from "../hooks/useFetchProducts";
import useFetchImageSlider from "../hooks/useFetchImageSlider";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setoTken] = useToken();
  function handleToggleNavbar() {
    setIsOpen(!isOpen);
  }

  const {
    data: imagesSlider,
    isLoading: LoadingImagesSlider,
    error: ImagesSliderError,
  } = useFetchImageSlider();

  const {
    data: productsOffer,
    isLoading: productsOfferLoading,
    error: productsOfferError,
  } = useFetchProducts({ filterType: "offers"});

  const {
    data: TheMostSellingproducts,
    isLoading: TheMostSellingproductsLoading,
    error: TheMostSellingproductsError,
  } = useFetchProducts({ filterType: "TheMostSelling"});

  const {
    data: TheNewestproducts,
    isLoading: TheNewestproductsLoading,
    error: TheNewestproductsError,
  } = useFetchProducts({ filterType: "TheNewest"});

  const {
    data: brands,
    isLoading: LoadingBrand,
    error: BrandError,
  } = useFetchBrands();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"50px"}
      background={"teal.50"}
    >
      {/* <NavBar handleToggleNavbar={handleToggleNavbar} /> */}
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
        <ImageSlider
          images={imagesSlider?.data}
          isLoading={LoadingImagesSlider}
          error={ImagesSliderError}
        />
        <HomeProductCarousel
          title={"New Brand"}
          products={brands}
          ItemToRender={BrandItem}
        />
        <HomeProductCarousel
          title={"Offers for you"}
          products={productsOffer}
          ItemToRender={HomeProductItem}
        />
        <HomeProductCarousel
          title={"The Most Selling Products"}
          products={TheMostSellingproducts}
          ItemToRender={HomeProductItem}
        />

        <HomeProductCarousel
          title={"The Newest Products.We Add them to Our Store."}
          products={TheNewestproducts}
          ItemToRender={HomeProductItem}
        />
        <BrandSection />
      </Box>
      <Footer />

      <SideBar isOpen={isOpen} handleToggleNavbar={handleToggleNavbar} />
    </Box>
  );
}

export default Home;
