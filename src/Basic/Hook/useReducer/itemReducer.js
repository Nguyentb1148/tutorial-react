export  const itemReducer=(state,action)=>{
    switch (action.type){
        case 'addItem':
            return  {items:[...state.items,action.payload]};
        case 'removeItem':
            return  {items:state.items.filter(item=>item!==action.payload)};
        default:
            return state;
    }
}
