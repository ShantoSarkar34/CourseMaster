import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo"); // match your frontend key
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // done checking localStorage
  }, []);

  const logIn = (userData) => {
    localStorage.setItem("userInfo", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
