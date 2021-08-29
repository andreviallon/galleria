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
    case PAINTINGS_ACTION.SET_SELECTED_PAINTING:
      return {
        ...state,
        selectedPainting: state.paintings.find(
          (painting) => painting.slug === action.slug
        ),
      };
    case PAINTINGS_ACTION.CLEAR_SELECTED_PAINTING: {
      return { ...state, selectedPainting: undefined };
    }
    default:
      return state;
  }
};
