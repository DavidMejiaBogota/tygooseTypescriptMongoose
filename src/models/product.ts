import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Comment } from "./Comment";
//import {nanoid} from "nanoid";
import {User} from "./User";

class Product {
   //Detalle de las propiedades que se guardaran del producto
   @prop({type:String, required:true, trim:true, uppercase:true})
   name: string;

/*   @prop({required: true, default: () => nanoid() })
   sku: string */

   @prop({type: Number, default: 0})
   precio: number;

   @prop({required:true, lowercase:true})
   url: string;

   @prop({type: () => [String]})
   tags: string[];

   @prop({type: ()=> [Comment]})
   comments: Comment[];
   
   @prop({ref: () => User, required: true})
   owner: Ref<User>;

}


const ProductModel = getModelForClass(Product);
export default ProductModel;
