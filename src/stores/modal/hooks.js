import { useSelector } from "react-redux";

export const useModals = () => useSelector(state => state.modal.modals)
