import React, { useEffect, useState } from "react";
import { GetProductsListHome } from "../api/authApi";
import { CircularProgress, Stack } from "@mui/material";
import { useMutation } from "react-query";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { wrap } from "module";
// import "./navbar.css";

const Navbar = () => {
  useEffect(() => {
    getMenuList();
  }, [])
  const { mutate: getMenuList, isLoading: loading } = useMutation(
    () => GetProductsListHome(),
    {
      onSuccess: (data) => {
        // query.refetch();
        // toast.success('You successfully logged in');
        // navigate(from);
        console.log(data, "data");

        setmenulist(data?.data?.products)
      },
      onError: (error: any) => {
        // if (Array.isArray((error as any).response.data.error)) {
        //   (error as any).response.data.error.forEach((el: any) =>
        //     toast.error(el.message, {
        //       position: 'top-right',
        //     })
        //   );
        // } else {
        //   toast.error((error as any).response.data.message, {
        //     position: 'top-right',
        //   });
        // }
      },
    }
  );

  const [productList, setmenulist] = React.useState<any>([]);


  return (
    <>
      {
        loading ? <CircularProgress /> :
          // <img src=""/>
          <></>
      }

    </>
  );
};

export default Navbar;