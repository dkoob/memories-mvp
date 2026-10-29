import { useSearchParams } from "react-router-dom";

import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm";

export default function AuthenticationPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const mode = searchParams.get("mode") || "login";

    function switchMode(newMode) {
        setSearchParams({ mode: newMode });
    }

    return (
        <div>
            {mode === "login" ? (
                <LoginForm onSwitchMode={switchMode} />
            ) : (
                <RegisterForm onSwitchMode={switchMode} />
            )}
        </div>
    );
}