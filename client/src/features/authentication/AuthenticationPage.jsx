import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import LoginForm from "./components/LoginForm.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import AuthenticationForm from "./components/AuthenticationForm.jsx";

export default function AuthenticationPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const mode = searchParams.get("mode");

    useEffect(() => {
        if (!mode) {
            setSearchParams(
                { mode: "login" },
                { replace: true }
            );
        }
    }, [mode, setSearchParams]);

    return (
        <div className={`flex bg-authorization bg-cover bg-center bg-no-repeat min-h-screen h-screen items-center justify-center`}>
            <AuthenticationForm>
            </AuthenticationForm>
        </div>
    );
}