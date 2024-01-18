import {prop, getModelForClass} from '@typegoose/typegoose';

//Esta clase user define los datos de usuario que yo quiero guardar en mi base de datos.
class User{

    @prop({required:true,  uppercase:true}) //mongoose
    firstname:string; //typescript
    
    @prop({required:true, uppercase:true})
    lastname:string;
    
    @prop({required:true, trim:true, lowercase:true})
    email:string;
    
    @prop({required:true, minlength: 8, maxlength:20})
    password:string;
    
}

const UserModel = getModelForClass(User);
export default UserModel;