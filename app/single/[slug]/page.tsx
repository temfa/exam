"use client";
import Best from "@/components/best";
import Brands from "@/components/brands";
import BreadCrumb from "@/components/breadcrumb";
import Description from "@/components/description";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SingleProducts from "@/components/singleProduct";
import { useGetSingleProductsMutation } from "@/redux/api/mutationApi";
import React, { useEffect, useState } from "react";

const Single = ({ params }: { params: { slug: string } }) => {
  const [products, setProducts] = useState({});
  const [
    getSingleProducts,
    { data: getSingleProduct, isLoading: getSingleProductLoad, isSuccess: getSingleProductSuccess, isError: getSingleProductFalse, error: getSingleProductErr },
  ] = useGetSingleProductsMutation();
  useEffect(() => {
    if (getSingleProductSuccess) {
      if (getSingleProduct) {
        setProducts(getSingleProduct);
      }
    }
  }, [getSingleProduct, getSingleProductSuccess]);
  useEffect(() => {
    if (getSingleProductFalse) {
      if (getSingleProductErr) {
        console.log(getSingleProductErr);
      }
    }
  }, [getSingleProductErr, getSingleProductFalse]);
  useEffect(() => {
    getSingleProducts(params.slug);
  }, [getSingleProducts, params.slug]);
  return (
    <>
      <Header />
      <BreadCrumb />
      <SingleProducts product={products} />
      <Description product={products} />
      <Best />
      <Brands />
      <Footer />
    </>
  );
};

export default Single;
