import { ADD_TODO, Remove_ToDo } from "../Action/Index";


const initialState = {
    list: []
}
export const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO:

            const { data, id } = action.payload
            console.log(action.id)
            return {
                ...state,
                list: [...state.list, { data, id }]
            }

        case Remove_ToDo:
            const deleteList = state.list.filter((del) => del.id !== action.id)
            
            // const deletedata = state.list.splice(1,0)
            // console.log(action.id);
            // console.log("ListID",state.list.id)
            return {
                ...state,
                list: deleteList
            }
        default: return state;
    }
}

