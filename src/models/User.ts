import {prop, getModelForClass, Ref, ReturnModelType} from '@typegoose/typegoose';
import {Role} from './Role';

//Esta clase user define los datos de usuario que yo quiero guardar en mi base de datos.
export class User{

    @prop({required:true,  uppercase:true}) //mongoose
    firstname:string; //typescript
    
    @prop({required:true, uppercase:true})
    lastname:string;
    
    @prop({required:true, trim:true, lowercase:true})
    email:string;
    
    @prop({required:true, minlength: 8, maxlength:20})
    password:string;

    @prop({ref: ()=> Role})
    roles: Ref<Role>[]

    static async findByFirstName(
        this: ReturnModelType<typeof User>,
        firstname:string){
        return this.find({firstname});
    }

    encryptPassword(password: string){
        return '123xyz' + password;
    }
};


const UserModel = getModelForClass(User);
export default UserModel;