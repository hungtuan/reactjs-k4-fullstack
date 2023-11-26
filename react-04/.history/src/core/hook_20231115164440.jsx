import { useContext } from "react";
import { ProviderContext } from "react";
// Custom hook
export const useSelector = () => {
  const { state } = useContext(ProviderContext);
  return state;
};

// Hook đọc dispatch từ Global
export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};
