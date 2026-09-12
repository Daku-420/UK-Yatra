import React, { createContext, useContext, useState, useEffect } from 'react';
import { adminStorage } from '../utils/adminStorage';

interface AdminUser {
  name: string;
  email: string;
  role: string;
  avatar: string;
}

interface AdminAuthContextType {
  isAuthenticated: boolean;
  user: AdminUser | null;
  login: (identity: string, pass: string, remember?: boolean) => { success: boolean; error?: string };
  logout: () => void;
  changePassword: (oldPass: string, newPass: string) => { success: boolean; error?: string };
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'ukyatra_admin_auth_session';

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<AdminUser | null>(null);

  useEffect(() => {
    // Check existing stored session
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY) || sessionStorage.getItem(AUTH_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.authenticated) {
          setIsAuthenticated(true);
          setUser(parsed.user);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const login = (identity: string, pass: string, remember: boolean = true) => {
    const cleanId = identity.trim().toLowerCase();
    const cleanPass = pass.trim();
    const settings = adminStorage.getSettings();
    const validPass = settings.adminPasswordHash || 'ukyatra321';

    const isValidUser = cleanId === 'ukyatra123' || cleanId === 'admin@ukyatra.com' || cleanId === 'admin';
    const isValidPass = cleanPass === validPass;

    if (isValidUser && isValidPass) {
      const adminUser: AdminUser = {
        name: 'Tushar (Lead Expedition Architect)',
        email: 'ukyatra123@ukyatra.com',
        role: 'Master Administrator',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      };

      setIsAuthenticated(true);
      setUser(adminUser);

      const sessionData = JSON.stringify({ authenticated: true, user: adminUser, loginTime: new Date().toISOString() });
      if (remember) {
        localStorage.setItem(AUTH_STORAGE_KEY, sessionData);
      } else {
        sessionStorage.setItem(AUTH_STORAGE_KEY, sessionData);
      }

      return { success: true };
    }

    return { success: false, error: 'Invalid administrator email/username or passcode.' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const changePassword = (oldPass: string, newPass: string) => {
    const settings = adminStorage.getSettings();
    const currentPass = settings.adminPasswordHash || 'ukyatra2026';

    if (oldPass !== currentPass) {
      return { success: false, error: 'Current password does not match.' };
    }
    if (newPass.length < 6) {
      return { success: false, error: 'New password must be at least 6 characters long.' };
    }

    settings.adminPasswordHash = newPass;
    adminStorage.saveSettings(settings);
    return { success: true };
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, user, login, logout, changePassword }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = (): AdminAuthContextType => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
