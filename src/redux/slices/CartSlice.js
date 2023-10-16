import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.find(item => item.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += newItem.quantity;
        } else {
          state.push(newItem);
        }
      },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
    clearCart: state => {
      return [];
    },
    increaseQuantity: (state, action) => {
        const itemId = action.payload.id;
        const item = state.find(item => item.id === itemId);
        if (item) {
          item.quantity += 1;
        }
      },
      decreaseQuantity: (state, action) => {
        const itemId = action.payload.id;
        const item = state.find(item => item.id === itemId);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },
  },
});

export const {addToCart, removeFromCart, clearCart, increaseQuantity,decreaseQuantity} =
  CartSlice.actions;
export default CartSlice.reducer;
