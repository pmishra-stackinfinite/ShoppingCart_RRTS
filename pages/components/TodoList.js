import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Todo } from '../../Redux/Action/Index'
import { RemoveToDo } from '../../Redux/Action/Index'

const TodoList = () => {

    const [Name, setName] = useState('')
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.ToDoReducer.list)

    const deleteHandler = (data) => {
        console.log(data)
        dispatch(
            RemoveToDo(data)
        )
    }

    // console.log(selector);
    return (
        <div>
            <input name="name" value={Name} type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={() => dispatch(Todo(Name))}>ADD NAME</button>

            <table className='table table-stribe'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        selector.map((item) => (
                            <tr key={item.id}>
                                <td>{item.data}</td>
                                <td>{item.id}</td>
                                <button onClick={() => deleteHandler(item.id)}>DELETE</button>
                                <button type="button" className="btn btn-primary bg-black">Primary</button>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoList