import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem("loggedUser");

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />
}

export default ProtectedRoute;