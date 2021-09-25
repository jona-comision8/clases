let express = require('express');
let app = express();
let port = 4000;
let path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
   res.send("<h1>Home</h1>")
})

app.get('/prueba-html', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`))