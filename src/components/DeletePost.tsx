import { deletePostMutation } from "../actions/mutations";
import { useMutation } from "../hooks/useMutation";
import { useModal, usePosts } from "../redux/hooks";

type DeletePostProps = {
    post: IPost;
};

export const DeletePost: React.FC<DeletePostProps> = ({ post }) => {
    const { fetchPosts } = usePosts();
    const { closeModal } = useModal();

    const { mutate: deletePost, loading } = useMutation(deletePostMutation, {
        onSuccess: () => {
            fetchPosts({ offset: "0" });
            closeModal();
        },
    });

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-[22px] font-bold">
                Are you sure you want to delete this item?
            </h1>
            <footer className="w-full flex justify-end gap-3 ">
                <button
                    onClick={closeModal}
                    className="bg-transparent h-8 px-7 py-0 font-bold border border-[#999999] text-black"
                    type="submit"
                    disabled={loading}
                >
                    Cancel
                </button>

                <button
                    onClick={() => deletePost({ id: post.id })}
                    className="bg-[#FF5151] h-8 px-7 py-0 font-bold text-white"
                    type="submit"
                >
                    Delete
                </button>
            </footer>
        </div>
    );
};
