import React, { useEffect } from "react";
import { GetProductsListHome } from "../api/authApi";
import { CircularProgress } from "@mui/material";
import { useMutation } from "react-query";

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