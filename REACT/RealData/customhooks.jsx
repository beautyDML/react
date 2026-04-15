//basically its puts all login in reusable functin so we don't have to write the same logic again and again
// for example we have three Component..dashboard..adminpanel..studentdashboard..
// now in all three we will use axios same loading error handling..we will
//  have to write same code in all three file so to prevent this we use custom hooks


// folder struct
// src-hooks-userhooks.jsx
//userhooks.jsx:
import { useEffect, useState } from "react";
import axios from 'axios';

// step 2: create function
function useFetch(){
//step 3: states(in which we have three stats(user,loading and error))
const [data,setdata]=useState([]);
const [loading,setloading]=useState(true);
const [error,seterror]=useState(null);

useEffect(()=>{
    const fetchData=async()=>{
        try{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users");
        setdata(res.data);
    }catch(err){
        seterror("something went wrong");
    }finally{
        setloading(false);
    }
};
fetchData();
},[url]);
return {data,loading,error};
}

//export default useFetch;


//how to use this in component:
// user.jsx
import { useFetch } from "./hooks/userhooks";
export default function (){
    const {data:users,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <h2>Loading</h2>
    if(error) return <p>{error}</p>


return(
    <div>
    {user.map(user=>{
        <p key={user.id}>{user.name}</p>
    })}
    </div>
);
}