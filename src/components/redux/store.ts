import { configureStore } from "@reduxjs/toolkit";

import { currencies_reducer } from "./currencies_slice";

export const store = configureStore({
    reducer: {
        currencies: currencies_reducer
    }
})