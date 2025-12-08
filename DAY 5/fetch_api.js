// let fetch_APi=async()=>{
//     const res=await fetch("https://jsonplaceholder.typicode.com/users")
//     const data=await res.json()
//     console.log(data)
// }
// fetch_APi()

let fetchch=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const user=await res.json()
    console.log(user)
}
fetchch()