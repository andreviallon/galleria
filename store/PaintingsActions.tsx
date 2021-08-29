import { Dispatch } from "react";
import { Painting } from "../models/painting";

export interface PaintingsState {
  paintings: Painting[];
  isSlideshowPlaying: boolean;
}

export enum PAINTINGS_ACTION {
  START_SLIDESHOW = "start slideshow",
  EXIT_SLIDESHOW = "exit slideshow",
}

export type PaintingsActionType = {
  type: string;
  payload?: any;
};

export type PaintingsContextType = {
  paintingsState: PaintingsState;
  dispatch: Dispatch<PaintingsActionType>;
};
