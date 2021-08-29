import React, {
  createContext,
  ReactElement,
  ReactNode,
  useReducer,
} from "react";
import { SlideshowContextType, SlideshowState } from "./SlideshowActions";
import { SlideshowReducer } from "./SlideshowReducer";

export const slideshowContext = createContext({} as SlideshowContextType);

export const initialState: SlideshowState = {
  isSlideshowPlaying: false,
};

export function SlideshowContext({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [slideshowState, dispatch] = useReducer(SlideshowReducer, initialState);

  return (
    <slideshowContext.Provider value={{ slideshowState, dispatch }}>
      {children}
    </slideshowContext.Provider>
  );
}
