import {
  PaintingsState,
  PaintingsActionType,
  PAINTINGS_ACTION,
} from "./PaintingsActions";

export const PaintingsReducer = (
  state: PaintingsState,
  action: PaintingsActionType
) => {
  switch (action.type) {
    case PAINTINGS_ACTION.START_SLIDESHOW:
      return { ...state, isPaintingsPlaying: true };
    case PAINTINGS_ACTION.EXIT_SLIDESHOW:
      return { ...state, isPaintingsPlaying: false };
    default:
      return state;
  }
};
