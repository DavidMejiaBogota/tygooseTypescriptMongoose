import {connect} from "mongoose";
import User from "./models/User";
import Product from "./models/product";

//Configuración de conexión a la base d edatos
async function connectDB() {
    const db = await connect('mongodb://localhost/typegoosedb');
    console.log('Dabase is connected to', db.connection.db.databaseName);
};

connectDB();

async function executeQueries() {
/*   const user = new User({
        firstname: "Luis",
        lastname: "perez",
        email: "  LUIS.PEREZ@gmail.com  ",
        password: "password7"
    });
    
    await user.save();
    console.log(user);

/*  const users = await User.find();
    console.log(users); */

/*    const user =await User.findById("65a84c2018178025e3076262", {firstname: 1, _id: 0});
    console.log(user); */

/*    const users = await User.findOneAndUpdate(
        {email: "haslycarolina.pallares@gmail.com"}, 
        {email: "haslynayibe.pallares@gmail.com"},
        {new: true}
        );
    console.log(users); */

    //Método para elminiar por id
/*    const users = await User.findByIdAndDelete("65a84ba4dfdb17a2195dbe00");
    console.log(users);*/

    //Método para elminiar por propieda email
/*    const users = await User.findOneAndDelete({email: "emilce.gomez@gmail.com"});
        console.log(users); */

    const product = await Product.create({
        name: "latopo",
        precio: 1000,
        url: "http://elproducto.co",
        tags: ['laptop', 'gaming', 'razer'],
        comments: [
            { text: 'Awesome product'},
            { text: 'X Product'}
        ]
    });
    console.log(product);
};

executeQueries();