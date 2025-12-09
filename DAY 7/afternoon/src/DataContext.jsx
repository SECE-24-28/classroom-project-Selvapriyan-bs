import React, { createContext, useState } from 'react';
const DataContext=createContext();
export const DataProvider = ({children}) => {
      const [name,setname]=useState("Rahul");
      const [count,setcount]=useState(100);
      const demo=()=>{
        return "india"
      }
  return (
    <DataContext.Provider value={{name,count,setname,setcount,demo}}>
    {children}
    </DataContext.Provider>
  )
}
export default DataContext;
