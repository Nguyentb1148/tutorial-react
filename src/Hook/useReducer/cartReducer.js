export  const cartReducer=(state, action)=>{
    switch (action.type){
        case 'addItem':
            //check item is existed or not
            const existingItem= state.items.find(item=>item.id===action.payload.id);
            if(existingItem){
                return{
                    ...state,
                    items:state.items.map(item=>
                    item.id===action.payload.id?
                        {...item,quantity:item.quantity +action.payload.quantity}
                        : item),
                }
            }
            return {
                ...state,
                items:[...state.items,{...action.payload}]
            }
        case 'removeItem':
            return{
                ...state,
                items:state.items.filter(item=>item.id!== action.payload.id)
            }
        case 'incrementQuantity':
            return{
                ...state,
                items: state.items.map(item=> item.id=== action.payload.id
                ?{...item,quantity:item.quantity++}
                : item),
            }
        case 'decrementQuantity':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id && item.quantity > 1
                        ? {...item, quantity: item.quantity--}
                        : item)
            }
        case 'calculateTotal':
            const total= state.items.reduce(
                (sum,item)=>sum+item.price*item.quantity,0
            )
            return {
                ...state,
                total
            }
        default:
            return state

    }
}