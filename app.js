const express = require('express')
const path = require('path')
const app = express();


app.use(express.static(path.join(__dirname,'/')));

//midelware
app.get('/', (req, res) => { res.sendFile('main.html',{root: path.join(__dirname,'')});
 })
// app.post('/send',(req,res) => {console.log(req.body)})
//Port at which Server Will listen
const PORT = process.env.PORT || 12345
app.listen(PORT,()=> console.log('Server is running on port '+PORT))
