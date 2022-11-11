import { toJS } from "mobx";
import { loginStore } from "../store/AuthStore";

let key = toJS(loginStore.token);

export function isLoggedIn() {
  if (key) return true;
  return false;
}
