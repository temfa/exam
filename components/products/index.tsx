import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import ProductCard from "../productCard";
import { useGetAllProductsMutation } from "@/redux/api/mutationApi";
import { useRouter } from "next/navigation";
import Load from "../load";

const Products = ({ single }: { single: boolean }) => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [slice, setSlice] = useState(10);
  const [getAllProducts, { data: getAllProduct, isLoading: getAllProductLoad, isSuccess: getAllProductSuccess, isError: getAllProductFalse, error: getAllProductErr }] =
    useGetAllProductsMutation();
  useEffect(() => {
    if (getAllProductSuccess) {
      if (getAllProduct) {
        setProducts(getAllProduct.products);
      }
    }
  }, [getAllProduct, getAllProductSuccess]);
  useEffect(() => {
    if (getAllProductFalse) {
      if (getAllProductErr) {
        console.log(getAllProductErr);
      }
    }
  }, [getAllProductErr, getAllProductFalse]);
  useEffect(() => {
    getAllProducts(1);
  }, [getAllProducts]);
  return (
    <>
      {getAllProductLoad ? (
        <>
          <Load />
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "grid",
              columnGap: 3,
              rowGap: 6.25,
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(5, 1fr)",
              },
              padding: "24px",
            }}>
            {products?.slice(0, slice)?.map((item: any, index) => {
              return (
                <ProductCard
                  key={index}
                  image={item?.images[0]}
                  title={item?.title}
                  category={item?.category}
                  price={item?.price}
                  discount={item?.discountPercentage}
                  action={() => {
                    router.push(`/single/${item?.id}`);
                  }}
                />
              );
            })}
          </Box>
          {single ? null : slice === products.length ? null : (
            <Button variant="outlined" sx={{ width: 261 }} onClick={() => setSlice(slice + 10)}>
              LOAD MORE PRODUCTS
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default Products;
