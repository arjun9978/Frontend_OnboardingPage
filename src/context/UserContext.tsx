import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserData } from '../types/user';

interface UserContextType {
  userData: UserData | null;
  updateUserData: (data: Partial<UserData>) => void;
  clearUserData: () => void;
  isOnboardingCompleted: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, []);

  const updateUserData = (data: Partial<UserData>) => {
    const newUserData = { ...userData, ...data } as UserData;
    setUserData(newUserData);
    localStorage.setItem('userData', JSON.stringify(newUserData));
  };

  const clearUserData = () => {
    setUserData(null);
    localStorage.removeItem('userData');
  };

  const value: UserContextType = {
    userData,
    updateUserData,
    clearUserData,
    isOnboardingCompleted: userData?.onboardingCompleted || false,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};


