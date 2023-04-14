import { useEffect, useState } from "react";

export const GoTop = () => {
    const [show, setShow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-5 right-5 bg-primary rounded-full p-3  cursor-pointer ${
                show ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <img
                className="w-5 fill-white"
                src="/up-chevron.svg"
                alt="go-top"
            />
        </div>
    );
};
