import { CHOOSE_CLIP } from "../actions/types";

export const currentClipReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CHOOSE_CLIP:
      return { videoId: payload };
    default:
      return state;
  }
};
