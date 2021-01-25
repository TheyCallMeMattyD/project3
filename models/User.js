const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


// Create Schema
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        favoritesEvents: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Post"
            }
          ]
    }
);

const User = mongoose.model("User", UserSchema);

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;
