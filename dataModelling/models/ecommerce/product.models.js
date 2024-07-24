import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        description: {
            required: true,
            type: String,
        },
        name: {
            required: true,
            type: String,
        },
        productImage: {
            type: String
        },
        // mongoDB could store images in buffer format but not recommended
        // these files usually stored using 3rd party services
        // after which if we want to show the image then we could just insert url of the stored image in 3rd party service
        // Cloudinary will provide url so we take string format here as type
        prize: {
            type: Number,
            default: 0,
        },
        stock: {
            default: 0,
            type: Number,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
        // refer other model
    }, {timestamps: true}
);

export const Product = mongoose.model("Product", productSchema);