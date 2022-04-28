import React from 'react';

import { TodoProvider } from './state/todo.provider';
import { TodoList } from './todo.list';

export const TodoPage = () => {


    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    )
}