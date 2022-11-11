import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

class CartStore {
  cartItem = [];
  constructor() {
    makeObservable(this, {
      cartItem: observable,
      addItem: action,
      length: computed,
      total: computed,
    });
  }

  get total() {
    let sum = 0;
    if (this.cartItem === []) return sum;
    for (const value of this.cartItem) {
      sum += value.price;
    }
    return sum;
  }
  get length() {
    return this.cartItem.length;
  }

  addItem(obj) {
    runInAction(() => {
      this.cartItem = [...this.cartItem, obj];
    });
  }
  clearCart() {
    runInAction(() => {
      this.cartItem = [];
    });
  }
}

const cartStore = new CartStore();
export default cartStore;
