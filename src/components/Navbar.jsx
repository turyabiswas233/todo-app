import React, { useReducer } from "react";
const ACTIVE_TAB = {
  All: "all",
  Acitve: "active",
  Completed: "completed",
};
const useNavReducer = () => {
  const [curState, dispatch] = useReducer(reducer, ACTIVE_TAB.All);
  function reducer(action, state) {
    switch (action.type) {
      case ACTIVE_TAB.All:
        return action.state;
      case ACTIVE_TAB.Acitve:
        return action.state;
      case ACTIVE_TAB.Completed:
        return action.state;
      default:
        return state.state;
    }
  }
  return {
    curState,
    Nav: (
      <div className="w-1/2 mx-auto overflow-x-hidden">
        <nav className=" max-w-[500px] mx-auto">
          <ul className="border-b-[1pt] border-prime_gray w-auto grid grid-cols-3 gap-5 md:gap-[4rem] text-center text-sm px-5">
            <li
              className={`relative after:transition-colors after:absolute after:w-full after:rounded-tl-md after:rounded-tr-md after:h-1
             ${
               curState == ACTIVE_TAB.All && "after:bg-prime_blue"
             } after:bottom-0 pb-4 font-semibold after:left-0 `}
              onClick={() =>
                dispatch({ type: ACTIVE_TAB.All, state: ACTIVE_TAB.All })
              }
            >
              All
            </li>
            <li
              className={`relative after:transition-colors after:absolute after:w-full after:rounded-tl-md after:rounded-tr-md after:h-1
             ${
               curState == ACTIVE_TAB.Acitve && "after:bg-prime_blue"
             } after:bottom-0 pb-4 font-semibold after:left-0 `}
              onClick={() =>
                dispatch({
                  type: ACTIVE_TAB.Acitve,
                  state: ACTIVE_TAB.Acitve,
                })
              }
            >
              Active
            </li>
            <li
              className={`relative after:transition-colors after:absolute after:w-full after:rounded-tl-md after:rounded-tr-md after:h-1
             ${
               curState == ACTIVE_TAB.Completed && "after:bg-prime_blue"
             } after:bottom-0 pb-4 font-semibold after:left-0 `}
              onClick={() =>
                dispatch({
                  type: ACTIVE_TAB.Completed,
                  state: ACTIVE_TAB.Completed,
                })
              }
            >
              Completed
            </li>
          </ul>
        </nav>
      </div>
    ),
  };
};

export { useNavReducer, ACTIVE_TAB };
