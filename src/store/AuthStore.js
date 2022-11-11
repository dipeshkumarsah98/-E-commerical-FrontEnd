import { action, makeObservable, observable, runInAction } from "mobx";
import http from "../http/http";

class RegisterStore {
  token = { access_token: "", refresh_token: "" };
  errors = "";

  constructor() {
    makeObservable(this, {
      token: observable,
      errors: observable,
      doRegister: action,
    });
  }

  async doRegister(data) {
    try {
      const { data: value } = await http.post(
        "https://api.storerestapi.com/auth/register",
        data
      );
      runInAction(() => {
        this.token = value.data;
      });
    } catch (error) {
      console.log("errors:::", error);
    }
  }
}

class LoginStore {
  token = { access_token: "", refresh_token: "" };
  errors = "";
  isLogged = false;
  constructor() {
    makeObservable(this, {
      token: observable,
      errors: observable,
      isLogged: observable,
      doLogin: action,
      logout: action,
    });
  }

  async doLogin(data) {
    try {
      const { data: value } = await http.post(
        "https://api.storerestapi.com/auth/login",
        data
      );
      runInAction(() => {
        this.token = value.data;
        this.isLogged = true;
        this.errors = "";
      });
    } catch (error) {
      runInAction(() => {
        this.isLogged = false;
        this.errors = "invalid email or password";
      });
    }
  }
  logout() {
    runInAction(() => {
      this.token = "";
      this.isLogged = false;
      this.errors = "";
    });
  }
}

const registerStore = new RegisterStore();
const loginStore = new LoginStore();

export { registerStore };
export { loginStore };
