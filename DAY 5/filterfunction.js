let employee=[{ena:"arun",mob:101},
    {ena:"arjun",mob:102},
    {ena:"arun",mob:103},
    {ena:"arvinth",mob:104},
    {ena:"bob",mob:105}
]
let newb=employee.filter((emp)=>{
    return emp.ena.includes("10")
})
console.log(newb)