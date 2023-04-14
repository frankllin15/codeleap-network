import { useEffect } from "react";
import { useAuth } from "../redux/hooks";

export const Login = () => {
    const { login, user } = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        login({ username });
    };

    useEffect(() => {
        if (user.username) {
            window.location.href = "/";
        }
    }, [user]);

    return (
        // <div className="flex justify-center items-center">
        <form
            onSubmit={handleSubmit}
            className="w-[500px] self-center justify-self-center flex flex-col items-start p-6 border border-[#999999] rounded-2xl"
        >
            <h1 className="text-[22px] mb-6 font-bold">
                Welcome to CodeLeap network!
            </h1>
            <label className="pb-2" htmlFor="username">
                Please enter your username
            </label>
            <input
                className="w-full rounded-md h-8 px-3 border border-[#777777] mb-4 text-sm"
                type="text"
                placeholder="John doe"
                name="username"
            />
            <button
                className="self-end text-bas bg-primary text-white h-8 px-7 py-0"
                type="submit"
            >
                Enter
            </button>
        </form>
        // </div>
    );
};
