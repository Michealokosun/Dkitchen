const { createSlice } = require("@reduxjs/toolkit");
const initialState = [];

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.push({ ...action.payload, qnty: 1, active: true });
    },
    incrementqnty: (state, action) => {
      const { id } = action.payload;
      const index = state.find((item) => {
        return item.id == id;
      });

      if (index) {
        index.qnty += 1;
      } else {
        state.push({ ...action.payload, qnty: 1, active: true });
      }
    },
    decrementqnty: (state, action) => {
      const { id } = action.payload;
      const index = state.find((item) => {
        return item.id == id;
      });

      if (index && index.qnty > 1) {
        index.qnty -= 1;
      }
    },
    emptycart: (state, action) => {
      state.length = 0;
    },
    removefroncart: (state, action) => {
      const id = action.payload;

      return state.filter((item) => item.id !== id);
    },
  },
});

export const {
  addtocart,
  incrementqnty,
  decrementqnty,
  removefroncart,
  emptycart,
} = cartslice.actions;

export default cartslice.reducer;
