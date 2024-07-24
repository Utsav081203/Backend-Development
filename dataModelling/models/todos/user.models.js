import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        // username: String,
        // email: String,
        // isActive: Boolean,
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email : {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            // required: [true, "password must be filled"],
            // if not true then the msg will be given
            // we can assign array to it this way
        }
    },
    {timestamps: true},
    // createdAt, updatedAt included after this.
    // pass the thing as second object to enable it.
);
// it is mongoose schema

export const User = mongoose.model("User", userSchema);
// In MongoDb this User name will be converted into lowercase and plural (users)
// This schema is used later used in other files
// Schema is not extracted from MongoDb but from these files itself
// make what model (User) and on what basis (userSchema)