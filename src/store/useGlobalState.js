import { useReducer } from "react";
import storage from "local-storage-fallback";

// State changer for website theme
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK":
      storage.setItem("isDark", !state.isDark);
      return {
        isDark: !state.isDark,
      };
    case "TOGGLE_NAV":
      return {
        isNavOpen: !state.isNavOpen,
      };
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  // Saves theme change to local storage allowing to keep state either light or dark on refresh.
  const [state, dispatch] = useReducer(reducer, {
    isDark: storage.getItem("isDark")
      ? JSON.parse(storage.getItem("isDark"))
      : false,
    isNavOpen: false,
  });

  return { state, dispatch };
};

export default useGlobalState;
