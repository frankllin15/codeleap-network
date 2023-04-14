import { useState } from "react";
import { addPostMutation } from "../actions/mutations";
import { useMutation } from "../hooks/useMutation";
import { useAuth, usePosts } from "../redux/hooks";

export const NewPost = () => {
    const { user } = useAuth();
    const { fetchPosts } = usePosts();

    const { mutate, loading } = useMutation(addPostMutation, {
        onSuccess: () => {
            fetchPosts({ offset: "0" });
            setForm({
                title: "",
                content: "",
            });
        },
    });
    const [form, setForm] = useState({
        title: "",
        content: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate({ ...form, username: user.username });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-start p-6 mb-6 border border-[#999999] rounded-2xl"
        >
            <h1 className="text-[22px] mb-6 font-bold">Create a new post</h1>
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
            <button
                className="self-end text-bas bg-primary h-8 px-7 py-0 text-white"
                type="submit"
                disabled={loading || !form.title || !form.content}
            >
                Create
            </button>
        </form>
    );
};
