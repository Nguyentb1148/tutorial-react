import {useRef, useState} from "react";

function FocusInput(){
   const countRef=useRef(0);
   const [seconds,setSeconds]=useState(0);
   const increment=()=>{
       countRef.current++;
       console.log(countRef.current);
   }
   const startTimer=()=>{
       const interval=setInterval(()=>{
           setSeconds((prev)=>prev++);
           countRef.current++;
           console.log(countRef.current)
       },1000)
       return()=>{clearInterval(interval)}
   }
   return(
       <div>
           <p>Timer: {seconds}</p>
           <button onClick={startTimer}>Start Timers</button>
           <button onClick={increment}> Increment Ref Count</button>
       </div>
   )
}
export  default  FocusInput