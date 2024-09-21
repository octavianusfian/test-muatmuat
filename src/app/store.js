import { configureStore } from "@reduxjs/toolkit";
import allproductsReducer from "../features/allproducts/allproductsSlice";

export const store = configureStore({
  reducer: {
    allproducts: allproductsReducer,
  },
});

export {
  addProduct,
  deleteProduct,
  editProduct,
  searchProducts,
  sortProducts

} from "../features/allproducts/allproductsSlice";
