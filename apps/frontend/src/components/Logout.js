import { useKeycloak } from "@react-keycloak/web";

const Logout = () => {
    const { keycloak } = useKeycloak();

    return (
        <div className="logout">
            {!!keycloak.authenticated && (
                <button
                type="button"
                className="text-blue-800"
                onClick={() => keycloak.logout()}
                >
                Logout ({keycloak.tokenParsed.preferred_username})
                </button>
            )}
        </div>
    );
};

export default Logout;