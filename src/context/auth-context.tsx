import { createContext, ReactNode, useEffect, useState } from "react";

interface IAuthContextProps {
  children: ReactNode;
}

type TLoginForm = {
  email: string;
  name: string;
  password: string;
};

type TContextInfo = {
  authenticated: boolean;
  logIn: (data: TLoginForm) => void;
  logOut: () => void;
  userData: TLoginForm | null;
};

const AuthContext = createContext<TContextInfo>({} as TContextInfo);

const AuthProvider = ({ children }: IAuthContextProps) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState<TLoginForm | null>(null);

  const logIn = (data: TLoginForm) => {
    setAuthenticated(true);
    setUserData(data);

    localStorage.setItem("user", JSON.stringify(data));
  };

  const logOut = () => {
    setAuthenticated(false);
    setUserData(null);

    localStorage.clear();
  };

  useEffect(() => {
    const storageData = localStorage.getItem("user");

    if (storageData) logIn(JSON.parse(storageData));
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, logIn, logOut, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
