import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
  toJS,
} from "mobx";

class CartStore {
  cartItem = [];
  constructor() {
    makeObservable(this, {
      cartItem: observable,
      addItem: action,
      updateQuantity: action,
      removeItem: action,
      length: computed,
      total: computed,
    });
  }

  get total() {
    let sum = 0;
    if (this.cartItem === []) return sum;

    for (const value of this.cartItem) {
      let subtotal = value.price * value.quantity;
      sum += subtotal;
    }
    return sum;
  }

  get length() {
    return this.cartItem.length;
  }

  removeItem(id) {
    console.log(id);
    const newCartItems = this.cartItem.filter((item) => item.id !== id);
    runInAction(() => {
      this.cartItem = newCartItems;
    });
    console.log(toJS(newCartItems));
  }

  updateQuantity(index, value) {
    return runInAction(() => {
      this.cartItem[index].quantity += value;
      this.cartItem[index].total = this.cartItem.quantity * this.cartItem.price;
    });
  }

  addItem(obj) {
    // checking if product already exist in cart
    const doExist = this.cartItem.findIndex((item) => item.id === obj.id);
    if (doExist === -1) {
      return runInAction(() => {
        this.cartItem = [...this.cartItem, obj];
      });
    }
    // updating quantity if product already exit in cart
    return this.updateQuantity(doExist, 1);
  }

  clearCart() {
    runInAction(() => {
      this.cartItem = [];
    });
  }
}

const cartStore = new CartStore();
export default cartStore;
