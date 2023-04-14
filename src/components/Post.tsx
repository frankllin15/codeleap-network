import moment from "moment";
import { useAuth, useModal } from "../redux/hooks";

type PostProps = {
    post: IPost;
};

export const Post: React.FC<PostProps> = ({ post }) => {
    const { user } = useAuth();
    const { setModal } = useModal();

    const handleDeletePost = () => {
        setModal({
            isOpen: true,
            type: "delete",
            data: post,
        });
    };

    const handleEditPost = () => {
        setModal({
            isOpen: true,
            type: "update",
            data: post,
        });
    };

    return (
        <article className="w-full min-w-0 border border-[#999999] rounded-2xl  overflow-hidden">
            <header className=" flex-row justify-between items-center flex text-white h-[70px] px-6 bg-primary  ">
                <h1 className="text-base md:text-[22px]  font-bold">
                    {post.title}
                </h1>
                {post.username === user.username && (
                    <div className="flex gap-2 justify-end">
                        <button onClick={handleDeletePost}>
                            <img src="/trash-delete.svg" alt="trash" />
                        </button>
                        <button onClick={handleEditPost}>
                            <img src="/pen-edit.svg" alt="pen-edit" />
                        </button>
                    </div>
                )}
            </header>
            <main className="p-6">
                <header className="flex justify-between items-center text-[#777777] mb-4">
                    <address className="">@{post.username}</address>
                    <time>{moment(post.created_datetime).fromNow()}</time>
                </header>
                <pre className="font-roboto text-[18px] font-normal whitespace-break-spaces">
                    {post.content}
                </pre>
            </main>
        </article>
    );
};
