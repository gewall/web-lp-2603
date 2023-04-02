export const initialState = {
  lang: "indonesia",
};

const MainReducer = (state, action) => {
  switch (action.type) {
    case "setLang": {
      return { ...state, lang: action.payload };
    }
    case "getLang": {
      return state;
    }
    default:
      break;
  }
};

export default MainReducer;
