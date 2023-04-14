import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { loginReducer, logoutReducer } from "./slices/userSlice";
import {
    addPostsReducer,
    incrementPostsReducer,
    setErrorReducer,
    setLoadingReducer,
} from "./slices/postSlice";
import { setModalReducer } from "./slices/modalSlice";
import { getPostsQuery } from "../actions/queries";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePosts = () => {
    const { posts, loading } = useAppSelector((state) => state.posts);
    const dispatch = useAppDispatch();

    const fetchPosts = async (params: GetPosts) => {
        dispatch(setLoadingReducer(true));

        try {
            const response = await getPostsQuery(params);
            dispatch(addPostsReducer(response.results));
            dispatch(setLoadingReducer(false));
        } catch (error: any) {
            dispatch(setLoadingReducer(false));
            dispatch(setErrorReducer(error));
        }
    };

    const incrementPost = async (params: GetPosts) => {
        dispatch(setLoadingReducer(true));

        try {
            const response = await getPostsQuery(params);
            dispatch(incrementPostsReducer(response.results));
            dispatch(setLoadingReducer(false));
        } catch (error: any) {
            dispatch(setLoadingReducer(false));
            dispatch(setErrorReducer(error));
        }
    };

    return { posts, fetchPosts, incrementPost, loading };
};

export const useAuth = () => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const login = (user: IUser) => {
        dispatch(loginReducer(user));
    };

    const logout = () => {
        dispatch(logoutReducer());
    };

    return { user, login, logout };
};

export const useModal = () => {
    const { modal } = useAppSelector((state) => state.modal);
    const dispatch = useAppDispatch();

    const setModal = (modal: IModalPost) => {
        dispatch(setModalReducer(modal));
    };

    const closeModal = () => {
        dispatch(setModalReducer({ type: "", isOpen: false, data: null }));
    };

    return { modal, setModal, closeModal };
};
