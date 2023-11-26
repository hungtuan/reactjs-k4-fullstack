import { useContext } from "react";
import { ProviderContext } from "./Provider";

// Custom hook
export const useSelector = (callback) => {
  const { state } = useContext(ProviderContext);
  return callback(state);
};

// Hook đọc dispatch từ Global
export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};
