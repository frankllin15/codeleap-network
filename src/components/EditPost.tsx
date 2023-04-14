import { useState } from "react";
import { useMutation } from "../hooks/useMutation";
import { updatePostMutation } from "../actions/mutations";
import { useModal, usePosts } from "../redux/hooks";

type EditPostProps = {
    post: IPost;
};

export const EditPost: React.FC<EditPostProps> = ({ post }) => {
    const { fetchPosts } = usePosts();
    const { closeModal } = useModal();

    const [form, setForm] = useState({
        title: post.title,
        content: post.content,
        username: post.username,
    });

    const { mutate: updatePost, loading } = useMutation(updatePostMutation, {
        onSuccess: () => {
            fetchPosts({ offset: "0" });
            closeModal();
        },
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        updatePost({
            id: post.id,
            data: form,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-start "
        >
            <label className="pb-2" htmlFor="title">
                Title
            </label>
            <input
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-md h-8 px-3 mb-4 border border-[#777777] text-sm"
                type="text"
                placeholder="Title"
                name="title"
            />
            <label className="pb-2" htmlFor="content">
                Content
            </label>
            <textarea
                value={form.content}
                onChange={handleChange}
                rows={5}
                className="flex-1 w-full rounded-md h-8 p-3 mb-4 text-sm border border-[#777777] resize-none"
                placeholder="Content"
                name="content"
            />

            <footer className="w-full flex justify-end gap-3">
                <button
                    onClick={closeModal}
                    className="self-end text-bas bg-transparent h-8 px-7 py-0 border border-black text-black"
                    type="submit"
                    disabled={loading}
                >
                    Cancel
                </button>

                <button
                    className="self-end text-bas bg-[#47B960] h-8 px-7 py-0 text-white"
                    type="submit"
                    disabled={loading || !form.title || !form.content}
                >
                    Save
                </button>
            </footer>
        </form>
    );
};
