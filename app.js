// -> agregamos un app de express
// Usando objeto express
const express = require('express')
// App de Express
const app = express()
// -> Indicamos que usaremos un JSON 
app.use(express.json())
// -> Puerto en que vamos a ver nuetra app: localhost:3000
const port = 3000

// -> GET crea un endpoint que regrese una lista de explorers
// HTTP METHODS
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "Gualberto1"}
    const explorer2 = {id: 2, name: "Gualberto2"}
    const explorer3 = {id: 3, name: "Gualberto3"}
    const explorer4 = {id: 4, name: "Gualberto"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

