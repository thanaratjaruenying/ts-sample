import React, { useContext, createContext, useState } from 'react';

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: { (): void; (...args: any[]): void; }) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: { (): void; (...args: any[]): void; }) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

interface AuthContextInterface {
	user: boolean
  signin: (cb: () => any) => void
  signout: (cb: () => any) => void
}

const ContextInstance : AuthContextInterface = {
  user: false,
  signin: () => {},
  signout: () => {},
}

const AuthContext = createContext(ContextInstance);

export function ProvideAuthContext({ children }: any) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(false);

  const signin = (cb: () => any): void => {
    return fakeAuth.signin(() => {
      setUser(true);
      cb();
    });
  };

  const signout = (cb: () => any): void => {
    return fakeAuth.signout(() => {
      setUser(false);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
}
