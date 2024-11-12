export const counterReducer=(state,action)=>{
    switch (action.type){
        case 'increment':
            return  {count:state.count++};
        case 'decrement':
            return {count:state.count--};
        default:
            return state;
    }
}
