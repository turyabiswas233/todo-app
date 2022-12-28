import React, { useEffect, useState } from "react";
import { ACTION } from "../App";

import Todo from "./Todo";
import DeleteBtnWhite from "/deleteWhite.svg";

function Completed({ state, dispatch, tabState }) {
  const [currentTodos, setCurTodos] = useState([]);
  useEffect(() => {
    setCurTodos(state?.filter((todo) => todo?.complete));
  }, [state]);
  return (
    <div>
      <section className="mt-8">
        <ul className=" space-y-2">
          {currentTodos == 0 ? (
            <h2 className="text-center font-bold text-prime_red scale-150 text-xl">
              Complete your task to delete theme!{" "}
            </h2>
          ) : (
            currentTodos?.map((todo) => {
              return (
                <Todo
                  key={todo?.id}
                  id={todo?.id}
                  todo={todo?.todo}
                  isComplete={todo?.complete}
                  dispatch={dispatch}
                  curTab={tabState}
                />
              );
            })
          )}
        </ul>
      </section>
      <button
        className={`flex space-x-2 bg-prime_red p-4 rounded-lg text-white float-right my-10 transition-colors hover:bg-prime_red/80 ${
          currentTodos?.length == 0 &&
          "disabled:bg-prime_black/60 cursor-not-allowed"
        }`}
        onClick={() => dispatch({ type: ACTION.DELETE_ALL })}
        disabled={currentTodos?.length == 0}
      >
        <img
          className="bg-contain aspect-square"
          src={DeleteBtnWhite}
          width={20}
          height={20}
          alt=""
        />
        <p>delete all</p>
      </button>
    </div>
  );
}

export default Completed;
