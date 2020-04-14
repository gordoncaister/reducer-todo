export const reducer = function (state, action) {
    switch (action.type){
        case 'toggle':
            console.log("clicked toggle")
            return state.map(todo => {
                console.log(action)
                console.log("id",todo.id);
                console.log("payload: ", action.payload);
                if(todo.id.toString() === action.payload) {
                    console.log("todo is now completed")
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
        case 'clear':
            return;
    }
}

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]