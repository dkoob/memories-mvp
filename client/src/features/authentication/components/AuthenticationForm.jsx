import { useSearchParams } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./RegisterForm.jsx";
import AuthenticationFormSidePanel from "./AuthenticationFormSidePanel.jsx";

export default function AuthenticationForm() {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode") || "login";

    return (
        <div className="relative w-[60%] h-full flex items-center justify-center">
            <section className="relative z-20 flex w-5/6 h-[60%] shadow-2xl/50 rounded-2xl overflow-hidden">
                {mode === "login" ? (
                    <LoginForm />
                ) : mode === "register" ? (
                    <RegisterForm />
                ) : (
                    <p>Invalid authentication mode.</p>
                )}

                <AuthenticationFormSidePanel />
            </section>
        </div>
    );
}