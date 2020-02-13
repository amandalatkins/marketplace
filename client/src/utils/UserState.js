import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
    switch (action.type) {
      case "currentUser":
        return {
          ...state,
          user: action.user,
          isLoggedIn: true
        };
      case "logOut":
        return {
          user: {},
          isLoggedIn: false
        }
      default:
        throw new Error(`Invalid action type: ${action.type}`);
    }
  };

  const UserProvider = ({ value = { isLoggedIn: false, user: {} }, ...props }) => {
    const [state, dispatch] = useReducer(reducer, value);
  
    return <Provider value={[state, dispatch]} {...props} />;
  };
  
  const useUserContext = () => {
    return useContext(UserContext);
  };
  
  export { UserProvider, useUserContext };