// iterator ........
// const fib = (num) => (
//     {
//         [Symbol.iterator]() {
//             let a = 1, b = 0, c = 1;
//             return {
//                 next(){
//                     if (a++ <= num) {
//                         [b, c] = [c, b + c];
//                         return { value: b, done: false }
//                     } else {
//                         return { done: true }
//                     }
//                 }
//             }
//         }
//     }
// )

// for (let i of fib(5)) {
//     console.log(i)
// }


// generator.....

function* fib(){
    let a=0; b=1, c=0;
    for(let i=0; i< 10; i++){
        c=a+b;
        a=b;
        b=c;
        yield c
    }
}

const a = fib();
for(let j=0; j<=10; j++){
    console.log(a.next())
}
















































// var promise = new Promise(async (resolve, reject)=>{
//     let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//     if(response.ok){
//         let data = await response.json();
//         resolve(data);
//     }else{
//         reject(new Error("Invalid URL!!!!!"))
//     }
// })

// promise.then(
//     (data)=>console.log("Data => ", data)  ,    (err)=>console.log(err)
// );

// // promise
// //     .then((data)=>console.log("Data => ", data))
// //     .catch((err)=>console.log("Error!", err));

