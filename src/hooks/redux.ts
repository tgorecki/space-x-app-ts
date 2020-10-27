import { useSelector as nativeUseSelector, useDispatch as nativeUseDispatch } from "react-redux";

export const useSelector = (state: any) => nativeUseSelector(state);
export const useDispatch = () => nativeUseDispatch();
