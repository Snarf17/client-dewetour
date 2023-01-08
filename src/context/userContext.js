import { createContext, useReducer } from "react"



export const UserContext = createContext()


const initialState = {
  isLogin: false,
  role: null,
  token: null
}

const reducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("role", payload.role)
      localStorage.setItem("user", JSON.stringify(payload)) 
      localStorage.setItem("token", payload.token)
      return{
        ...state,
        isLogin: true,
        user: payload,
        // fullname: payload,
        token: payload,
      }

      case "LOGOUT":
        localStorage.removeItem("role")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        return {
          isLogin: false,
          user: action.payload.user,
        }
  
    default:
        throw new Error();
  }
}
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}
