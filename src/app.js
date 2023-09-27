import express from 'express';
import cors from 'cors';
import db from './utils/database.js';
import User from './models/users.models.js';
import "dotenv/config";

//Importamos el router de users
import userRoutes from './components/users/users.routes.js';

User;

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRoutes);

const PORT = 8000;

//Probar conexion con la base de datos
db.authenticate()
//si todo sale bien
 .then(() => {console.log('Conexion correcta')})
 // si algo sale mal 
 .catch(error => console.log(error))

 // si existe la tabla y hay modificaciones -> altera la tabla esto pasamos un objeto db.sync{alter: true}

db.sync()//crea la table si no existe(y si no hace nada si realmente existe)
        .then(() => console.log('base de datos sincronizada'))
        .catch(error => console.log(error))

// health check
app.get('/', (req, res) => {
    res.send('ok');
})

//CREATE user
//Cuando se haga un request a la ruta /users POST crear un usuario
/*app.post('/users', async (req, res) => {
    try {
        const { body } = req;
         //mandar esta info a la base de datos
         // * INSERT INTO users ({username, email, password})
        const user = await User.create(body);
        // si todo sale bien
        res.status(201).json(user);
        //si algo sale mal catch atrapa el error
    } catch (error) {
        //mostramos el error
        res.status(400).json(error)
    }
});*/

//READ users
//GET /users-> devolver un json con todos los usuarios en la base de datos.
//esto es como se hiciera un SELECT * FROM user;
/*app.get('/users', async (req, res) => {
    try {
        //hago una solicitud a mi base de datos 
        const users = await User.findAll();
        //me muestre todo la informacion de ese modelo en un formato JSON
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
    }
});*/

//SELECT * FROM users WHERE id=4;
// GET /users:id-> path params
// ? como mandamos el id en este get
// path params
/*app.get('/users/:id', async (req, res) => {
    try {
        const {id} = req.params; //params es un objeto {id: 4}
        const user = await User.findByPk(id);
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
});*/

//UPDATE ...... WHERE id = 5;
//PUT '/user/:id'->
// la información a actualizar por el body

/*app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;//obtener el id del request params
        const {body} = req;//obtener body de la petición a la informacion que voy a actualizar
    
    const user = await User.update(body, {//primer objeto es la info
        where: {id}//segundo objeto es where: id == {id: id}       
    });
    res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
});*/

/*app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params;

        await User.destroy({
            where: {id}
        });
        res.status(204).end()// termina con la peticion
    } catch (error) {
        res.status(400).json(error);
    }
});*/ 

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})