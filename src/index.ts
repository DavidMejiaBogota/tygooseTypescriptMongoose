import {connect} from "mongoose";
import User from "./models/User";
import Product from "./models/product";
import Role from "./models/Role";

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
        roles:['65aa96727dc85da0ea3cd09f', '65aa96727dc85da0ea3cd0a1']
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

/*    const product = await Product.create({
        name: "latop",
        precio: 1000,
        url: "http://elproducto.co",
        tags: ['laptop', 'gaming', 'razer'],
        comments: [
            { text: 'Awesome product'},
            { text: 'X Product'}
        ],
        owner: "65a84ca6857e6b92af49c41f"
    });
    console.log(product); */

/*    const product = await Product.findById('65a99c568ab081a66b3e23e6').populate('owner');
    console.log(product); */

/*    const results = await Role.insertMany([
        {name: 'admin'},
        {name: 'guest'},
        {name: 'user'},
    ])

    console.log(results);*/

/*   const user = new User({
        firstname: 'ryan',
        lastname: 'Ray',
        email: 'ryanray@me.com',
        password: 'yupitiiiiiii',
        roles: ["65aa96727dc85da0ea3cd09f", "65aa96727dc85da0ea3cd0a1"],
    });

    await user.save();
    console.log(user); */
    
/*    const user = await User.findById('65aaa1f284fdd3b44b951275').populate('roles', 'name -_id');
    console.log(user); */

/*    const result = await User.findByFirstName('julian');
    console.log(result);*/

/*    const user = await User.find({firstname: 'LUIS'});
    console.log(user); */

    const user = new User({
        firstname: 'John',
        lastname: 'perez',
        email: 'john.perez@me.com',
    });
    user.password = user.encryptPassword("123456");
    await user.save();
    console.log(user);
};

executeQueries();