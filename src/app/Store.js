import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./Slice/userSlice";
import registerSlice from "./Slice/registerSlice.js";
import adminSlice from "./Slice/adminSlice.js";
import formSlice from "./Slice/formSlice.js";

const store = configureStore({
    reducer: {
        userReducer: userSlice,
        registerReducer: registerSlice,
        adminReducer: adminSlice,
        formReducer: formSlice,
    },

})

export default store