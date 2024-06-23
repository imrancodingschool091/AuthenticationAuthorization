import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("User");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : null
  );



  return (
    <AuthContext.Provider value={[authUser, setAuthUser ]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
