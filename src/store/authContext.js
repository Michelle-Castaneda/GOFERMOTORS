import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  userId: null,
  token: null,
  exp: null,
  username: null,
  userPending: false,
  isadmin: false
};

const AuthContext = createContext();

const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("exp");
  const storedId = localStorage.getItem("userId");
  const storedName = localStorage.getItem("username");
  const storedAdmin = localStorage.getItem("isadmin");

  let remainingTime = storedExp - new Date().getTime()
  if(remainingTime < 0) {
    localStorage.clear()
    return null
  }

  return {
    token: storedToken,
    exp: storedExp,
    userId: storedId,
    username: storedName,
    isadmin: storedAdmin
  };
};

const AuthContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_PENDING":
        return { ...state, userPending: true}
      case "LOGIN":
        let { token, exp, userId, username, isadmin } = action.payload;
        localStorage.setItem("token", token);
        localStorage.setItem("exp", exp);
        localStorage.setItem("userId", userId);
        localStorage.setItem("username", username);
        localStorage.setItem("isadmin", isadmin);
        return { ...state, token, exp, userId, username, isadmin };
      case "LOGOUT":
        localStorage.clear();
        return initialState;
      case "RETURNING_USER":
        let { token: t, userId: u, exp: e, username: n, isadmin: a } = action.payload;
        return { ...state, token: t, userId: +u, exp: +e, username: n, isadmin: a };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let localData = getLocalData();
    if (localData) {
      dispatch({ type: "RETURNING_USER", payload: localData });
    }
  }, []);
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
        {props.children}
      </AuthContext.Provider>
    )
}

export default AuthContext;
export { AuthContextProvider };