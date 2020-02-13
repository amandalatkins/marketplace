import React, { createContext, useReducer, useContext } from "react";
import isLoggedIn from "./isLoggedIn";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
    switch (action.type) {
      case "logIn":
        return {
          ...state,
          user: action.user,
          token: action.token,
          isLoggedIn: true
        };
      case "logOut":
        return {
          user: {},
          isLoggedIn: false,
          token: ""
        }
      default:
        throw new Error(`Invalid action type: ${action.type}`);
    }
  };

  const UserProvider = ({ value = isLoggedIn, ...props }) => {

    const [state, dispatch] = useReducer(reducer, value);
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useUserContext = () => {
    return useContext(UserContext);
  };
  
  export { UserProvider, useUserContext };