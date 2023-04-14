import api from "../util/api";

interface IGetPostsResponse {
    count: number;
    next: string;
    previous: string;
    results: IPost[];
}

export const getPostsQuery = async (
    params: GetPosts
): Promise<IGetPostsResponse> => {
    const resp = await api.get(`/careers/?${new URLSearchParams(params)}`);
    return resp.data;
};
