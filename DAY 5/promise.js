let res=fetch("https://jsonplaceholder.typicode.com/users")
//the fetch is the promise function which is used to fetch the data from the server
// .then((res)=>res.json())
// .then((data)=>console.log(data))
//with three stage
//fetch can control the assynchronized flow of execution
//fetch only return only the state ,,not the Data

console.log(res)

//use then to return its information
//------------------------------------------------------------------------
let re=fetch("https://jsonplaceholder.typicode.com/users").then((re)=>{
  return re.json()
}).then(user=>{
    console.log(user);
})

//-------------------------------------------------------------------------

// console.log(re)
let red=fetch("https://jsonplaceholder.typicode.com/posts").then((re)=>{
  return re.json()
}).then(user=>{
    console.log(user);
})
//--------------------------------------------------------------------------


/* 
3 stages of promise 
 a promise always return the object:

1.pending -> the promise is still working;
2.fulfilled(Resolved) -> the promise is completed;
3.Rejected->the promise failed
*/