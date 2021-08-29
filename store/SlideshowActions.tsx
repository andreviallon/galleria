import { Dispatch } from "react";

export interface SlideshowState {
  isSlideshowPlaying: boolean;
}

export enum SLIDESHOW_ACTION {
  START = "start",
  EXIT = "exit",
}

export type SlideshowActionType = {
  type: string;
  payload?: any;
};

export type SlideshowContextType = {
  slideshowState: SlideshowState;
  dispatch: Dispatch<SlideshowActionType>;
};
