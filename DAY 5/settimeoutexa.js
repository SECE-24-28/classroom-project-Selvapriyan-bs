
console.log("One")
setTimeout(()=>
    {
        console.log("two")
    },.0)
// console.log("two")
console.log("three")
// setTimeout(demo,1000)

//----------------------
//settimeout nested loop
/* is used to inside the settimeout outer function to make sure that the 'three' is executed after the 'two'*/

console.log("process 1")
setTimeout(() => {
    console.log("process 2")
    setTimeout(() => {
        console.log("process 3")
    },2000);
}, 2000);