export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const FOLLOW_USER = "FOLLOW_USER";
export const DELETE_FOLLOW = "DELETE_FOLLOW";
export const EDIT_USER = "EDIT_USER";

export const addUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    };
};

export const deleteUser = (payload) => {
    return {
        type: DELETE_USER,
        payload
    };
};

export const followUser = (payload) => {
    return {
        type: FOLLOW_USER,
        payload
    };
};

export const deleteFollow = (payload) => {
    return {
        type: DELETE_FOLLOW,
        payload
    };
};
export const editUser = (payload) => {
    return {
        type: EDIT_USER,
        payload
    };
};