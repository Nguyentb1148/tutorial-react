import {useReducer} from "react";
import {counterReducer} from "./counterReducer";

function Counter(){
    const initialState={count:0};
    const[state,dispatch]=useReducer(counterReducer,initialState);
    return  (
        <div>
            <p> Count: {state.count}</p>
            <button onClick={()=>dispatch({type:'increment'})}> Increment</button>
            <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
        </div>
    )
}
export  default Counter