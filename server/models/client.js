import mongoose, {Document, model, Schema} from "mongoose";

const ClientSchema = new Schema({
    name:{
        type: String,
        required: [true , "client name is required"],
        trim: true
    },
    description: {
      type: String,
      required: [true, 'Client description is required'],
      trim: true,
    },
    designation: {
      type: String,
      required: [true, 'Client designation is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Client image is required'],
    },
},{
    timestamps: true
});

const Client = model("Client", ClientSchema);
export default Client;