import pool from '../db/conexion.js'

//Inicio

const index = (req,res)=>{

    res.send('Inicio del CRUD')
}

//ruta - /Productos

const getProductos = async (req,res)=>{

    const sql = 'SELECT * FROM productos'

    try {
        const [rows] = await pool.query(sql)
        res.json(rows)

    } catch (error) {

        return res.status(500).json({
         message: 'Algo ha ido mal'

        })
    }
}

// ruta - /Productos/:id

const getByIdProductos = async (req,res)=>{

    const sql = 'SELECT * FROM productos WHERE id = ?'

    try {
        const [rows] = await pool.query(sql,[req.params.id])
    
        if(rows.length <= 0) return res.status(404).json({
            message: 'Producto no encontrado'
        })
    
        res.json(rows[0])

    } catch (error) {
        
        return res.status(500).json({
            message: 'Algo ha ido mal'
   
           })
    }

}

// ruta - /Productos/create

const createProductos = async (req,res)=>{

    let producto = req.body.producto
    let precio = req.body.precio
    let cantidad = req.body.cantidad

    if( producto == 0 || !isNaN(producto) || isNaN(precio) || precio < 200 || precio > 2500 || isNaN(cantidad) || cantidad > 200 || cantidad <= 0 || cantidad % 1 !== 0 ){

       return res.status(400).json({

            message: 'Solicitud invalida'
        })
    }else{

        try {

            const sql = 'INSERT INTO productos SET ?'
        
            const [rows] = await pool.query(sql, {producto:producto, precio:precio, cantidad:cantidad})
        
            res.send({
            
                id: rows.insertId,
                producto,
                precio,
                cantidad
            })
    
        } catch (error) {
            
            return res.status(500).json({
                error: 'Algo ha ido mal'
                
               })
        }
    }

}

// ruta - /Productos/edit/:id

const updateProductos = async(req,res)=>{

    const id = req.params.id
    const producto = req.body.producto
    const precio = req.body.precio
    const cantidad = req.body.cantidad

    if( producto == 0 || !isNaN(producto) || isNaN(precio) || precio < 200 || precio > 2500 || isNaN(cantidad) || cantidad > 200 || cantidad <= 0 || cantidad % 1 !== 0 ){

        return res.status(400).json({
 
             message: 'Solicitud invalida'
         })
     }else{
    try {
        const sql = 'UPDATE productos SET  producto = IFNULL(?, producto) , precio = IFNULL(?, precio), cantidad = IFNULL(?, cantidad   )  WHERE id = ?'
        const [result] = await pool.query(sql,[producto,precio,cantidad,id])
    
        if(result.affectedRows == 0) return res.status(404).json({
            message: "Producto no encontrado"
        })
    
        const [rows] = await pool.query('SELECT * FROM productos WHERE id = ?',[id])
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
            message: 'Algo ha ido mal'
   
           })
    }
}
}

// ruta - /Productos/delete/:id

const deleteProductos = async(req,res)=>{

    const sql = 'DELETE FROM productos WHERE id = ?'
    try {
        const [result] = await pool.query(sql,[req.params.id])
    
        if (result.affectedRows <= 0) return res.status(404).json({
            message: "Empleado no encontrado"
        })
    
        res.sendStatus(204)
            
    } catch (error) {
        
        return res.status(500).json({
            message: 'Algo ha ido mal'
   
           })
    }

}
export {index,getProductos,getByIdProductos,createProductos,updateProductos,deleteProductos};