import { useSelector } from "react-redux";

export const useAuth = () => useSelector(state => state.auth.user)
