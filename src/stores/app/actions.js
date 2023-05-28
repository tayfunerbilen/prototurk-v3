import store from "..";
import { _setTheme, _setSidebarType, _setLanguage } from ".";

export const setTheme = theme => store.dispatch(_setTheme(theme))
export const setLanguage = language => store.dispatch(_setLanguage(language))
export const setSidebarType = type => store.dispatch(_setSidebarType(type))
