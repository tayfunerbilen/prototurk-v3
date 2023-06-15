import store from "..";
import { _setUser, _removeUser } from ".";

export const setUser = data => store.dispatch(_setUser(data))
export const removeUser = () => store.dispatch(_removeUser())
