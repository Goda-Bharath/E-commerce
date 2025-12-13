import { configureStore } from "@reduxjs/toolkit";
import carsReduser from './Addcart.slice'

export const store = configureStore ({
    reducer: {
        cars:carsReduser
    }
})