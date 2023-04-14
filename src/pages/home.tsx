import { useEffect } from "react";
import { useAuth } from "../redux/hooks";
import { NewPost } from "../components/NewPost";
import { Feed } from "../components/Feed";

export const Home = () => {
    const { user } = useAuth();

    useEffect(() => {
        if (!user.username) {
            window.location.href = "/login";
        }
    }, [user]);

    return (
        <div className="w-full md:max-w-[732px] pt-10 px-3 ">
            <NewPost />
            <Feed />
        </div>
    );
};
