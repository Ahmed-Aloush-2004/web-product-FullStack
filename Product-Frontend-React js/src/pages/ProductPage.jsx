import { Box, Grid } from "@chakra-ui/react";
import Products from "../components-1/Products";
import SidebarFilter from "../components-1/SidebarFilter";
import Pagination from "../components-1/Pagination";
import {
  setPageNumber,
  setTotalPages,
} from "../store/FilterAndPaginationSlice.js";
import { useDispatch, useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts.js";
import { useEffect } from "react";

function ProductPage() {
  const dispatch = useDispatch();
  const { pageNumber, pageSize, totalPages, price, category, brand, search } =
    useSelector((state) => state.filterAndPagination);

  // price: [0, 30],
  // totalPages: 0,
  // pageNumber: 1,
  const { data, isLoading, error, refetch } = useFetchProducts({
    filterType: "products",
    pageNumber,
    category,
    brand,
    search,
    price,
    pageSize,
  });
  useEffect(() => {
    if (!isLoading) dispatch(setTotalPages(data?.totalPages));
  }, []);
  useEffect(() => {
    refetch();
  }, [brand, category, pageNumber, price, search]);
  return (
    <Grid
      marginTop="30px"
      templateColumns={{ base: "1fr", md: "auto 1fr" }} // Sidebar on top on smaller screens
      gap={5}
      height="calc(100vh - 100px)"
      overflow="hidden"
    >
      {/* Sidebar */}
      <Box
        bg="gray.200"
        p={5}
        display={{ base: "none", lg: "block" }} // Hide on small screens
      >
        <SidebarFilter />
      </Box>

      {/* Product grid */}
      <Box
        ml={{ base: 0 }}
        p={5}
        py={0}
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        }}
      >
        <Products
          products={data?.products}
          isLoading={isLoading}
          error={error}
        />
        {!isLoading && (
          <Pagination
            currentPage={pageNumber || 1}
            setCurrentPage={(newPage) => dispatch(setPageNumber(newPage))}
            totalPages={totalPages}
          />
        )}
      </Box>
    </Grid>
  );
}

export default ProductPage;

// import { Box, Grid } from "@chakra-ui/react";

// import Products from "../components-1/Products";
// import SidebarFilter from "../components-1/SidebarFilter";
// import Pagination from "../components-1/Pagination";
// import { setPageNumber } from "../store/FilterAndPaginationSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// function ProductPage() {
//   const dispatch = useDispatch();
//   const { pageNumber,totalPages} = useSelector(state => state.filterAndPagination);
//   return (
//     <Grid
//       marginTop={"30px"}
//       templateColumns={["1fr", "auto 1fr"]}
//       height={"calc(100vh - 100px)"}
//       overflow={"hidden"}
//     >
//       {/* Sidebar */}

//       <Box
//         bg="gray.200"
//         p={5}

//         // display={{ base: "none", md: "block" }}
//       >
//         <SidebarFilter />
//       </Box>

//       {/* Product grid */}
//       <Box
//         ml={[0]}
//         p={5}
//         py={0}
//         overflowY={"scroll"}
//         sx={{
//           "&::-webkit-scrollbar": {
//             display: "none",
//           },
//           "-ms-overflow-style": "none", // IE and Edge
//           "scrollbar-width": "none", // Firefox
//         }}
//       >
//         {/* <Box overflowY={"scroll"}>  */}

//         <Products />

//         <Pagination
//           currentPage={pageNumber || 1}
//           setCurrentPage={(newPage) => dispatch(setPageNumber(newPage))}
//           totalPages={totalPages || 20}
//         />

//         {/* </Box> */}
//       </Box>
//     </Grid>
//   );
// }

// export default ProductPage;
