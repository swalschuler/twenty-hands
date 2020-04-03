import { YT_FETCH_CLIPS } from "../actions/types";

export const clipReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case YT_FETCH_CLIPS:
      return { ...payload.items };
    default:
      return state;
  }
};
