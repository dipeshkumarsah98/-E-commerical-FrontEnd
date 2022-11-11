import { action, makeObservable, observable, runInAction } from "mobx";
import http from "../http/http";

class ProductListStore {
  productList = [];
  errors = "";
  isLoading = true;
  constructor() {
    makeObservable(this, {
      productList: observable,
      errors: observable,
      isLoading: observable,
      getProducts: action,
    });
  }

  async getProducts() {
    try {
      const { data } = await http.get("https://api.storerestapi.com/products");
      runInAction(() => {
        this.productList = data;
        this.isLoading = false;
        this.errors = "";
      });
    } catch (error) {
      console.log("errors:::", error);
    }
  }
}

const productListStore = new ProductListStore();
export default productListStore;
