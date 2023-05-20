import FadeInDiv from "../!animations/fadeInDiv";
import styles from "./nav-bar.module.scss";

const links = [{ path: "/sad", name: "Home" }];

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div>
        {links.map((link, index) => (
          <FadeInDiv element="a" href={link.path} key={`${index}Link`}>
            {link.name}
          </FadeInDiv>
        ))}
      </div>

      <div>dasdasd</div>
    </div>
  );
}
