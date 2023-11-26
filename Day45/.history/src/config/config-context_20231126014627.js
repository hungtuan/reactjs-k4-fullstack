import { createContext, useContext, useState } from "react";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    MIN_NUMBER: 1,
    MAX_TURN: 7,
    MAX_NUMBER: 100,
  });

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const context = useContext(ConfigContext);

  return context;
};
