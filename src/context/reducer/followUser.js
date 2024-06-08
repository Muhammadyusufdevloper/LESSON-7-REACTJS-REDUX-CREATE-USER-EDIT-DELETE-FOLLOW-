import { FOLLOW_USER, DELETE_FOLLOW } from "../action";

const initialState = JSON.parse(localStorage.getItem("followUser")) || [];
export const follow = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            if (state.findIndex((el) => el.id === action.payload.id) < 0) {
                const newState = [...state, action.payload];
                localStorage.setItem("followUser", JSON.stringify(newState));
                return newState;
            } else {
                const filteredState = state.filter((follow) => follow.id !== action.payload.id);
                localStorage.setItem("followUser", JSON.stringify(filteredState));
                return filteredState;
            }
        case DELETE_FOLLOW:
            const updatedState = state.filter((follow) => follow.id !== action.payload.id);
            localStorage.setItem("followUser", JSON.stringify(updatedState));
            return updatedState;
        default:
            return state;
    }
};
