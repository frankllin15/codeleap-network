import api from "../util/api";

export const addPostMutation = (post: CreatePost) => {
    return api.post("/careers/", post);
};

export const deletePostMutation = (payload: DeletePost) => {
    return api.delete(`/careers/${payload.id}/`);
};

export const updatePostMutation = (payload: UpdatePost) => {
    return api.patch(`/careers/${payload.id}/`, payload.data);
};
