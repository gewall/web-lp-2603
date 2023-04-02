import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";

const useSelector = () => {
  const { state, dispatch } = useContext(MainContext);

  return { state, dispatch };
};

export default useSelector;
