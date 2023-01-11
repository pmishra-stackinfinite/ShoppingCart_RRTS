export const ADD_TODO = "ADD_TODO"
export const Remove_ToDo = "Remove_ToDo"


export const Todo = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            data: data,
            id: new Date().getTime().toString()
        }
    }

}


export const RemoveToDo = (id) => {
    return {
        type: Remove_ToDo,
        id
    }
}
