import React, { useEffect } from "react";
import { refreshAccessTokenFn } from "../api/authApi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, CircularProgress } from "@mui/material";
import { useMutation } from "react-query";

const Navbar = () => {
  useEffect(() => {
    getMenuList();
  }, [])
  const { mutate: getMenuList, isLoading: loading } = useMutation(
    () => refreshAccessTokenFn(),
    {
      onSuccess: (data) => {
        // query.refetch();
        // toast.success('You successfully logged in');
        // navigate(from);
        console.log(data,"data");
        
        setmenulist(data?.data?.menu)
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
 
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [subMenulist, setSubMenulist] = React.useState<any>([]);
  const [menuList, setmenulist] = React.useState<any>([]);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>, item_name: string) => {

    setAnchorEl(event.currentTarget);
    setSubMenulist(menuList.find((menu: any) => menu.menu_name === item_name)?.subMenuDetails)
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {
        loading ? <CircularProgress /> :

          <nav className="main-nav">
            {/* 1st logo part  */}
            <div className="logo">
              <h2>
                <span>P</span>vml
              </h2>
            </div>

            {/* 2nd menu part  */}

            <div
              className={ "menu-link"
              }>
              <ul>
                {menuList?.map((item: any, index: number) => (
                  <li key={index}>
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onMouseOver={(e) => handleClick(e, item?.menu_name)}
                      // onMouseLeave={handleClose}
                      className="menuButton"
                    >
                      {item?.menu_name}
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        // onMouseEnter: handleClick(e, item?.menu_name),
                        onMouseLeave: handleClose,
                      }}
                    >
                      {subMenulist.map((itemm: any, index: number) => (
                        <MenuItem onClick={handleClose}>{itemm?.submenu_name}</MenuItem>
                      ))}
                    </Menu>
                  </li>
                ))}


              </ul>

            </div>

            {/* 3rd social media links */}

          </nav>
      }
    </>
  );
};

export default Navbar;