import { createContext } from "react";
import { TodoState } from "../todo.types";

export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
};

export const TodoContext = createContext({} as TodoContextProps);
