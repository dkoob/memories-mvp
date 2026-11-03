const formInputStyling = `flex flex-wrap px-4 py-5 
    gap-x-6 gap-y-2  border border-stone-300 bg-stone-100/90 
    font-bold focus-within:outline-none focus-within:ring-1 focus-within:ring-stone-500 
    w-[65%]
    rounded-lg z-1`;

export default function RegisterFormSecondPage({registerFormHook}) {
    const {
        setDisplaySecondPage
    } = registerFormHook;

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplaySecondPage(false);
    };

    return (
        <form className={`z-3`}>
            <fieldset className={`flex flex-col gap-4`}>
                <div className={`flex flex-col gap-1 items-center`}>
                    <div className={formInputStyling}>
                        <input
                            type={`text`}
                            placeholder={'First Name'}
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
                            placeholder={'Last Name'}
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
                            placeholder={'Email'}
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
                    Sign Up
                </button>

                <button type={"button"} onClick={handleSubmit} className={`text-stone-800/60 font-semibold cursor-pointer`}>
                    Back to First Page
                </button>
            </fieldset>
        </form>
    )
}