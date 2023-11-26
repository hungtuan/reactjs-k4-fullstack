import { useContext } from "react";
import { ProfilerContext } from "react";
// Custom hook
export const useSelector = () => {
  const { state } = useContext(ProfilerContext);
  return state;
};
