import Mcxeta from "../../assets/Mtskheta.svg";
import Product, { ProductType } from "../../components/prooduct/product";
import styles from "./home.module.scss";

let products: ProductType[] = [];

for (let key in localStorage) {
  const regExp = /Product\d/;
  if (!regExp.test(key)) continue;

  const value = localStorage[key];

  products.push(JSON.parse(value));
}

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
        <hr />
        <div className={styles.productsContainer}>
          {products.map((product, index) => (
            <Product product={product} index={index} key={index} />
          ))}
        </div>
      </main>
      
    </>
  );
}
