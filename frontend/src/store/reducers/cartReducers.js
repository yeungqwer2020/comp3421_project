const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {

    var cart = state.cart;

    switch (action.type) {

        case "Add_to_cart":
            cart.push(action.payload);

            return {
                ...state,
                cart: cart
            };
        case 'UPDATE_CART_QUANTITY':

            let item = cart.find(item => item.product._id == action.payload.productId);

            let newCart = cart.filter(item => item.product._id != action.payload.productId);

            console.error("UPDATE_CART_QUANTITY", {item:item, payload:action.payload});

            item.quantity = action.payload.quantity;

            newCart.push(item);

            return {
                ...state,
                cart: newCart
            };
        case "Remove_from_cart":
            return {
                ...state,
                cart: cart.filter(item => item.product.id !== action.payload.productId)
            };

        default: return state;
    }

}

export default cartReducer;