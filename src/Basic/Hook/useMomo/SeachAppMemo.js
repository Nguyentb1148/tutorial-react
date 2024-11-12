// import React, { useState } from 'react';
//
// function ItemList({ items, query }) {
//     console.log('ItemList rendered');
//     const filteredItems = items.filter((item) =>
//         item.toLowerCase().includes(query.toLowerCase())
//     );
//     return (
//         <ul>
//             {filteredItems.map((item, index) => (
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//     );
// }
//
// function SearchAppMemo() {
//     const [query, setQuery] = useState('');
//     const items = ['apple', 'banana', 'orange', 'pear', 'grape'];
//
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search items"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             />
//             <ItemList items={items} query={query} />
//         </div>
//     );
// }
//
// export default SearchAppMemo;

//use useMemo
import {useMemo, useState} from "react";

function ItemList({items,query}){
    console.log("ItemsList rendered")
    const filteredItems=useMemo(()=>{
        return items.filter((item)=>
            item.toLowerCase().includes(query.toLowerCase())
        )
    },[query,items])
    return(
        <ul>
            {filteredItems.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}
function  SearchAppMemo(){
    const [query,setQuery]=useState('')
    const items = ['apple', 'banana', 'orange', 'pear', 'grape'];
    return (
        <div>
            <input
                type='text'
                placeholder='Search items'
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
            <ItemList items={items} query={query}/>
        </div>
    )
}
export default SearchAppMemo