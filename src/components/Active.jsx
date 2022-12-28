import React, { useState, useEffect } from "react";
import Todo from "./Todo";

function Active({ state, dispatch }) {
  const [currentTodos, setCurTodos] = useState([]);
  useEffect(() => {
    setCurTodos(state?.filter((todo) => !todo?.complete));
  }, [state]);
  return (
    <div>
      <section className="mt-8">
        <ul className=" space-y-2">
          {currentTodos == 0 ? (
            <h2 className="text-center font-bold mx-5 w-auto scale-150 text-xl">
              No task to complete. <br />
              Add new one or go to
              <span className="text-prime_blue"> Completed</span> section to
              <span className="text-prime_red"> delete</span> them.
            </h2>
          ) : (
            currentTodos?.map((todo) => {
              if (!todo?.complete)
                return (
                  <Todo
                    key={todo?.id}
                    id={todo?.id}
                    todo={todo?.todo}
                    isComplete={todo?.complete}
                    dispatch={dispatch}
                  />
                );
            })
          )}
        </ul>
      </section>
    </div>
  );
}

export default Active;
