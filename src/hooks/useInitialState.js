import {useState} from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state ,setState ]=useState(initialState);
    const addToCart = payload => {
        setState({
         ...state,
         cart: [...state.cart, payload]
        })
    }
    const removeFromCart = payload => {
        const index = payload;
        const newCart = state.cart; // Copio la cart actual
        newCart.splice(index, 1); // Elimino 1 elemento del array contando a partir de la posicion = index
        setState({
         ...state,
         // cart: state.cart.filter(items => {return items.id !== payload.id}),
         cart: newCart,
        });
    }
    return {
        addToCart,
        removeFromCart,
        state,
    }
};

export default useInitialState;