import { Box, Image, Text, IconButton, Spinner, Alert } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ImageSlider({ images = [], isLoading, error }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="400px"
      >
        <Spinner size="xl" color="blue.500" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4}>
        <Alert status="error" borderRadius="md">
          Error loading images. Please try again later.
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      width="100%"
      maxWidth={"1200px"}
      mx={"auto"}
      height={{ sm: "400px", md: "400px", lg: "500px" }}
      overflow="hidden"
      position="relative"
      boxShadow="lg"
      borderRadius="lg"
      _hover={{ boxShadow: "2xl" }} // Enhance shadow on hover
    >
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        customTransition="transform 0.7s ease-in-out"
        transitionDuration={700}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customDot={<CustomDot />}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        { images.length > 0 ? (
          images.map((image, index) => (
            <Box key={index} position="relative">
              {console.log("image", image)}
              <Image
                src={image.image_url}
                alt={`Slide ${index}`}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.4s ease"
                borderRadius="lg"
              />
              <Box
                position="absolute"
                top="75%"
                left="50%"
                transform={"translate(-50%, -50%)"}
                zIndex={2}
                bgGradient="linear(to-r, blackAlpha.700, transparent)"
                color="white"
                p={4}
                borderRadius="md"
                maxWidth="100%"
                transition="opacity 0.3s ease"
                _hover={{ opacity: 1 }}
              >
                <Text
                  fontSize={{ base: "smaller", md: "md", lg: "lg" }}
                  whiteSpace={"nowrap"}
                  fontWeight="bold"
                  color={"white"}
                >
                  {image?.title}
                </Text>
              </Box>
            </Box>
          ))
        ) : (
          <Image
            src={`../../public/bc051633-c226-45e6-a92f-6538acc3e7c2.webp`}
            alt="default"
            w="100%"
            h="100%"
            objectFit="cover"
            transition="transform 0.4s ease"
            borderRadius="lg"
          />
        )}
      </Carousel>
    </Box>
  );
}

function CustomDot({ onClick, ...rest }) {
  const { active } = rest;
  return (
    <Box
      as="button"
      onClick={onClick}
      w="12px"
      h="12px"
      bg={active ? "blue.500" : "gray.300"}
      borderRadius="50%"
      mx="5px"
      transition="background 0.3s ease"
      _hover={{ bg: "blue.400" }}
    />
  );
}

function CustomLeftArrow({ onClick }) {
  return (
    <IconButton
      aria-label="Previous"
      icon={<FaArrowLeft />}
      onClick={onClick}
      position="absolute"
      left="10px"
      top="50%"
      transform="translateY(-50%)"
      bg="whiteAlpha.700"
      _hover={{ bg: "white" }}
      borderRadius="full"
      boxShadow="md"
    />
  );
}

function CustomRightArrow({ onClick }) {
  return (
    <IconButton
      aria-label="Next"
      icon={<FaArrowRight />}
      onClick={onClick}
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      bg="whiteAlpha.700"
      _hover={{ bg: "white" }}
      borderRadius="full"
      boxShadow="md"
    />
  );
}

export default ImageSlider;

// // import { Box, Image } from "@chakra-ui/react";
// // import React from "react";
// // import Carousel from "react-multi-carousel";

// // function ImageSlider() {
// //   const responsive = {
// //     superLargeDesktop: {
// //       // for screens >= 1440px
// //       breakpoint: { max: 4000, min: 1440 },
// //       items: 1,
// //     },
// //     desktop: {
// //       // for screens between 1024px and 1440px
// //       breakpoint: { max: 1440, min: 1024 },
// //       items: 1,
// //     },
// //     tablet: {
// //       // for screens between 768px and 1024px
// //       breakpoint: { max: 1024, min: 768 },
// //       items: 1,
// //     },
// //     mobile: {
// //       // for screens < 768px
// //       breakpoint: { max: 768, min: 0 },
// //       items: 1,
// //     },
// //   };
// //   return (
// //     <Box width={"100%"} height={"40px"}>
// //       <Carousel
// //         responsive={responsive}
// //         infinite={true}
// //         autoPlay={true}
// //         autoPlaySpeed={3000}
// //         keyBoardControl={true}
// //         showDots={true}
// //         customTransition="all 0.5s"
// //         transitionDuration={500}
// //         containerClass="carousel-container"
// //         removeArrowOnDeviceType={["tablet", "mobile"]}
// //         dotListClass="custom-dot-list-style"
// //         itemClass="carousel-item-padding-40-px"
// //       >
// //         <Image
// //           src="https://picsum.photos/200/300"
// //           alt="product"
// //           w="100%"
// //           height={"100%"}
// //           objectFit={"cover"}
// //           // _hover={{ transform: "scale(1.2)" }}
// //           // transition={"all 0.4s ease"}
// //         />
// //       </Carousel>
// //     </Box>
// //   );
// // }

// // export default ImageSlider;

// import { Box, Image, Text, IconButton } from "@chakra-ui/react";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// function ImageSlider({ images, isLoading, error }) {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 1440 },
//       items: 1,
//     },
//     desktop: {
//       breakpoint: { max: 1440, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 768 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 768, min: 0 },
//       items: 1,
//     },
//   };
//   console.log(images);

