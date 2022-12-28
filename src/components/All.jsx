import React from "react";
import Todo from "./Todo";

function All({ state, dispatch }) {
  return (
    <div>
      <section className="mt-8">
        <ul className=" space-y-2">
          {state == 0 ? (
            <h2 className="text-center font-bold scale-150 text-xl">
              Add a task...{" "}
            </h2>
          ) : (
            state?.map((todo) => {
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

export default All;
