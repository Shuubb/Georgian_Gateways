import styles from "./default-layout.module.scss";
import NavBar from "../../nav-bar/nav-bar";
import { Outlet } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

type Props = {};

export default function DefaultLayout({}: Props) {
  return (
    <>
      <NavBar />
      <Outlet />
      <img src={Logo} className={styles.logo} width={150} />

      <footer>
        <hr />
        <div className={styles.infoContainer}>
          <div>
            <h3>Contact Us:</h3>
            <div className={styles.socialMediaLinksContainer}>
              <a href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/georgian_gateways_/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" target="_blank">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
