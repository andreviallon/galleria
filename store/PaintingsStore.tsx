import React, {
  createContext,
  ReactElement,
  ReactNode,
  useReducer,
} from "react";
import { PaintingsContextType, PaintingsState } from "./PaintingsActions";
import { PaintingsReducer } from "./PaintingsReducer";
import { paintings } from "../data/paintings";

export const paintingsContext = createContext({} as PaintingsContextType);

export const initialState: PaintingsState = {
  paintings: paintings,
  isSlideshowPlaying: false,
};

export function PaintingsContext({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [paintingsState, dispatch] = useReducer(PaintingsReducer, initialState);

  return (
    <paintingsContext.Provider value={{ paintingsState, dispatch }}>
      {children}
    </paintingsContext.Provider>
  );
}
