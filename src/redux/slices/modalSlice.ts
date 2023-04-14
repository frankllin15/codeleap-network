import { createSlice } from "@reduxjs/toolkit";

interface IModalState {
    modal: IModalPost;
}

const initialState: IModalState = {
    modal: {
        type: "",
        isOpen: false,
    },
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalReducer: (state, action) => {
            state.modal = action.payload;
        },
    },
});

export const { setModalReducer } = modalSlice.actions;
export default modalSlice.reducer;
