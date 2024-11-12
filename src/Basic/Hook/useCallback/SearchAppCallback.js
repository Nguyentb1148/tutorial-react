// import {useState} from "react";
//
// function ItemList({items, filterItems}){
//     console.log("ItemList rendered");
//     return(
//         <ul>
//             {filterItems().map((item,index)=>(
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//     )
// }
// function SearchAppCallback(){
//     const [query,setQuery]=useState('')
//     const items=['apple','banana','orange','pear','grape']
//
//     const filterItems=()=>{
//         return items.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
//     }
//     return(
//         <div>
//             <input
//                 type='text'
//                 placeholder="Search items"
//                 value={query}
//                 onChange={(e)=>setQuery(e.target.value)}
//             />
//             <ItemList items={items} filterItems={filterItems}/>
//         </div>
//     )
// }
// export default SearchAppCallback

//use useCallback
import {useCallback, useState} from "react";

function  ItemList ({filterItems}){
    console.log('ItemList rendered')
    return(
        <ul>
            {filterItems().map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

function  SearchAppCallback(){
    const [query,setQuery]=useState('')
    const items = ['apple', 'banana', 'orange', 'pear', 'grape'];
    const filterItems=useCallback(()=>{
        return items.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
    },[query,items])

    return(
        <div>
            <input
                type="text"
                placeholder="Search items"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ItemList filterItems={filterItems}/>
        </div>
    )
}
export default SearchAppCallback
