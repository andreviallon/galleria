import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { PAINTINGS_ACTION } from "../store/PaintingsActions";
import { paintingsContext } from "../store/PaintingsStore";

const Painting = () => {
  const { paintingsState, dispatch } = useContext(paintingsContext);
  const router = useRouter();
  useEffect(() => {
    const { slug } = router.query;
    dispatch({ type: PAINTINGS_ACTION.SET_SELECTED_PAINTING, slug });
  }, [router, dispatch, paintingsState.selectedPainting]);

  return <div>hello</div>;
};

export default Painting;
