import styles from "./default-layout.module.scss";
import NavBar from "../../nav-bar/nav-bar";
import { Outlet } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import FadeInDiv from "../../!animations/fadeInDiv";

type Props = {};

export default function DefaultLayout({}: Props) {
  return (
    <>
      <NavBar />
      <Outlet />
      <FadeInDiv element="img" src={Logo} className={styles.logo} width={150} />
    </>
  );
}
