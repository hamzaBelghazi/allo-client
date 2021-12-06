import {
  MenuOutlined,
  NotificationsOutlined,
  TranslateOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import * as React from "react";
export default function Navbar() {
  const user = false;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_menu}>
        <div>
          <Button
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuOutlined className={styles.icon_menu} />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <div className={styles.logo}>AlloMallem.</div>
      </div>
      <ul className={styles.main_nav}>
        <li className={styles.item + " " + styles.active}>Services</li>
        <li className={styles.item}>About us</li>
        {user ? (
          <>
            <img
              src="https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"
              alt=""
              className={styles.avatar}
            />
            <li className={styles.item}>Hamza Belghazi</li>
          </>
        ) : (
          <>
            <li className={styles.item}>
              <Link href="/auth/register">
                <a className={styles.item_link}>Register</a>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/auth/login">
                <a className={styles.item_link}>Login</a>
              </Link>
            </li>
          </>
        )}

        <NotificationsOutlined className={styles.icon} />
        <TranslateOutlined className={styles.icon} />
      </ul>
    </div>
  );
}
