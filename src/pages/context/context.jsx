import { createContext, useReducer } from "react";

const Datacontext = createContext();

const start = {

  theme:localStorage.getItem("theme")===null?"Light":localStorage.getItem("theme")=="Light"?"Light":"Dark"
};
const reducer = (firstState, action) => {
  switch (action.type) {
  

    case "CHANGE_THEME":
      return { ...firstState, theme: action.NEW_N };

    default:
      return firstState;
  }
};

export function DataProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, start);

  const toogle = (name) => {
    localStorage.setItem("theme", name);
    dispatch({
      type: "CHANGE_THEME",
      NEW_N:name,
    });

  
  };
  return (
    <Datacontext.Provider value={{ ...firstState, toogle }}>
      {children}
    </Datacontext.Provider>
  );
}
export default Datacontext;
