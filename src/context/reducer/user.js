import { ADD_USER, DELETE_USER, EDIT_USER } from "../action";

const initialState = JSON.parse(localStorage.getItem("user")) || [];

// Reducer
export const user = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newStateAfterAdd = [...state, action.payload];
            localStorage.setItem("user", JSON.stringify(newStateAfterAdd))
            return newStateAfterAdd;
        case DELETE_USER:
            const newStateAfterDelete = state.filter((el) => el.id !== action.payload.id)
            localStorage.setItem("user", JSON.stringify(newStateAfterDelete));
            return newStateAfterDelete;
        case EDIT_USER:
            const newStateAfterEdit = state.map((user) => user.id === action.payload.id ? { ...user, ...action.payload } : user);
            localStorage.setItem("user", JSON.stringify(newStateAfterEdit));
            return newStateAfterEdit;
        default:
            return state;
    }
};
