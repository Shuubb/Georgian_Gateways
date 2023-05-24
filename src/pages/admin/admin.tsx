import styles from "./admin.module.scss";
import { FcAddImage } from "react-icons/fc";
import Product from "../../components/prooduct/product";
import { useRef, useState } from "react";

interface ProductModel {
  title: string;
  article: string;
  imageDataURL: string;
}

export default function Admin() {
  const productImageRef = useRef(null);

  const [product, setProduct] = useState({
    title: "",
    article: "",
    imageDataURL: "",
  });

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>): void {
    if (!e.target.files || !e.target.files[0]) return;
    const imageObject = e.target.files[0];

    // რეგულარული გამოსახულებით ვამოწმებ ატვირთული ფაილი ფოტოს ტიპისაა თუ არა.
    const regExp = /image\/.*/;
    if (!regExp.test(imageObject.type)) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(imageObject);
    reader.onload = () => {
      const imageDataURL = reader.result;
      if (typeof imageDataURL != "string") {
        return false; // მთლიანად ტოვებს handleImageChange ფუნქციას და არა მარტო onload_ს
      }
      setProduct({
        title: product.title,
        article: product.article,
        imageDataURL: imageDataURL,
      });
    };
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTimeout(
      () =>
        setProduct({
          title: e.target.value,
          article: product.article,
          imageDataURL: product.imageDataURL,
        }),
      200
    );
  }
  function handleArticleChange(
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setTimeout(
      () =>
        setProduct({
          title: product.title,
          article: e.target.value,
          imageDataURL: product.imageDataURL,
        }),
      200
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    if (!(product.title && product.article && product.imageDataURL)) return;

    let numberOfProducts = 0;
    for (let key in localStorage) {
      const regExp = /Product\d/;
      if (!regExp.test(key)) continue;

      numberOfProducts++;
    }

    const productJSON = JSON.stringify(product);

    localStorage.setItem(`Product${numberOfProducts + 1}`, productJSON);
  }

  return (
    <>
      <main>
        <h1>Upload Panel</h1>

        <hr />
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="image">
              Image
              <FcAddImage className={styles.fcAddImage} />
            </label>
            <input
              id="image"
              type="file"
              onChange={handleImageUpload}
              ref={productImageRef}
            />

            <label>Article Name</label>
            <input type="text" onChange={handleTitleChange} />

            <label>Article</label>
            <textarea onChange={handleArticleChange} />

            <button>Submit</button>
          </form>
        </div>

        <hr />
        <h2>Preview:</h2>
        <div className={styles.productsContainer}>
          <Product product={product} index={0} />
        </div>
      </main>
    </>
  );
}
