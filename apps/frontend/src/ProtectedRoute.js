import { Navigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

const ProtectedRoute = ({ children }) => {
    const { keycloak } = useKeycloak();
    const isLoggedIn = keycloak.authenticated;
  
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
