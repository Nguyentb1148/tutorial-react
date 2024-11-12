import {useEffect, useState} from "react";

function Timer(){
    const[seconds,setSeconds]=useState(0);
    useEffect(() => {
        const interval=setInterval(()=>{
            setSeconds(prevSeconnds=>prevSeconnds+1);
        },1000)
        return() => clearInterval(interval)

    }, []);
    return <div>Time: {seconds}</div>
}
export default  Timer