import {useReducer} from "react";
import {itemReducer} from "./itemReducer";

function  ItemList(){
    const  initialState={items:[]};
    const [state,dispatch]=useReducer(itemReducer,initialState);
    const addItem =(item)=>{
        dispatch({type:'addItem',payload:item})
    }
    const removeItem=(item)=>{
        dispatch({type:'removeItem', payload:item})
    }
    return(
        <div>
            <h2>Item Lists</h2>
            <input
                type='text'
                placeholder='Enter item here'
                onKeyDown={(e)=> {
                    if (e.key === 'Enter' && e.target.value) {
                        addItem(e.target.value)
                        e.target.value = '';//clear input after
                    }
                }}
            />
            <ul>
                {state.items.map((item,index)=>(
                    <li key={index}>
                        {item}<button onClick={()=>removeItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ItemList