//   return (
//     <Box
//       width="100%"
//       maxWidth={"1200px"}
//       mx={"auto"}
//       height={{ sm: "400px", md: "400px", lg: "500px" }}
//       overflow="hidden"
//       position="relative"
//       boxShadow="lg"
//       borderRadius="lg"
//       _hover={{ boxShadow: "2xl" }} // Enhance shadow on hover
//     >
//       <Carousel
//         responsive={responsive}
//         infinite={true}
//         autoPlay={true}
//         autoPlaySpeed={3000}
//         keyBoardControl={true}
//         showDots={true}
//         customTransition="transform 0.7s ease-in-out"
//         transitionDuration={700}
//         containerClass="carousel-container"
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//         customDot={<CustomDot />}
//         customLeftArrow={<CustomLeftArrow />}
//         customRightArrow={<CustomRightArrow />}
//       >
//         {isLoading ? (
//           <Image
//             src={"../../public/bc051633-c226-45e6-a92f-6538acc3e7c2.webp"}
//             alt={"default"}
//             w="100%"
//             h="100%"
//             objectFit="cover"
//             transition="transform 0.4s ease"
//             borderRadius="lg"
//           />
//         ) :
//         (
//           images &&
//           images?.length > 0 &&
//           images?.map((image, index) => (
//             <Box key={index} position="relative">
//               <Image
//                 src={image.image_url}
//                 alt={`Slide ${index}`}
//                 w="100%"
//                 h="100%"
//                 objectFit="cover"
//                 transition="transform 0.4s ease"
//                 borderRadius="lg"
//               />
//               <Box
//                 position="absolute"
//                 top="75%"
//                 left="50%"
//                 transform={"translate(-50%, -50%)"}
//                 zIndex={2}
//                 bgGradient="linear(to-r, blackAlpha.700, transparent)"
//                 color="white"
//                 p={4}
//                 borderRadius="md"
//                 maxWidth="100%"
//                 // opacity={0}
//                 transition="opacity 0.3s ease"
//                 _hover={{ opacity: 1 }}
//               >
//                 <Text
//                   fontSize={{ base: "smaller", md: "md", lg: "lg" }}
//                   whiteSpace={"nowrap"}
//                   fontWeight="bold"
//                   color={"white"}
//                 >
//                   {image?.title}
//                 </Text>
//               </Box>
//             </Box>
//           ))
//         )}
//       </Carousel>
//     </Box>
//   );
// }

// function CustomDot({ onClick, ...rest }) {
//   const { active } = rest;
//   return (
//     <Box
//       as="button"
//       onClick={onClick}
//       w="12px"
//       h="12px"
//       bg={active ? "blue.500" : "gray.300"}
//       borderRadius="50%"
//       mx="5px"
//       transition="background 0.3s ease"
//       _hover={{ bg: "blue.400" }}
//     />
//   );
// }

// function CustomLeftArrow({ onClick }) {
//   return (
//     <IconButton
//       aria-label="Previous"
//       icon={<FaArrowLeft />}
//       onClick={onClick}
//       position="absolute"
//       left="10px"
//       top="40%"
//       transform="translateY(-50%)"
//       bg="whiteAlpha.700"
//       _hover={{ bg: "white" }}
//       borderRadius="full"
//       boxShadow="md"
//     />
//   );
// }

// function CustomRightArrow({ onClick }) {
//   return (
//     <IconButton
//       aria-label="Next"
//       icon={<FaArrowRight />}
//       onClick={onClick}
//       position="absolute"
//       right="10px"
//       top="40%"
//       transform="translateY(-50%)"
//       bg="whiteAlpha.700"
//       _hover={{ bg: "white" }}
//       borderRadius="full"
//       boxShadow="md"
//     />
//   );
// }

// export default ImageSlider;

// // const images = [
// //   {
// //     src: "https://img.freepik.com/free-vector/flat-shopping-center-social-media-cover-template_23-2149329948.jpg?t=st=1729229144~exp=1729232744~hmac=7bbe0306bed83614c11a37477344b160e90fd7cab03146f0f652765433a23758&w=1380",
// //     caption: "Beautiful Landscape 1",
// //   },
// //   {
// //     src: "https://img.freepik.com/free-psd/gradient-sale-discount-landing-page-template_23-2150308900.jpg?w=1060&t=st=1729229151~exp=1729229751~hmac=62af20cf2f46dbcabdbfcb0ad204da39001de0645982fb476e2b44d202c988c2",
// //     caption: "Amazing Sunset 2",
// //   },
// //   {
// //     src: "https://img.freepik.com/free-vector/flat-design-supermarket-sale-facebook-template_23-2149363411.jpg?t=st=1729230012~exp=1729233612~hmac=5676d257182534d788b04061ee1309e29b7c656b6804251c90cfec8033734c5f&w=996",
// //     caption: "Stunning View 3",
// //   },
// //   {
// //     src: " https://img.freepik.com/free-vector/flat-design-supermarket-facebook-cover_23-2149363410.jpg?t=st=1729229843~exp=1729233443~hmac=e218ad2dc19b01c4dfbbe43eb53bfd44d0e965a68e4c18b7f3a86f55d02a31f2&w=1380",
// //     caption: "Stunning View 3",
// //   },
// // ];
