import { useEffect, useState } from "react";
import styles from "./product.module.scss";
import Logo from "../../assets/Logo.svg";

interface ProductProps {
  product: ProductType;
  index: number;
  title?: string;
  article?: string;
  imageDataURL?: string;
}

export interface ProductType {
  title?: string;
  article?: string;
  imageDataURL?: string;
}

Product.defaultProps = {
  product: {
    title: "yep",
    article: "yepyep",
    imageDataURL: Logo,
  },
};

export default function Product(props: ProductProps) {
  const [align, setAlign] = useState("bottom");
  const [reverseAlign, setReverseAlign] = useState("top");

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
    <div className={styles.imageContainer} key={props.index + "imageComp"}>
      <div
        style={{
          backgroundImage: `url(${props.product.imageDataURL})`,
        }}
        className={styles.cinematicBackground}
      ></div>
      <div className={styles.imageWrapper}>
        <div
          style={{
            backgroundImage: `url(${props.product.imageDataURL})`,
          }}
          className={styles.image}
        ></div>
      </div>
    </div>
  );

  const textComp = (
    <div
      className={styles.textContainer}
      key={props.index + "textComp"}
      style={{
        background: `linear-gradient(to ${align},  transparent, ivory 70%)`,
      }}
    >
      <h1>{props.product.title}</h1>
      <p>{props.product.article}</p>
    </div>
  );

  return (
    <div className={styles.container} style={{ justifySelf: reverseAlign }}>
      {align == "left" ? [textComp, imageComp] : [imageComp, textComp]}
    </div>
  );
}
