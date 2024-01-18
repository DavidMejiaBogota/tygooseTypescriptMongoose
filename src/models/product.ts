import { getModelForClass, prop } from "@typegoose/typegoose";

class Product {
   //Detalle de las propiedades que se guardaran del producto
   @prop({required:true, trim:true})
   name: string;

   @prop()
   precio: number;

   @prop({required:true, lowercase:true})
   url: string;

   @prop()
   tags: string[];
}

const ProductModel = getModelForClass(Product);
export default ProductModel;
