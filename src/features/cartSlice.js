import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    carts: [],
    
    totalQuantity: 0,
  totalPrice: 0,
  
   
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemInCart = state.carts.find(item => item.id === action.payload.id);

            if(isItemInCart){
                const tempCart = state.carts.map(item => {
                    if(item.id === action.payload.id){
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQty * item.price;

                        return {
                            ...item, quantity: tempQty, totalPrice: tempTotalPrice
                        }
                    } else {
                        return item;
                    }
                });

                state.carts = tempCart;
                
            } else {
                state.carts.push(action.payload);
                
            }
        },

        removeItem: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload);
            state.carts = tempCart;
           
        },

        

        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.carts.reduce(
              (cartTotal, cartItem) => {
                console.log("carttotal", cartTotal);
                console.log("cartitem", cartItem);
                const  { price, quantity }=cartItem ;
                console.log(price, quantity);
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
          },

          increaseItemQuantity: (state, action)=>{
            state.carts= state.carts.map((item) => {
              if(item.id=== action.payload){
                return {...item, quantity: item.quantity + 1};
              }
              return item;
            })
          },
          decreaseItemQuantity: (state, action)=>{
            state.carts= state.carts.map((item) => {
              if(item.id=== action.payload){
                if(item.quantity>1){
                return {...item, quantity: item.quantity - 1};}
                else{
                  return item
                }
              }
              return item;
            })
          },

          
        

    }
});

export const {addToCart,removeItem, getCartTotal, increaseItemQuantity, decreaseItemQuantity} = cartSlice.actions;
export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;


export default cartSlice.reducer;






  