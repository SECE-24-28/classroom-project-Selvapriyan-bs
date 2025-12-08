function demo(){
    console.log("Demo function");
}

//---------------------
demo();
let swap=()=>{
    console.log("Arrow function")
    return "india";
}
swap();
//----------------------
let press=(a,b)=>a+b;
console.log(press(10,20));