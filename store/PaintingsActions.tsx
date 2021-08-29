import { Dispatch } from "react";

export interface PaintingsState {
  isSlideshowPlaying: boolean;
}

export enum PAINTINGS_ACTION {
  START = "start",
  EXIT = "exit",
}

export type PaintingsActionType = {
  type: string;
  payload?: any;
};

export type PaintingsContextType = {
  paintingsState: PaintingsState;
  dispatch: Dispatch<PaintingsActionType>;
};
