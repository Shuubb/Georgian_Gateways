import styles from "./nav-bar.module.scss";

const links = [
  { path: "/", name: "Home" },
  { path: "/admin", name: "Admin" },
];

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div>
        {links.map((link, index) => (
          <a href={link.path} key={`${index}Link`}>
            {link.name}
          </a>
        ))}
      </div>

      <div>dasdasd</div>
    </div>
  );
}
