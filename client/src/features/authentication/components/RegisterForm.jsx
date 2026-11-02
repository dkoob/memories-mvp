import backgroundImage from "../../../assets/imgs/mockaroon-YqUeLG7fMr4-unsplash.jpg"

const formInputStyling = `flex flex-wrap px-4 py-5 
    gap-x-6 gap-y-2  border border-stone-300 bg-stone-100/90 
    font-bold focus-within:outline-none focus-within:ring-1 focus-within:ring-stone-500 
    w-[65%]
    rounded-lg z-1`;

export default function RegisterForm({onSwitchMode}) {
    return (
        <div className={`relative bg-warm-cream flex-1 p-10`}>
            <img
                src={backgroundImage}
                alt={`Background`}
                className={`absolute inset-0 w-full h-full object-cover opacity-25 z-0`}
            />

            <h2 className={`text-3xl font-bold text-center text-stone-800 mt-12 mb-4 z-1`}>Register for an Account</h2>

            <hr className={`h-0.75 border-0 bg-stone-700 w-20 m-auto mb-12 z-1`} />

            <form className={`z-3`}>
                <fieldset className={`flex flex-col gap-4`}>
                    <div className={`flex flex-col gap-1 items-center`}>
                        <div className={formInputStyling}>
                            <input
                                type={`text`}
                                placeholder={'Username'}
                                autoComplete={"off"}
                                required={true}
                                className={"flex-1 focus:outline-none"}
                            />
                        </div>
                    </div>

                    <div className={`flex flex-col gap-1 items-center`}>
                        <div className={formInputStyling}>
                            <input
                                type={`text`}
                                placeholder={'Password'}
                                autoComplete={"off"}
                                required={true}
                                className={"flex-1 focus:outline-none"}
                            />
                        </div>
                    </div>

                    <button
                        type={"submit"}
                        className={`
                            px-4 py-3
                            mt-2 rounded-lg 
                            bg-yellow-950/80
                            hover:bg-yellow-950/90
                            text-stone-50 font-medium
                            w-[65%]
                            m-auto z-2
                            `}>
                        Sign In
                    </button>
                </fieldset>
            </form>
        </div>
    )
}