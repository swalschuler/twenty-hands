import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { clipReducer } from "./clipReducer";
import { currentClipReducer } from "./currentClipReducer";

export default combineReducers({
  replaceMe: () => "Dummy reducer",
  form: formReducer,
  clips: clipReducer,
  currentClip: currentClipReducer
});
