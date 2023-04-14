import { Link } from "react-router-dom";
import { useAuth } from "../redux/hooks";

export const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <header className="sticky top-0 w-full flex justify-between items-center bg-primary p-4">
            <nav className="flex items-center">
                <Link to="/">
                    <h1 className="text-[22px] font-bold text-white">
                        Codeleap Network
                    </h1>
                </Link>
            </nav>
            <div className="flex items-center text-white">
                {user.username && (
                    <>
                        <img
                            className="w-9 h-9 mr-2 rounded-full"
                            src={`https://api.multiavatar.com/${user.username}.png`}
                            alt="avatar"
                        />
                        <p className="mr-4">{user.username}</p>

                        <button onClick={logout}>Logout</button>
                    </>
                )}
            </div>
        </header>
    );
};
