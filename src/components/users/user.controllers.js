//1- Import el modelo de User
import User from "../../models/users.models.js";

const createUsers = async (req, res) => {
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
};

//2.- crear un controlador de buscar getAllUsers
const getAllUsers = async (req, res) => {
    try {
        //hago una solicitud a mi base de datos 
        const users = await User.findAll();
        //me muestre todo la informacion de ese modelo en un formato JSON
        res.json(users);
    } catch (error) {
        res.status(400).json(error);
    }
};

const getUserId = async (req, res) => {
    try {
        const {id} = req.params; //params es un objeto {id: 4}
        const user = await User.findByPk(id);
        res.json(user);
    } catch (error) {
        res.status(400).json(error);
    }
};

const updateUserId = async (req, res) => {
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
};

const deleteUserId =  async (req, res) => {
    try {
        const {id} = req.params;

        await User.destroy({
            where: {id}
        });
        res.status(204).end()// termina con la peticion
    } catch (error) {
        res.status(400).json(error);
    }
};

//nota el export default solo esxporta una variable, una funcion, controller, etc
//export los controladores creados
export {
    createUsers,
    getAllUsers,
    getUserId,
    updateUserId,
    deleteUserId
}