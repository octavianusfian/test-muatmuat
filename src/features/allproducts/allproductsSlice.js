import { createSlice, nanoid } from "@reduxjs/toolkit";
import photosLink from "../../databasePhotos";

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};

const initialState = {
  products: [],
  searchTerm: ""
};

export const allproductsSlice = createSlice({
  name: "allproducts",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        name: action.payload.name,
        price: action.payload.price,
        stock: action.payload.stock,
        description: action.payload.description,
        image: photosLink[getRandomInteger(0, 2)],
        id: nanoid(),
      });
    },
    deleteProduct: (state, action) => {
      const updated = state.products.filter((product) => {
        return product.id !== action.payload;
      });

      state.products = updated;
    },
    sortProducts: (state, action) => {
      let updated;
      if (action.payload.sortBy == "price") {
        if (action.payload.sortOrder == "asc") {
          updated = state.products.sort((a, b) => a.price - b.price);
        } else {
          updated = state.products.sort((a, b) => b.price - a.price);
        }
      } else if (action.payload.sortBy == "stock") {
        if (action.payload.sortOrder == "asc") {
          updated = state.products.sort((a, b) => a.stock - b.stock);
        } else {
          updated = state.products.sort((a, b) => b.stock - a.stock);
        }
      }

      state.products = updated;
    },
    searchProducts: (state, action) => {
      state.searchTerm = action.payload;
    },
    editProduct: (state, action) => {
      const updated = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...action.payload.data, image: product.image };
        }

        return product;
      });

      state.products = updated;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  deleteProduct,
  editProduct,
  searchProducts,
  sortProducts,
} = allproductsSlice.actions;

export default allproductsSlice.reducer;
