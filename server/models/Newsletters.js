import mongoose, {Document, Schema} from "mongoose";

const newsLetterSchema = new Schema({
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      unique: true,
    }
},{
    timestamps:true
})

const NewsLetter = mongoose.model("NewsLetter", newsLetterSchema);

export default NewsLetter;