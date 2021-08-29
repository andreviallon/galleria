import {
  SlideshowState,
  SlideshowActionType,
  SLIDESHOW_ACTION,
} from "./SlideshowActions";

export const SlideshowReducer = (
  state: SlideshowState,
  action: SlideshowActionType
) => {
  console.log("hello");

  switch (action.type) {
    case SLIDESHOW_ACTION.START:
      console.log(1, { ...state, isSlideshowPlaying: true });
      return { ...state, isSlideshowPlaying: true };
    case SLIDESHOW_ACTION.EXIT:
      console.log(2, { ...state, isSlideshowPlaying: false });

      return { ...state, isSlideshowPlaying: false };
    default:
      return state;
  }
};
