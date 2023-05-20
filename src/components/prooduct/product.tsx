import { useEffect, useState } from "react";
import FadeInDiv from "../!animations/fadeInDiv";
import styles from "./product.module.scss";

interface ProductProps {
  product: Product;
  index: number;
}

interface Product {
  name: string;
  imageDataURL: string;
}

export default function Product(props: ProductProps) {
  const [align, setAlign] = useState("bottom");
  const [reverseAlign, setReverseAlign] = useState("top");
  const product: Product = props.product;
  const { name, imageDataURL } = product;

  useEffect(() => {
    if (window.innerWidth > 976) {
      setAlign(props.index % 2 == 0 ? "left" : "right");
      setReverseAlign(align == "left" ? "right" : "left");
    } else {
      setAlign("bottom");
      setReverseAlign("top");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 976) {
        setAlign(props.index % 2 == 0 ? "left" : "right");
        setReverseAlign(align == "left" ? "right" : "left");
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageComp = (
    <div className={styles.imageContainer}>
      <div
        style={{
          backgroundImage: `url(${imageDataURL})`,
        }}
        className={styles.cinematicBackground}
      ></div>
      <div
        style={{
          backgroundImage: `url(${imageDataURL})`,
        }}
        className={styles.image}
      />
    </div>
  );

  const textComp = (
    <div
      className={styles.textContainer}
      style={{
        background: `linear-gradient(to ${align},  transparent, ivory 70%)`,
      }}
    >
      <h1>Some Header!</h1>
      <p>
        election campaign time, and Rahul Gandhi, the Nehru-Gandhi heir and the
        Congress party’s prime ministerial candidate, was on a tour of Bihar and
        one of India’s new states, Jharkhand. It was a potentially historic day:
        Gandhi was coming to address a rally at a fairground barely ten
        kilometres away. As we waited and waited along with thousands of others,
        looking to the sky for any sight of the haloed helicopter, Prasad told
        me Gandhi would be wasting his time. The region’s insurgent youth wanted
        opportunities, not the blessings of a charming dynast. They had made
        their choice. It was going to be Gandhi’s rival, Bharatiya Janata
        Party’s Narendra Modi, a man who had promised them things that mattered:
        jobs
      </p>
    </div>
  );

  return (
    <FadeInDiv
      className={styles.container}
      style={{ justifySelf: reverseAlign }}
    >
      {align == "left" ? [textComp, imageComp] : [imageComp, textComp]}
    </FadeInDiv>
  );
}
