import {PORT} from './config.js'
import app from './app.js'

app.listen(PORT)
console.log(`Escuchando al servidor en el puerto ${PORT}`)