import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        complete: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        // this attribute references User (name must be of the one inside model("___"))
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo",
            }
        ],
        // array of SubTodos (each element of array will have object with schema of SubTodo)
    }, {timestamps: true},
);

export const Todo = mongoose.model("Todo", todoSchema);