const app = require('express')();
const path = require('path')
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'view/index.html'));
})

app.listen(8080, ()=>{
    console.log("Server running on port "+8080)
})