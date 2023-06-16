import { useSelector } from "react-redux";

export const useSidebarType = () => useSelector(state => state.app.sidebarType)
export const useLanguage = () => useSelector(state => state.app.language)
export const useTheme = () => useSelector(state => state.app.theme)
export const useSidebarVisibility = () => useSelector(state => state.app.sidebarVisibility)
