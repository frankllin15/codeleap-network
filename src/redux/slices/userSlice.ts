import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IUser = {
    username: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginReducer: (state, action: PayloadAction<IUser>) => {
            state.username = action.payload.username;
        },
        logoutReducer: (state) => {
            state.username = "";
        },
    },
});

export const { loginReducer, logoutReducer } = userSlice.actions;
export default userSlice.reducer;
