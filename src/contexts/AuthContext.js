import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Holds the currently logged-in user
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [userEmail, setUserEmail] = useState(null);
  const [userBlogs, setUserBlogs] = useState([]);

  // Holds all registered users
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load currently logged-in user from localStorage (if any)
  useEffect(() => {
    const savedUser = localStorage.getItem("formData");
    if (savedUser && savedUser !== "undefined") {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser.email) {
          setFormData(parsedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error parsing formData:", error);
        localStorage.removeItem("formData");
      }
    }
  }, []);

  //  Add a new user to the users array
  const handleUsers = (newUser) => {
    setUsers((prev) => {
      const updated = [...prev, newUser];
      localStorage.setItem("users", JSON.stringify(updated));
      return updated;
    });
  };

  const login = (userData) => {
    setFormData(userData);
    setIsAuthenticated(true);
    localStorage.setItem("formData", JSON.stringify(userData));
  };

  const logout = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
    });
    setIsAuthenticated(false);
    localStorage.removeItem("formData");
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        formData,
        isAuthenticated,
        setFormData,
        handleUsers,
        login,
        logout,
        userEmail,
        setUserEmail,
        userBlogs,
        setUserBlogs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
