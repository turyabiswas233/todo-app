import React from "react";
import { ACTION } from "../App";
import DeleteBtn from "/delete.svg";
import { ACTIVE_TAB } from "./Navbar";

function Todo({ id, todo, isComplete, dispatch, curTab }) {
  return (
    <li className="flex space-x-1 font-semibold justify-between">
      <section className="space-x-2 flex">
        <input
          className="complete"
          type={"checkbox"}
          // checked={isComplete}
          defaultChecked={isComplete}
          onClick={() => {
            dispatch({
              type: ACTION.TOGGOLE_TODO,
              payload: { id: id },
            });
          }}
        />

        <p
          className={`${
            isComplete ? "line-through text-black/70" : "text-black"
          }`}
        >
          {todo}
        </p>
      </section>

      {curTab == ACTIVE_TAB.Completed && (
        <button
          onClick={() =>
            dispatch({ type: ACTION.DELETE_TODO, payload: { id: id } })
          }
        >
          <img
            className="bg-contain aspect-square"
            src={DeleteBtn}
            width={20}
            height={20}
            alt=""
          />
        </button>
      )}
    </li>
  );
}

export default Todo;
