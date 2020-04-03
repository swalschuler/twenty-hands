import youtube from "../apis/youtube";
import { YT_FETCH_CLIPS, CHOOSE_CLIP } from "./types";
import { YOUTUBE_KEY } from "../apis/apikeys";

export const fetchClips = query => async dispatch => {
  const response = await youtube.get("/search", {
    params: {
      q: query,
      part: "snippet",
      maxResults: 5,
      type: "video",
      key: YOUTUBE_KEY
    }
  });

  dispatch({ type: YT_FETCH_CLIPS, payload: response.data });
};

export const chooseClip = clip => ({
  type: CHOOSE_CLIP,
  payload: clip
});
