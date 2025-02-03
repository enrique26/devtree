import type { Request, Response} from 'express'
import User from "../models/Users";
import { hashPassword } from '../utils/auth';
import slug from 'slug';
import { validationResult } from 'express-validator';

export const createUser = async (req: Request,res: Response) => {

    //errors middleware
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()});
        return;
    }

    const {email, password} = req.body;
    const userExist = await User.findOne({email}) 

    if(userExist) {
        const error = new Error('El usaurio ya existe');
        res.status(409).json({error:error.message});
        return;
    }

    const handle = slug(req.body.handle, '')
    const handleExist = await User.findOne({handle});
    if(handleExist){
        const error = new Error('El nombre de usuario ya existe');
        res.status(409).json({error:error.message});
        return;
    }
    const hash = await hashPassword(password);
    const user = new User({...req.body, password:hash, handle: handle});


    await user.save()

    res.status(201).send('creado correctamente')
}