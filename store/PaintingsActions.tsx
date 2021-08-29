import { Dispatch } from "react";
import { Painting } from "../models/painting";

export interface PaintingsState {
  paintings: Painting[];
  selectedPainting: Painting | undefined;
  isSlideshowPlaying: boolean;
}

export enum PAINTINGS_ACTION {
  START_SLIDESHOW = "start slideshow",
  EXIT_SLIDESHOW = "exit slideshow",
  SET_SELECTED_PAINTING = "set selected painting",
  CLEAR_SELECTED_PAINTING = "clear selected painting",
}

export type PaintingsActionType = {
  type: PAINTINGS_ACTION;
  slug?: string | string[] | undefined;
};

export type PaintingsContextType = {
  paintingsState: PaintingsState;
  dispatch: Dispatch<PaintingsActionType>;
};
