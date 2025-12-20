import mongoose,{Document, Schema} from "mongoose";

const contactSchema = new Schema({
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
},{
    timestamps:true
})

const Contact = mongoose.model("Contact", contactSchema)
export default Contact;