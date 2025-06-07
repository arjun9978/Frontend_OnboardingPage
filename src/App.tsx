import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './context/UserContext';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';

const AppRoutes: React.FC = () => {
  const { isOnboardingCompleted } = useUser();

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          isOnboardingCompleted ? (
            <Navigate to="/dashboard\" replace />
          ) : (
            <Onboarding />
          )
        } 
      />
      <Route 
        path="/dashboard" 
        element={
          isOnboardingCompleted ? (
            <Dashboard />
          ) : (
            <Navigate to="/\" replace />
          )
        } 
      />
      <Route path="*" element={<Navigate to="/\" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <UserProvider>
      <Router>
        <AppRoutes />
      </Router>
    </UserProvider>
  );
}

export default App;