import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: true,
        _id: false
    }
})
class Comment {
    @prop()
    text: string;
};
class Product {
   //Detalle de las propiedades que se guardaran del producto
   @prop({type:String, required:true, trim:true, uppercase:true})
   name: string;

   @prop({type: Number, default: 0})
   precio: number;

   @prop({required:true, lowercase:true})
   url: string;

   @prop({type: () => [String]})
   tags: string[];

   @prop({type: ()=> [Comment]})
   comments: Comment[];
   
}


const ProductModel = getModelForClass(Product);
export default ProductModel;
