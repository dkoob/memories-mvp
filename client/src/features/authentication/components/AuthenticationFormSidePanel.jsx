export default function AuthenticationFormSidePanel({onSwitchMode}) {
    return (
        <div className={`bg-stone-800 ml-auto w-[40%] opacity-85 p-10 flex flex-col`}>
            <h1 className={`text-3xl text-center font-exo font-bold text-warm-cream mt-12`}>Don't have an account?</h1>
            <button>Register Now</button>
        </div>
    )
}