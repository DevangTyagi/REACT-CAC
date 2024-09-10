import React, { useContext } from 'react'
import {createContext} from 'react'

export const TodoContext = createContext({
    todos : [
        {
           id : 1,
           todo : "Todo Task" ,
           completed : false,
        } ,
        {} , 
        {},
    ],
    addTodo : (todo) => {}  , //In designing of Context apis local we just declare functionality in context ,their internal working we declare in app.jsx or to the places where thee context are used
    updatetodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleComplete :  (id) => {}

})

export const TodoContextProvider = TodoContext.Provider

export const usetodo = () => {
    return useContext(TodoContext)
}