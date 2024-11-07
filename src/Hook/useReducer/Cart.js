import {useReducer} from "react";
import {cartReducer} from "./cartReducer";

const initialState={
    items:[],
    total:0
}
function Cart(){
    const [state,dispatch]=useReducer(cartReducer,initialState)
    const addItem=(id,name,price,quantity)=>{
        dispatch({
            type:'addItem',
            payload:{id,name,price,quantity}
        })
    }
    const removeItem=(id)=>{
        dispatch({type:'removeItem',payload:{id}})
    }
    const  incrementQuantity=(id)=>{
        dispatch({type:'incrementQuantity',payload:{id}})
    }
    const decrementQuantity = (id) => {
        dispatch({ type: 'decrementQuantity', payload: { id } });
    };
    const calculateTotal=()=>{
        dispatch({type:'calculateTotal'})
    }
    return(
        <div>
            <h2>Shopping Cart</h2>
            <button onClick={()=>addItem(1,'Apple',0.5,1)}>Add apple</button>
            <button onClick={()=>addItem(2,'Orange',0.7,1)}>Add Orange</button>

            <ul>
                {state.items.map((item)=>(
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                        <button onClick={()=>incrementQuantity(item.id)}>+</button>
                        <button onClick={()=>decrementQuantity(item.id)}>-</button>
                        <button onClick={()=>removeItem(item.id)}> Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={calculateTotal}>Calculate Total</button>
            <strong> Total: ${state.total.toFixed(2)}</strong>
        </div>
    )

}

export default Cart