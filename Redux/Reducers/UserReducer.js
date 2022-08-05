import * as t from "../Types";

const initialState = {
  userInfo: ["user 1", "user 2"],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_USER_INFO: {
      return {
        ...state,
        userInfo: [...state.userInfo, action.payload],
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
