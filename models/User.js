const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
//   articles: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Article",
//     },
//   ],
});

module.exports = User = mongoose.model("User", UserSchema);