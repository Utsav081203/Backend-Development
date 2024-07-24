import mongoose from 'mongoose';

// mini model
// for structure of individual order
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
    }
});

const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
        },
        cutomer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        orderItems: {
            type: [orderItemSchema],
            // type: [
            //     {
            //         productId: {
            //             type: mongoose.Schema.Types.ObjectId,
            //             ref: "Product",
            //         }
            //         quantity: {
            //             type:Number,
            //             required: true,
            //         }
            //     }
            // ],
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["PENDING", "CANCELLED", "DELIVERED"],
            default: "PENDING",
            // restrictions (could only be one of the above)
        },
    }
    , {timestamps: true}
);

export const Order = mongoose.model("Order", orderSchema);