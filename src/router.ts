import { Router } from 'express'
import { body } from 'express-validator';
import { createUser } from './handlers';

const router = Router();


router.post('/auth/register', 
    body('hanlde')
        .notEmpty().withMessage('El handle/nickname de usuario no puede estar vacio'),
    body('name')
        .notEmpty().withMessage('El nombre no puede estar vacio'),
    body('email')
        .isEmail().withMessage('El email no es valido'),
    body('password')
        .isLength({min:8})
        .notEmpty().withMessage('El password de usuario no puede estar vacio'),
    createUser)

export default router;