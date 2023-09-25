# Conexión a base de datos y modelos

## La estructura de carpetas que usaremos para tener nuestro proyecto organizado

- src
  -app.js
 -utils
  -database.js

### ORM es un modelo de programación que permite mapear las estructutas de una base datos relacional

-dangeroulySetInnerHtml
-Sequelize 1.- Instalar Sequelize->npm install sequelize
2.- Instalar controladores para la base de datos de postgres->npm install --save pg pg.hstore # Postgres

#### Conexion a una base de datos
-crear archivo database.js
1.-importar sequelize-> import { Sequelize } from 'sequelize;
2.-crear instancia constructor sequelize-> const db = new sequelize({
    host: 'localhost',
    username: 'postgres',
    database: 'models_db',
    port: 5432,
    password: 'root'
});

3.-export la instancia contructor-> export default db;

4.-import la instancia contructor del archivo database.js-> import db from './utils/database';

#### probar al conexion de la base de datos
5.- db.authenticate()-->es un metodo de sequelize de comprobar la conexion

##### Modelelos de sequelize
6.- los modelos de sequelize->un modelo es una represntacion actracta de una tabla de la base de datos en sequelize, el nombre de un medelo va en singular en sequelize

7.-crear un modelo en sequelize->
8.-crear una carpeta con un archivo llamado con cuakquier nomenglatura->users.model.js/usersModel.js/users,model.js
9.- import DataTypes en el archivo del modelo creado en sequelize->import { DataTypes } from 'sequelize';
10.- importar la instancia creada en el archivo database.js->import db from '../utils/database';
11.- crear una intancia del modelo->const User = db.defnine('users', )// se define el nombre del modelo y en la funcion define el parametro 1°er nombre de la tabla en plural, 2°do define todo los atributos / columnas de la tabla(id, username, email, password)
const User = db.define('users', {
    // definir todos los atributos / columnas de la tabla
    // id, usename, email, password
    //id int [pk, increment]
    id: {
        //tipo de dato
        type: DataTypes.INTEGER,
        //llave primaria
        primaryKey: true,
        //autoincrementable
        autoIncrement: true,
    },
    // username varchar(30) [not null]
    username: {
        type: DataTypes.STRING(30),
        //[not null]
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        //[unique]
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
12.- Exportar el modelo creado-> export default User;
13.-import la instancia contructor del archivo user.model.js en el archivo app.js y ejecutamos el modelo-> import User from './models/users.model.js';

###### Metodo de sincronizacion en sequelize
14.- db.sync()//crea la table si no existe(y si no hace nada si realmente existe)
        .the(() => console.log('base de datos sincronizada'))
        .catch(error => console.log(error))

###### Consultar informacion de  la base de datos con sequelize
15.-crear un usuario-> cuando recibimos una peticion post en el request con la informacion en el body,
debemos en el midleware captura la data del body y enviarla a la base de datos pero para acceder al body de la peticion necesito
el midleware app.use(express.json());
16.-mandar esta información a la base de datos
un metodo asyncrono model.create()// const jane = await User.create({ firstname: "Jane", lastname: "Doe" });
nota: debe ser capase de manejar los errores
17.-usar el bloque-> try {

} catch (error) {

}

18.-//READ users
//puede leer en la base de datos con el metodo findAll en Sequelize
//GET /users-> devolver un json con todos los usuarios en la base de datos.
app.get('/users' async (req, res) => {
    try {

    } catch {

    }
});

###### cors (conexion entre backend y fromtend)
//cuando desplegamos nuestro servicio obtenemos una url la que vamos a consumir o conectarnos o interactuar con nuestra API en la cual lo haciamos con Postman
//
