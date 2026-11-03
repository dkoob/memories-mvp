import useRegisterForm from "../hooks/useRegisterForm.js"

import RegisterFormFirstPage from "./RegisterFormFirstPage.jsx"
import RegisterFormSecondPage from "./RegisterFormSecondPage.jsx"

import backgroundImage from "../../../assets/imgs/mockaroon-YqUeLG7fMr4-unsplash.jpg"

export default function RegisterForm({onSwitchMode}) {
    const registerFormHook = useRegisterForm();

    return (
        <div className={`relative bg-warm-cream flex-1 p-10 overflow-hidden font-exo`}>
            <img
                src={backgroundImage}
                alt={`Background`}
                className={`absolute inset-0 w-full h-full object-cover opacity-25 z-0`}
            />

            <h2 className={`text-3xl font-bold text-center text-stone-800 mt-12 mb-4 z-1`}>Register for an Account</h2>

            <hr className={`h-0.75 border-0 bg-stone-700 w-20 m-auto mb-12 z-1`} />

            <div className={`relative`}>
                <div inert={registerFormHook.displaySecondPage} className={`w-full absolute inset-0
                    transition-transform duration-500 ease-in-out
                    ${registerFormHook.displaySecondPage
                    ? "-translate-x-full pointer-events-none"
                    : "translate-x-0"
                }`}>
                    <RegisterFormFirstPage registerFormHook={registerFormHook} />
                </div>

                <div inert={!registerFormHook.displaySecondPage} className={`w-full absolute inset-0
                    transition-transform duration-500 ease-in-out
                    ${registerFormHook.displaySecondPage
                    ? "translate-x-0"
                    : "translate-x-full pointer-events-none absolute inset-0"
                }`}>
                    <RegisterFormSecondPage registerFormHook={registerFormHook} />
                </div>
            </div>
        </div>
    )
}