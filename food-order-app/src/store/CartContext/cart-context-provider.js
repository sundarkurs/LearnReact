import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { CartConstants as cartConst } from "../../common/Constants";

/*
item {
  id: '',
  name: '',
  price: 0,
  quantity: 0,
}
*/

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const addItemToTheCart = (state, newItem) => {
  const newTotalPrice = state.totalPrice + newItem.price * newItem.quantity;

  const cartItemIndex = state.items.findIndex((item) => {
    return item.id === newItem.id;
  });

  const cartItem = state.items[cartItemIndex];

  let updatedCartItems;

  // Already Item found in the Cart
  if (cartItem) {
    const updatedItem = {
      ...cartItem,
      quantity: cartItem.quantity + newItem.quantity,
    };

    updatedCartItems = [...state.items];
    updatedCartItems[cartItemIndex] = updatedItem;
  } else {
    updatedCartItems = state.items.concat(newItem);
  }

  console.log(updatedCartItems);
  return { items: updatedCartItems, totalPrice: newTotalPrice };
};

const removeItemFromTheCart = (state, id) => {
  const cartItemIndex = state.items.findIndex((item) => {
    return item.id === id;
  });

  const cartItem = state.items[cartItemIndex];

  const newTotalPrice = state.totalPrice - cartItem.price;

  let updatedCartItems;

  if (cartItem.quantity === 1) {
    updatedCartItems = state.items.filter((item) => {
      return item.id !== id;
    });
  } else {
    const updatedItem = {
      ...cartItem,
      quantity: cartItem.quantity - 1,
    };

    updatedCartItems = [...state.items];
    updatedCartItems[cartItemIndex] = updatedItem;
  }

  return { items: updatedCartItems, totalPrice: newTotalPrice };
};

const clearCart = (state) => {
  return { items: [], totalPrice: 0 };
};

const cartReducer = (state, action) => {
  if (action.type == cartConst.ADD) {
    console.log(action.item);
    return addItemToTheCart(state, action.item);
  }

  if (action.type == cartConst.REMOVE) {
    return removeItemFromTheCart(state, action.id);
  }

  if (action.type == cartConst.CLEAR) {
    return clearCart(state);
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispathCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleRemoveItem = (id) => {
    dispathCartAction({ type: cartConst.REMOVE, id: id });
  };

  const handleAddItem = (item) => {
    dispathCartAction({ type: cartConst.ADD, item: item });
  };

  const handleClearCart = () => {
    dispathCartAction({ type: cartConst.CLEAR });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
        clearCart: handleClearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
