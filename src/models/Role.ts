import { prop, getModelForClass } from "@typegoose/typegoose";

class Role {
    @prop()
    name: string
}

const RoleModel = getModelForClass(Role)
export default RoleModel;