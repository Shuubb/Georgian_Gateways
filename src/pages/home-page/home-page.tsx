import Mcxeta from "../../assets/Mtskheta.svg";
import FadeInDiv from "../../components/!animations/fadeInDiv";
import Product from "../../components/prooduct/product";
import styles from "./home-page.module.scss";

const user = localStorage.getItem("currentUser");

const products = [JSON.parse(user!), JSON.parse(user!), JSON.parse(user!)];
console.log(window.innerWidth);

export default function HomePage() {
  return (
    <>
      <div
        className={styles.bannerContainer}
        style={{
          backgroundImage: `url(${Mcxeta})`,
        }}
      ></div>

      <main>
        <FadeInDiv
          element="h1"
          style={{ fontWeight: 300, margin: 0, lineHeight: 2, textAlign: "center"}}
        >
          Plan Your Trip Today!
        </FadeInDiv>
        <hr />
        <div className={styles.productsContainer}>
          {products.map((product, index) => (
            <Product
              product={product}
              index={index}
              key={index + product.name}
            />
          ))}
        </div>
      </main>
    </>
  );
}
