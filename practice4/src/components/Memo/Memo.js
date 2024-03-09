import React from 'react'
import { useState, useMemo } from 'react'

const Memo = () => {
    const [todos, setTodos] = useState([])
    const [count, setCount] = useState(0)

    const expensiveCalculation = (num) => {
        console.log("Calulating........")
        for(let i=0; i<1000000000; i++){
            num = num + 1
        }
        return num
    }

    // const calculation = expensiveCalculation(count)
    const calculation = useMemo(() => 
        expensiveCalculation(count)
    , [count])

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"] )
    }

    const addNumber = () => {
        setCount((c) => c+1)
    }

    return (
        <div className='p-4 m-4'>
            <div className='p-2 m-2'>
                <h2>My Todos</h2>
                {
                    todos.map((t, i) => (
                        <h2 key={i}>{t}</h2>
                    ))
                }
                <button onClick={addTodo} className='bg-zinc-500'>Add Todo</button>
            </div>
            <div className='p-2 m-2'>
                <h2>Count : {count}</h2>
                <button onClick={addNumber} className='bg-zinc-500'>Increment</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    )
}

export default Memo;