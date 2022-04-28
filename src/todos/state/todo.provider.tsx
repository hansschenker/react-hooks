import React, { useReducer } from 'react';

import { TodoContext } from './todo.context';
import { TodoState } from '../todo.types';
import { todoReducer } from './todo.reducer';

const INITIAL_STATE: TodoState = {
    todos: [
        {
            id: '1',
            title: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            title: 'Piedra del alma',
            completed: false
        },
    ],

}




interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props ) => {

    const [ todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE );
    //console.log("todoProvider:todoState", todoState);

    const toggleTodo = ( id: string ) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }


    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}