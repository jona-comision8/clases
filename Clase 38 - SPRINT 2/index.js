let express = require('express');
let app = express()
let path = require('path')
app.use(express.static('public'))

/* Ruta Home */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})


app.listen(3000, () => console.log("listo"))