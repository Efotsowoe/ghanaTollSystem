import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Auth Components
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// User Components
import UserLayout from './layouts/UserLayout';
import UserDashboard from './pages/user/Dashboard';
import VehicleManagement from './pages/user/VehicleManagement';
import PaymentMethods from './pages/user/PaymentMethods';
import TollHistory from './pages/user/TollHistory';
import OutstandingBalances from './pages/user/OutstandingBalances';
import UserProfile from './pages/user/Profile';
import DisputeCenter from './pages/user/DisputeCenter';

// Admin Components
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import RevenueAnalytics from './pages/admin/RevenueAnalytics';
import TollManagement from './pages/admin/TollManagement';
import DisputeManagement from './pages/admin/DisputeManagement';
import SystemSettings from './pages/admin/SystemSettings';

// Landing Page
import LandingPage from './pages/LandingPage';

// Auth Provider
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* User Routes */}
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<Navigate to="/user/dashboard" replace />} />
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="vehicles" element={<VehicleManagement />} />
            <Route path="payment-methods" element={<PaymentMethods />} />
            <Route path="toll-history" element={<TollHistory />} />
            <Route path="outstanding-balances" element={<OutstandingBalances />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="disputes" element={<DisputeCenter />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="revenue" element={<RevenueAnalytics />} />
            <Route path="toll-management" element={<TollManagement />} />
            <Route path="disputes" element={<DisputeManagement />} />
            <Route path="settings" element={<SystemSettings />} />
          </Route>

          {/* Catch all - redirect to landing page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;