import React, { useState, useReducer, lazy, Suspense, useEffect } from "react";
import { ACTIVE_TAB, useNavReducer } from "./components/Navbar";

//set default variables
export const ACTION = {
  TOGGOLE_TODO: "toggle-todo",
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo",
  DELETE_ALL: "delete-all",
};

// lazy components
const All = lazy(() => import("./components/All"));
const Active = lazy(() => import("./components/Active"));
const Complete = lazy(() => import("./components/Completed"));
function App() {
  // import navbar and state_tab
  const { curState, Nav } = useNavReducer();
  const [todo, seTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  // delete all completed todo
  function deleteSelectedTodos(todos) {
    return todos?.filter((todo) => !todo?.complete);
  }

  //  function for creating todos
  function reducer(todos, action) {
    switch (action.type) {
      case ACTION.ADD_TODO:
        return [...todos, newTodos(action.payload.todo)];
      case ACTION.TOGGOLE_TODO:
        return todos?.map((e) => {
          if (e?.id === action.payload.id) {
            return { ...e, complete: !e?.complete };
          }
          return { ...e };
        });
      case ACTION.DELETE_TODO:
        return todos?.filter((e) => e?.id !== action.payload.id);
      case ACTION.DELETE_ALL:
        return deleteSelectedTodos(todos);
      default:
        break;
    }
  }

  function newTodos(todo) {
    return { id: Date.now(), todo: todo, complete: false };
  }

  //submit handle
  function handleSubmit(e) {
    e.preventDefault();
    if (todo == "") return;
    dispatch({ type: ACTION.ADD_TODO, payload: { todo: todo } });
    seTodo("");
  }

  return (
    <div className="text-prime_black font-montserrat cursor-default">
      <h1 className="py-10 text-center font-bold text-3xl font-raleway ">
        #todo
      </h1>
      {Nav}
      <div className="w-1/2 mx-auto my-3 max-w-[500px]">
        {curState !== ACTIVE_TAB.Completed && (
          <form
            className="grid grid-cols-4 gap-4 h-12 text-sm"
            onSubmit={handleSubmit}
          >
            <input
              className="col-span-3 rounded-xl p-3 border-none outline-none ring-1 ring-prime_gray"
              type="text"
              placeholder="add details"
              value={todo}
              onChange={(e) => {
                seTodo(e.target.value);
              }}
            />
            <button
              className="rounded-xl  bg-prime_blue text-white"
              type="submit"
            >
              Add
            </button>
          </form>
        )}
        <Suspense
          fallback={
            <h2 className="scale-150 text-2xl font-bold text-center mt-14">
              Loading...
            </h2>
          }
        >
          {curState == ACTIVE_TAB.All && (
            <All state={state} dispatch={dispatch} />
          )}
          {curState == ACTIVE_TAB.Acitve && (
            <Active state={state} dispatch={dispatch} />
          )}
          {curState == ACTIVE_TAB.Completed && (
            <Complete state={state} dispatch={dispatch} tabState={curState} />
          )}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
