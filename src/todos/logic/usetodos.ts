import { useContext } from 'react';
import { TodoContext } from '../state/todo.context';


// custom hook
export const useTodos = () => {

    const { todoState, toggleTodo } = useContext( TodoContext );
    const { todos } = todoState;

    return {
        todos: todos,
        pendingTodos: todos.filter( todo => !todo.completed ).length,
        toggleTodo
    }
}

