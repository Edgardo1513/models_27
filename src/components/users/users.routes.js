//1.- import el router de express
import { Router } from 'express';
//4. - destructurar en un objetos el importar el controlador creado
import { createUsers, getAllUsers, getUserId, updateUserId, deleteUserId} from './user.controllers.js';

//2.- crear la instancia del Router
const router = Router();

//crear usuarios
router.post('/users', createUsers);

//3.- obtener a todos los usuarios
router.get('/users', getAllUsers);

//3.1- //obtener un usuario por su id
router.get('/users/:id', getUserId);

//3.2- //actualizar usuario por su id
router.put('/users/:id', updateUserId);

router.delete('users/:id', deleteUserId)

//export la instancia router
export default router;
