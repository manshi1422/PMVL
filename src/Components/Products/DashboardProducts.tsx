import React, { useEffect } from "react";
import { GetProductsListHome } from "../api/authApi";
import { CircularProgress, Stack } from "@mui/material";
import { useMutation } from "react-query";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import "./navbar.css";
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Products = () => {
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
          <>
            <h2>Top Products</h2>
            <Swiper
              spaceBetween={10}
              // slidesPerView={5}
              navigation
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Mousewheel,
              ]}
              mousewheel={true}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => swiper}
              className="products"
              
              breakpoints={{
                320: {
                  // When screen width is 640px or smaller (mobile devices)
                  slidesPerView: 1,
                },
                360: {
                  // When screen width is 640px or smaller (mobile devices)
                  slidesPerView: 3,
                },
                640: {
                  // When screen width is 640px or smaller (mobile devices)
                  slidesPerView: 3,
                },
                768: {
                  // When screen width is 768px or smaller (tablets)
                  slidesPerView: 3,
                },
                1024: {
                  // When screen width is 1024px or smaller (small desktops)
                  slidesPerView: 4,
                },
                1200: {
                  // When screen width is 1200px or smaller (larger desktops)
                  slidesPerView: 5,
                },
              }}
            >
              {productList?.map((item: any, index: number) => (

                <SwiperSlide>
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
                </SwiperSlide>

              ))}</Swiper>
            
          </>
      }

    </>
  );
};

export default Products;