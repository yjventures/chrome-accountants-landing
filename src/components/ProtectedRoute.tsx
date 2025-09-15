// src/components/ProtectedRoute.tsx
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  requiredRole?: "admin" | "client";
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // save this after login

  if (!token) {
    // Not logged in → kick to login
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && role !== requiredRole) {
    // Logged in but wrong role → kick to client dashboard
    return <Navigate to="/client-dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
