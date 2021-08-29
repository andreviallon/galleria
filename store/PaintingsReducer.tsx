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
    case PAINTINGS_ACTION.START:
      return { ...state, isPaintingsPlaying: true };
    case PAINTINGS_ACTION.EXIT:
      return { ...state, isPaintingsPlaying: false };
    default:
      return state;
  }
};
