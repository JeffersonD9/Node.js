import express from 'express'
import routes from './routes/productos.routes.js'

const app = express()

//Middlewares

app.use(express.json())

//Rutas

app.use('/api', routes)

app.use((req,res)=>{
    res.status(404).json({

        message: 'NOT FOUND'
    })
})

export default app;