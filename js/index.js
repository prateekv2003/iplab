var promise = new Promise(async (resolve, reject)=>{
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    if(response.ok){
        let data = await response.json();
        resolve(data);
    }else{
        reject(new Error("Invalid URL!!!!!"))
    }
})

promise.then(
    (data)=>console.log("Data => ", data)  ,    (err)=>console.log(err)
);

// promise
//     .then((data)=>console.log("Data => ", data))
//     .catch((err)=>console.log("Error!", err));