import { useContext } from "react";
import { ProiderContext } from "react";
// Custom hook
export const useSelector = () => {
  const { state } = useContext(ProfilerContext);
  return state;
};

// Hook đọc dispatch từ Global
export const useDispatch = () => {
  const { dispatch } = useContext(ProfilerContext);
  return dispatch;
};
