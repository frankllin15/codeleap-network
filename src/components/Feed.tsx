import { useCallback, useEffect, useRef, useState } from "react";
import { usePosts } from "../redux/hooks";
import { Post } from "./Post";
import { ModalPost } from "./ModalPost";
import { GoTop } from "./GoToTop";

export const Feed = () => {
    const { posts, fetchPosts, incrementPost, loading } = usePosts();
    const [offset, setOffset] = useState(0);

    const loadMoreRef = useRef<HTMLDivElement>(null);

    const defineObserver = useCallback(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const target = entries[0];

                if (target.isIntersecting) {
                    setOffset((prev) => prev + 10);
                }
            },
            { threshold: 1.0, rootMargin: "10px", root: null }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }
    }, [offset]);
    useEffect(() => {
        fetchPosts({ offset: "0" });

        defineObserver();
    }, []);

    useEffect(() => {
        if (offset > 0) {
            incrementPost({ offset: offset.toString() });
        }
    }, [offset]);

    return (
        <div className="flex flex-col justify-between items-center gap-6 min-h-screen">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
            <div className="mt-6" ref={loadMoreRef}>
                {loading && "Loading..."}
            </div>

            <ModalPost />
            <GoTop />
        </div>
    );
};
