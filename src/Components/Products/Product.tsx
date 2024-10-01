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
          <Stack
            direction={{ xs: 'row', sm: 'row' }}
            spacing={{ xs: 1, sm: 4, md: 4 }}
            className="products"
          > {productList?.map((item: any, index: number) => (

            <div className="product">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item?.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item?.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button size="small">Wishlist</Button> */}
                  <Button size="small">Add to cart</Button>
                </CardActions>
              </Card>
            </div>

          ))}

          </Stack>
      }

    </>
  );
};

export default Navbar;