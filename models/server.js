// Importaciones Terceros
const express = require('express');
const cors = require('cors');

// Importaciones Propias
const db  = require('../db/conection')


class Server {
    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Middlewares
        this.dbConnection()
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    async dbConnection () {

        try {

            await db.authenticate();
            console.log('Base de Datos online')
        } catch (error) {
            throw new Error(error)
        }
    }


    middlewares () {

        // CORS 
        this.app.use(cors())

        // Lectura y Parseo del body
        this.app.use( express.json() )
        
        // Directorio Publico
        this.app.use( express.static('public') );
    }

    routes () {
       

        this.app.use(this.usuariosPath, require('../routes/userRoutes'))
    }
  
    listen () {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${ this.port }`);
          })
    }

}


module.exports = Server;