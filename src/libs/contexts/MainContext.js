import { createContext, useReducer } from "react";
import MainReducer, { initialState } from "./MainReducer";

export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
