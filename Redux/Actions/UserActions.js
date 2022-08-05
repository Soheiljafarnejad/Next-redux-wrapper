import * as t from "../Types";

export const addUserInfo = (user) => {
  return { type: t.ADD_USER_INFO, payload: user };
};
