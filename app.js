// -> agregamos un app de express
// Usando objeto express
const express = require('express')
// App de Express
const app = express()
// -> Indicamos que usaremos un JSON 
app.use(express.json)
// -> Puerto en que vamos a ver nuetra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listenerCount(port, () => {
    console.log(`Example app listening on port ${port}`);
})

