import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPostsState {
    posts: IPost[];
    loading: boolean;
    error: any;
}

const initialState: IPostsState = {
    posts: [],
    loading: false,
    error: null,
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPostsReducer: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        },
        setLoadingReducer: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setErrorReducer: (state, action: PayloadAction<any>) => {
            state.error = action.payload;
        },
        incrementPostsReducer: (state, action: PayloadAction<IPost[]>) => {
            state.posts.push(...action.payload);
        },
    },
});

export const {
    addPostsReducer,
    incrementPostsReducer,
    setLoadingReducer,
    setErrorReducer,
} = postSlice.actions;

export default postSlice.reducer;
