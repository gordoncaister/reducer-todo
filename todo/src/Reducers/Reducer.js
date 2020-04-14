export const reducer = function (state, action) {
    switch (action.type){
        case 'toggle':
            return state.map(todo => {
                if(todo.id.toString() === action.payload) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
        case 'clear':
            return state.filter(todo => {
                return !todo.completed;
            })
        case 'add':
            return [...state, {item: action.payload, completed:false, id:new Date()}]
    }
}

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]