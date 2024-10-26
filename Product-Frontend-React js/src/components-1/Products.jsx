import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

function Products({products = [],isLoading,error}) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error?.message}</div>;
  }
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} spacing={5} mt="10px">
      {products
        .map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
    </SimpleGrid>
  );
}

export default Products;

















// import { SimpleGrid } from '@chakra-ui/react';
// import React from 'react'
// import ProductCard from './ProductCard';

// function Products() {
//     return (
//       <SimpleGrid columns={[1, 2, 3]} marginTop={"10px"} spacing={5}  >
//         {Array(9)
//           .fill(0)
//           .map((_, i) => (
//             <ProductCard key={i} />
//           ))}
//       </SimpleGrid>
//     );
//   }
  

// export default Products
