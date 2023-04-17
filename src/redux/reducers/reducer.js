import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: {},
    isShowPopup: false,
    currentUser: {
        email: '',
        password: '',
    },
    listCart: []
}


// popupReducer
const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        showPopup: (state, action) => {
            state.isShowPopup = true;
            state.product = action.payload;
        },
        hidePopup: (state) => {
            state.isShowPopup = false;
            state.product = {};
        }
    }
});

export const { showPopup, hidePopup } = popupSlice.actions;
export const popupReducer = popupSlice.reducer;

// authReducer
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload;
        },
        logout: (state) => {
            state.currentUser = {
                email: '',
                password: '',
            };
        },
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;


// cartReducer
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;
            const productExists = state.listCart.some(item => item._id.$oid === payload._id.$oid);
            //
            if (productExists) {
                const cartList = state.listCart.map(item => {
                    if (item._id.$oid === payload._id.$oid) {
                        return { ...item, quantity: item.quantity + payload.quantity };
                    }
                    return item;
                });
                state.listCart = cartList;
            } else {
                // const cartList = [...state.listCart, payload];
                // state.listCart = cartList;
                state.listCart.push(payload);
            }
        },
        removeFromCart: (state, action) => {
            const cartList = state.listCart.slice();
            const index = cartList.findIndex(item => item.id === action.payload);
            cartList.splice(index, 1);
            state.listCart = cartList;
        },
        updateQuantity: (state, action) => {
            const cartList = state.listCart.slice();
            const index = cartList.findIndex(item => item._id.$oid === action.payload.id);
            cartList[index].quantity = action.payload.quantity;
            state.listCart = cartList;
        },
        updateCart: (state, action) => {
            state.listCart = action.payload;
        },
        resetCart: (state) => {
            state.listCart = [];
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, updateCart, resetCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
