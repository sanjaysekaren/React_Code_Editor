
const InitialState = {
    output: 'Code and Execute...'
}


const ExecuteReducer =  (state = InitialState, action) => {
    if (action.type === 'ExecuteCodeAction') {
        console.log(action)
        return { ...state, output: action.payload }
    }
    return state;
}

export default ExecuteReducer;