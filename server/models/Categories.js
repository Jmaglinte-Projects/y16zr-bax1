import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: String,
    // selectedFile: String,
    // likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
}, { collection: 'categories' })

const Category = mongoose.model('categories', categorySchema);

export default Category;