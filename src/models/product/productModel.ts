export default class ProductModel {
  title?: string;
  article?: string;
  imageDataURL?: string;

  constructor(
    id?: number,
    title?: string,
    article?: string,
    imageDataURL?: string
  ) {
    if (id && title && article && imageDataURL)
      this.createProduct(id, title, article, imageDataURL);
    else if (id) this.parseProduct(id);
    else return;
  }

  private createProduct(
    id: number,
    title: string,
    article: string,
    imageDataURL: string
  ): void {
    this.title = title;
    this.article = article;
    this.imageDataURL = imageDataURL;

    this.setProduct(id);
  }

  private parseProduct(id: number) {
    const productJSON = localStorage.getItem("Product" + id);
    if (productJSON) {
      const user = JSON.parse(productJSON);
      this.setTitle(user.title);
      this.setImage(user.imageDataURL);
      this.setArticle(user.article);
    } else return "Could not Parse Product!";
  }

  private setTitle(title: string) {
    this.title = title;
  }
  private setImage(imageDataURL: string) {
    this.imageDataURL = imageDataURL;
  }
  private setArticle(article: string) {
    this.article = article;
  }

  public deleteProduct(): void {
    localStorage.removeItem("Product");
    location.reload();
  }

  private setProduct(id: number): void {
    const userJSON = JSON.stringify(this);
    localStorage.setItem(`Product${id}`, userJSON);
  }
}
