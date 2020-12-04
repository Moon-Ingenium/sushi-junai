import {loadState} from "../localstorage";

const persistedState = loadState("menuCart");

const menuCart = (state = persistedState || [], action) => {
    switch (action.type) {
        case 'ADD_MENU_ITEM':
            const { item } = action.payload
            return [...state, {
                name: item.name,
                price: item.price,
                category: item.category
            }];
        case 'CHANGE_ITEM':
            const { item } = action.payload
            return [...state, {
                name: item.name,
                category: item.category
            }];
        case 'SUB_FAV_ITEM':
        const { item } = action.payload
        return [...state, {
            name: item.name,
            category: item.category
        }];
        default:
            return state
    }
};

export default menuCart;